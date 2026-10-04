#!/usr/bin/env python3
"""
Python Learning Arena - Local Server & Launcher
میدان تمرین و بازبینی پایتون
"""
import os
import sys
import webbrowser
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

PORT = 8085
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

class QuietHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def log_message(self, format, *args):
        # Clean logging
        sys.stdout.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]}\n")

def run():
    global PORT
    while is_port_in_use(PORT):
        PORT += 1

    server_address = ('127.0.0.1', PORT)
    httpd = HTTPServer(server_address, QuietHandler)
    url = f"http://127.0.0.1:{PORT}/"

    print("=" * 60)
    print(" 🚀 PYTHON LEARNING ARENA (میدان تمرین و بازبینی پایتون)")
    print(f" 📂 مسیر پروژه: {DIRECTORY}")
    print(f" 🌐 آدرس وب: {url}")
    print("=" * 60)
    print(" در حال باز کردن مرورگر پیش‌فرض...")
    print(" برای متوقف کردن سرور، کلیدهای Ctrl + C را فشار دهید.\n")

    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"ناتوانی در باز کردن خودکار مرورگر: {e}")
        print(f"لطفاً به صورت دستی این آدرس را باز کنید: {url}")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n سرور با موفقیت متوقف شد.")
        httpd.server_close()

if __name__ == '__main__':
    run()
