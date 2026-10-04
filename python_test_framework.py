#!/usr/bin/env python3
"""
Python Learning Arena - CLI Test Framework
چارچوب آزمون و تصحیح خودکار ترمینال برای تمرین‌های پایتون
"""
import sys
import os
import json
import re

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
BOLD = "\033[1m"
RESET = "\033[0m"

DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "python_exercises_db.js")

def load_exercises():
    if not os.path.exists(DB_FILE):
        print(f"{RED}خطا: فایل پایگاه داده تمرین‌ها یافت نشد: {DB_FILE}{RESET}")
        sys.exit(1)
    with open(DB_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract JSON part
    prefix = "window.EXERCISES_DATA = "
    idx = content.find(prefix)
    if idx == -1:
        print(f"{RED}خطا در تجزیه فایل {DB_FILE}{RESET}")
        sys.exit(1)
    json_text = content[idx + len(prefix):].rstrip().rstrip(";")
    return json.loads(json_text)

def run_tests_for_code(code_str, tests_str):
    global_env = {}
    try:
        exec(code_str, global_env)
        exec(tests_str, global_env)
        return True, "تمام تست‌ها با موفقیت پاس شدند! 🎯"
    except AssertionError as ae:
        msg = str(ae) if str(ae) else "عدم تطابق خروجی با شرط آزمون"
        return False, f"خطای تست (AssertionError): {msg}"
    except Exception as e:
        return False, f"خطای زمان اجرا ({type(e).__name__}): {str(e)}"

def main():
    exercises = load_exercises()
    print("=" * 65)
    print(f"{CYAN}{BOLD} ⚡ PYTHON LEARNING ARENA - CLI TEST & VALIDATION SYSTEM ⚡{RESET}")
    print(f" تعداد کل تمرین‌های لول‌بندی شده: {len(exercises)} تمرین در ۵ سطح")
    print("=" * 65)

    passed_count = 0
    total_count = len(exercises)

    for i, ex in enumerate(exercises, 1):
        ex_id = ex["id"]
        level = ex["level"]
        title = ex["title"]
        solution = ex["solution"]
        tests = ex["testsPython"]

        print(f"[{i:02d}/{total_count}] [سطح {level}] {title} ... ", end="", flush=True)
        ok, msg = run_tests_for_code(solution, tests)
        if ok:
            print(f"{GREEN}✓ پاس شد ({ex['points']} XP){RESET}")
            passed_count += 1
        else:
            print(f"{RED}✗ خطا: {msg}{RESET}")

    print("=" * 65)
    if passed_count == total_count:
        print(f"{GREEN}{BOLD}🎉 تبریک! هر {total_count} تمرین و آزمون‌های سنجش صحت ۱۰۰٪ تأیید شدند.{RESET}")
    else:
        print(f"{YELLOW}نتیجه: {passed_count} از {total_count} تست پاس شدند.{RESET}")
    print("=" * 65)

if __name__ == '__main__':
    main()
