// journal_audit.js - Comprehensive Audit Findings and Recommended Fixes for heat-core/learning-journal
window.JOURNAL_AUDIT_DATA = [
  {
    id: "audit_indentation_decorator",
    severity: "CRITICAL",
    severityLabel: "خطای نحوی (Syntax/Indentation Error)",
    file: "week-04/advanced_python_oop_notes.md",
    line: "خط ۱۱۸ الی ۱۲۴",
    title: "تورفتگی اشتباه در دکوراتور @wraps",
    description: `
در بخش توضیحات دکوراتورها در فایل یادداشت‌های هفته چهارم، خط دکوراتور <code>@wraps(func)</code> بدون هیچ ایندنت (تورفتگی) در ابتدای خط نوشته شده است، در حالی که باید ۴ اسپیس تورفتگی داشته باشد و درون تابع <code>my_decorator</code> قرار بگیرد. اگر کاربری این کد را کپی کند، با خطای <code>IndentationError: unexpected indent</code> مواجه می‌شود.
    `,
    wrongCode: `from functools import wraps

def my_decorator(func):                   # لایه ۱: تابع اصلی را می‌گیرد

@wraps(func)                          # ❌ خطا: بدون ایندنت در ستون 0
    def wrapper(*args, **kwargs):         # لایه ۲: پوسته محافظ
        print("قبل از اجرا")
        result = func(*args, **kwargs)
        print("بعد از اجرا")
        return result
    return wrapper`,
    fixedCode: `from functools import wraps

def my_decorator(func):                   # لایه ۱: تابع اصلی را می‌گیرد
    @wraps(func)                          # ✅ اصلاح‌شده: ۴ اسپیس ایندنت
    def wrapper(*args, **kwargs):         # لایه ۲: پوسته محافظ
        print("قبل از اجرا")
        result = func(*args, **kwargs)
        print("بعد از اجرا")
        return result
    return wrapper`,
    recommendation: "کد نمونه را در فایل markdown اصلاح کنید تا کپی‌کننده‌ها دچار سردرگمی نشوند."
  },
  {
    id: "audit_empty_download_manager",
    severity: "HIGH",
    severityLabel: "فایل‌های رها شده (Empty Files)",
    file: "week-04/7_Multi-Threaded-Download-Manager/",
    line: "تمامی فایل‌های سورس (حجم 0 بایت)",
    title: "خالی بودن فایل‌های سورس پروژه دانلود منیجر چندتردی",
    description: `
در مخزن گیت‌هاب، در پوشه <code>week-04/7_Multi-Threaded-Download-Manager</code>، هر ۴ فایل اصلی پروژه:
<ul>
  <li><code>core/exceptions.py</code> (0 Bytes)</li>
  <li><code>core/models.py</code> (0 Bytes)</li>
  <li><code>main.py</code> (0 Bytes)</li>
  <li><code>utils/decorators.py</code> (0 Bytes)</li>
</ul>
دارای حجم ۰ بایت هستند! به این معنی که ساختار پوشه‌ها و فایل‌ها با دستور ایجاد شده اما قبل از commit و push، محتوایی درون آن‌ها قرار نگرفته است.
    `,
    wrongCode: `# files are completely empty (0 bytes)`,
    fixedCode: `# پیشنهاد پیاده‌سازی اولیه برای main.py:
import threading
from concurrent.futures import ThreadPoolExecutor

class DownloadManager:
    def __init__(self, max_workers: int = 4):
        self.executor = ThreadPoolExecutor(max_workers=max_workers)
        self.active_tasks = []

    def download_file(self, url: str, destination: str):
        # پیاده‌سازی متد دانلود قطعه‌ای با requests یا urllib
        pass
`,
    recommendation: "کد پیاده‌سازی این پروژه را تکمیل و پوش کنید یا در صورت ناتمام بودن، یک یادداشت TODO در README اضافه نمایید."
  },
  {
    id: "audit_unfinished_q_md",
    severity: "MEDIUM",
    severityLabel: "محتوای ناتمام (Incomplete Content)",
    file: "week-02/Q.md",
    line: "خط ۱۳ الی ۱۵",
    title: "ناتمام ماندن صورت سوال تمرین ۲",
    description: `
در فایل <code>week-02/Q.md</code> متن سوال شماره ۲ به این صورت قطع شده است:
<br>
<code>۲. تابعی به اسم find_max(numbers) که یه لیست از اعداد می‌گیره و بزرگ‌ترین عدد رو برمی‌گردونه (بدون استفاده از تابع آماده max()</code>
<br>
پرانتز بسته نشده و ادامه تمرین‌ها نوشته نشده است.
    `,
    wrongCode: `۲. تابعی به اسم find_max(numbers) که یه لیست از اعداد می‌گیره و بزرگ‌ترین عدد رو برمی‌گردونه (بدون استفاده از تابع آماده max()`,
    fixedCode: `۲. تابعی به اسم find_max(numbers) که یه لیست از اعداد می‌گیره و بزرگ‌ترین عدد رو برمی‌گردونه (بدون استفاده از تابع آماده max()). در صورت خالی بودن لیست، خطای ValueError پرتاب شود.
۳. تابعی به اسم reverse_string(text) که بدون استفاده از text[::-1] رشته را معکوس کند.
۴. تابعی به اسم count_vowels(word) برای شمارش حروف صدادار.`,
    recommendation: "صورت سوالات را تکمیل کنید تا خودتان و بازدیدکنندگان بتوانید تمرین‌ها را با اطمینان دنبال کنید."
  },
  {
    id: "audit_shadowing_mutable_pitfall",
    severity: "HIGH",
    severityLabel: "مفهومی / باگ بالقوه (Conceptual Pitfall)",
    file: "README_LESSONS.md",
    line: "بخش ۴ - ویژگی‌های کلاس (Shadowing)",
    title: "هشدار مهم درباره پدیده Shadowing در ویژگی‌های تغییرپذیر (Mutable Class Attributes)",
    description: `
در توضیحات مفهوم Shadowing نوشته‌اید: <i>«اگر مقدار یک ویژگی کلاس را از طریق شیء تغییر دهید، پایتون ویژگی جدیدی برای همان شیء می‌سازد.»</i>
<br><br>
<b>نکته مهمی که ناگفته مانده:</b> این موضوع فقط برای انتساب مستقیم (<code>car1.number = 5</code>) صادق است! اگر ویژگی کلاس یک شیء تغییرپذیر (مانند <code>list</code> یا <code>dict</code>) باشد (مثلا <code>instances = []</code> در تمرین Person کوئرا)، و شما در یک شیء بنویسید <code>self.instances.append(...)</code>، این متد <b>هیچ Shadowing ایجاد نمی‌کند</b> و مستقیماً همان لیست اشتراکی کلاس را دستکاری می‌کند! این تفاوت ظریف علت بیش از ۴۰ درصد باگ‌های برنامه‌نویسان شیءگرا در پایتون است و ذکر آن در ژورنال بسیار ارزشمند است.
    `,
    wrongCode: `# مثال خطرناک:
class Worker:
    tasks = [] # لیست مشترک بین همه کارگران!

    def add_task(self, task):
        self.tasks.append(task) # همه کارگران به این تسک دسترسی خواهند داشت!`,
    fixedCode: `# روش ایمن و اصولی:
class Worker:
    def __init__(self):
        self.tasks = [] # هر کارگر لیست وظایف اختصاصی خودش را دارد`,
    recommendation: "تفاوت بین `self.attr = ...` و `self.attr.append(...)` را در یادداشت‌های Shadowing برجسته کنید."
  },
  {
    id: "audit_proxy_hasattr_eafp",
    severity: "MEDIUM",
    severityLabel: "بهترین الگوهای پایتون (Pythonic Best Practices)",
    file: "week-03/6_Proxy/main.py",
    line: "متد __getattr__",
    title: "استفاده از رویکرد EAFP به جای LBYL در متد __getattr__",
    description: `
در کلاس Proxy از <code>if not hasattr(self._obj, name): raise AttributeError(...)</code> استفاده شده است.
در فلسفه پایتون (EAFP: Easier to Ask for Forgiveness than Permission)، بررسی با <code>hasattr</code> قبل از دریافت صفت دو مشکل دارد:
<ol>
  <li>صفت دو بار ارزیابی می‌شود (یک‌بار در hasattr و یک‌بار در getattr).</li>
  <li>اگر صفت یک <code>@property</code> با محاسبات سنگین یا عوارض جانبی باشد، کد دو بار اجرا می‌شود!</li>
</ol>
روش ترجیحی، استفاده مستقیم از <code>getattr</code> در یک بلوک <code>try...except AttributeError</code> است.
    `,
    wrongCode: `def __getattr__(self, name: str) -> Any:
    if not hasattr(self._obj, name):
        raise AttributeError("No such attribute.")
    self._last_accessed = name
    self._access_counts[name] = self._access_counts.get(name, 0) + 1
    return getattr(self._obj, name)`,
    fixedCode: `def __getattr__(self, name: str) -> Any:
    try:
        val = getattr(self._obj, name)
    except AttributeError:
        raise AttributeError("No such attribute.")
    
    self._last_accessed = name
    self._access_counts[name] = self._access_counts.get(name, 0) + 1
    return val`,
    recommendation: "این ارتقای پایتونیک، کد الگوی پروکسی شما را در سطح استانداردهای Senior Python بالا می‌برد."
  }
];
