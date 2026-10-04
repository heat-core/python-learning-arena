// python_exercises_db.js - 20 Tiered Exercises for Python Learning Arena
window.EXERCISES_DATA = [
  {
    "id": "w1_01_even_max",
    "level": 1,
    "levelTitle": "سطح ۱: مبانی و مهندسی پایتون",
    "week": "هفته ۱",
    "title": "توابع پایه: تشخیص زوج بودن و بیشینه بدون تابع آماده",
    "category": "Functions & Control Flow",
    "difficulty": "آسان",
    "points": 50,
    "tags": [
      "functions",
      "loops",
      "conditionals"
    ],
    "description": "دو تابع زیر را پیاده‌سازی کنید:<br>۱. <code>is_even(number: int) -> bool</code>: در صورت زوج بودن <code>True</code> وگرنه <code>False</code>.<br>۲. <code>find_max(numbers: list)</code>: بیشترین مقدار را <b>بدون استفاده از max()</b> بیابید. در صورت خالی بودن لیست خطای <code>ValueError('لیست خالی است')</code> پرتاب کنید.",
    "starterCode": "def is_even(number: int) -> bool:\n    pass\n\ndef find_max(numbers: list) -> int | float:\n    pass\n",
    "hints": [
      "از عملگر باقیمانده (%) استفاده کنید: number % 2 == 0",
      "بررسی کنید if not numbers: raise ValueError('لیست خالی است')",
      "با حلقه روی لیست، مقدار بیشینه را مقایسه و نگهداری کنید."
    ],
    "solution": "def is_even(number: int) -> bool:\n    return number % 2 == 0\n\ndef find_max(numbers: list) -> int | float:\n    if not numbers:\n        raise ValueError('لیست خالی است')\n    highest = numbers[0]\n    for n in numbers[1:]:\n        if n > highest:\n            highest = n\n    return highest\n",
    "testsPython": "assert is_even(4) == True, '4 باید زوج باشد'\nassert is_even(7) == False, '7 فرد است'\nassert is_even(0) == True, '0 زوج است'\nassert find_max([1, 8, 3, 9, 2]) == 9, 'بیشینه باید 9 باشد'\nassert find_max([-5, -10]) == -5, 'بیشینه منفی رعایت نشد'\ntry:\n    find_max([])\n    assert False, 'باید خطای ValueError پرتاب می‌شد'\nexcept ValueError:\n    pass\n"
  },
  {
    "id": "w1_02_word_stats",
    "level": 1,
    "levelTitle": "سطح ۱: مبانی و مهندسی پایتون",
    "week": "هفته ۱",
    "title": "شمارنده بسامد واژه‌ها و تحلیل متن (Dictionary & Strings)",
    "category": "Data Structures",
    "difficulty": "آسان",
    "points": 60,
    "tags": [
      "strings",
      "dict",
      "iteration"
    ],
    "description": "تابعی به نام <code>analyze_text(text: str) -> dict</code> بنویسید که علائم نگارشی (<code>.,!?</code>) را حذف کرده، متن را به حروف کوچک تبدیل نموده و دیکشنری با کلیدهای <code>total_words</code> (تعداد کلمات)، <code>word_counts</code> (تعداد هر کلمه) و <code>most_repeated</code> (پرتکرارترین کلمه یا None) بازگرداند.",
    "starterCode": "def analyze_text(text: str) -> dict:\n    pass\n",
    "hints": [
      "حروف را با text.lower() یکدست کرده و علائم نگارشی را با فاصله جایگزین کنید.",
      "با text.split() کلمات را جدا کنید.",
      "با دیکشنری شمارش کنید: counts[w] = counts.get(w, 0) + 1"
    ],
    "solution": "def analyze_text(text: str) -> dict:\n    cleaned = ''\n    for ch in text.lower():\n        if ch in '.,!?\\n':\n            cleaned += ' '\n        else:\n            cleaned += ch\n    words = cleaned.split()\n    if not words:\n        return {'total_words': 0, 'word_counts': {}, 'most_repeated': None}\n    counts = {}\n    for w in words:\n        counts[w] = counts.get(w, 0) + 1\n    most = max(counts, key=counts.get)\n    return {'total_words': len(words), 'word_counts': counts, 'most_repeated': most}\n",
    "testsPython": "res = analyze_text('Python is great, python is fast!')\nassert res['total_words'] == 6, 'تعداد کلمات اشتباه است'\nassert res['word_counts']['python'] == 2, 'شمارش python اشتباه است'\nassert res['most_repeated'] in ['python', 'is'], 'پرتکرارترین کلمه اشتباه است'\nempty = analyze_text('    ')\nassert empty['total_words'] == 0 and empty['most_repeated'] is None\n"
  },
  {
    "id": "w1_03_flatten_list",
    "level": 1,
    "levelTitle": "سطح ۱: مبانی و مهندسی پایتون",
    "week": "هفته ۱",
    "title": "تسطیح لیست‌های تو در تو (List Flattening & Recursion)",
    "category": "Recursion & Algorithms",
    "difficulty": "متوسط",
    "points": 70,
    "tags": [
      "lists",
      "recursion",
      "algorithms"
    ],
    "description": "تابعی به نام <code>flatten(nested_list: list) -> list</code> بنویسید که یک لیست با عمق‌های تودرتوی نامحدود (مثل <code>[1, [2, [3, 4], 5], [6], 7]</code>) را گرفته و آن را به یک لیست یک‌بعدی صاف (<code>[1, 2, 3, 4, 5, 6, 7]</code>) تبدیل کند.",
    "starterCode": "def flatten(nested_list: list) -> list:\n    pass\n",
    "hints": [
      "یک لیست خالی result بسازید.",
      "روی هر عنصر حلقه بزنید؛ اگر isinstance(item, list) بود، با فراخوانی بازگشتی flatten(item) آن را گسترش دهید (extend).",
      "در غیر این صورت عنصر عادی را append کنید."
    ],
    "solution": "def flatten(nested_list: list) -> list:\n    result = []\n    for item in nested_list:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result\n",
    "testsPython": "assert flatten([1, [2, 3], [[4], 5]]) == [1, 2, 3, 4, 5], 'لیست باید هموار شود'\nassert flatten([]) == []\nassert flatten([[[[10]]]]) == [10]\nassert flatten([1, 2, 3]) == [1, 2, 3]\n"
  },
  {
    "id": "w1_04_safe_calc",
    "level": 1,
    "levelTitle": "سطح ۱: مبانی و مهندسی پایتون",
    "week": "هفته ۱",
    "title": "ماشین‌حساب امن با مدیریت استثناها (Safe Calculator)",
    "category": "Error Handling",
    "difficulty": "متوسط",
    "points": 75,
    "tags": [
      "exceptions",
      "try-except",
      "defensive-programming"
    ],
    "description": "تابعی به نام <code>safe_calculate(op: str, a, b)</code> پیاده‌سازی کنید که چهار عمل اصلی (<code>'+'</code>, <code>'-'</code>, <code>'*'</code>, <code>'/'</code>) را انجام دهد:<br><ul><li>اگر a یا b از نوع عددی نباشند، خطای <code>TypeError('ورودی‌ها باید عددی باشند')</code> بدهد.</li><li>در تقسیم بر صفر، خطای <code>ZeroDivisionError('تقسیم بر صفر مجاز نیست')</code> بدهد.</li><li>اگر عملگر ناشناخته بود، خطای <code>ValueError('عملگر نامعتبر است')</code> بدهد.</li></ul>",
    "starterCode": "def safe_calculate(op: str, a, b) -> float:\n    pass\n",
    "hints": [
      "بررسی تایپ عددی: if not isinstance(a, (int, float)) or not isinstance(b, (int, float)): raise TypeError(...)",
      "بررسی عملگر: if op not in ('+', '-', '*', '/'): raise ValueError(...)",
      "بررسی صفر در تقسیم: if op == '/' and b == 0: raise ZeroDivisionError(...)"
    ],
    "solution": "def safe_calculate(op: str, a, b) -> float:\n    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):\n        raise TypeError('ورودی‌ها باید عددی باشند')\n    if op == '+':\n        return float(a + b)\n    elif op == '-':\n        return float(a - b)\n    elif op == '*':\n        return float(a * b)\n    elif op == '/':\n        if b == 0:\n            raise ZeroDivisionError('تقسیم بر صفر مجاز نیست')\n        return float(a / b)\n    else:\n        raise ValueError('عملگر نامعتبر است')\n",
    "testsPython": "assert safe_calculate('+', 5, 3) == 8.0\nassert safe_calculate('/', 10, 2) == 5.0\ntry:\n    safe_calculate('/', 10, 0)\n    assert False, 'باید ZeroDivisionError پرتاب می‌شد'\nexcept ZeroDivisionError:\n    pass\ntry:\n    safe_calculate('+', '5', 3)\n    assert False, 'باید TypeError پرتاب می‌شد'\nexcept TypeError:\n    pass\ntry:\n    safe_calculate('^', 2, 3)\n    assert False, 'باید ValueError پرتاب می‌شد'\nexcept ValueError:\n    pass\n"
  },
  {
    "id": "w1_05_kwargs_merger",
    "level": 1,
    "levelTitle": "سطح ۱: مبانی و مهندسی پایتون",
    "week": "هفته ۱",
    "title": "ادغام‌کننده تنظیمات پویا با *args و **kwargs",
    "category": "Functions & Kwargs",
    "difficulty": "متوسط",
    "points": 80,
    "tags": [
      "*args",
      "**kwargs",
      "dictionaries"
    ],
    "description": "تابعی به نام <code>merge_configs(*default_dicts, **overrides) -> dict</code> بنویسید که تعداد دلخواهی دیکشنری پیش‌فرض را به عنوان آرگومان موقعیتی (*args) دریافت کرده، به ترتیب آن‌ها را با هم ترکیب کند و در نهایت کلیدهای فرستاده‌شده در **overrides را با بالاترین اولویت روی نتیجه اعمال کند. دیکشنری‌های ورودی اصلی نباید تغییر کنند (No side effects).",
    "starterCode": "def merge_configs(*default_dicts, **overrides) -> dict:\n    pass\n",
    "hints": [
      "یک دیکشنری جدید بسازید: res = {}",
      "روی هر d در default_dicts حلقه بزنید و res.update(d) کنید.",
      "در پایان res.update(overrides) را اجرا کرده و برگردانید."
    ],
    "solution": "def merge_configs(*default_dicts, **overrides) -> dict:\n    result = {}\n    for d in default_dicts:\n        if isinstance(d, dict):\n            result.update(d)\n    result.update(overrides)\n    return result\n",
    "testsPython": "base1 = {'host': 'localhost', 'port': 8000}\nbase2 = {'timeout': 30, 'debug': False}\nfinal = merge_configs(base1, base2, port=9000, env='prod')\nassert final['host'] == 'localhost'\nassert final['port'] == 9000, 'overrides باید اولویت بالاتر داشته باشد'\nassert final['timeout'] == 30\nassert final['env'] == 'prod'\nassert base1['port'] == 8000, 'دیکشنری‌های اصلی نباید تغییر کنند'\n"
  },
  {
    "id": "w2_01_pharmacy",
    "level": 2,
    "levelTitle": "سطح ۲: شی‌گرایی و کپسوله‌سازی پایه",
    "week": "هفته ۲",
    "title": "سیستم مدیریت داروخانه (Pharmacy & Drug Management)",
    "category": "OOP Basics",
    "difficulty": "متوسط",
    "points": 100,
    "tags": [
      "classes",
      "encapsulation",
      "__init__"
    ],
    "description": "کلاس‌های <code>Drug(name, amount, price)</code> و <code>Pharmacy(name)</code> را پیاده‌سازی کنید. داروخانه دارای متدهای <code>add_drug(drug)</code> (ادغام موجودی در صورت تکرار نام)، <code>total_inventory_value()</code> و <code>sell_drug(drug_name, count)</code> (کسر از موجودی و بازگرداندن مبلغ دریافتی یا پرتاب ValueError در صورت عدم موجودی) است.",
    "starterCode": "class Drug:\n    def __init__(self, name: str, amount: int, price: int):\n        self.name = name\n        self.amount = amount\n        self.price = price\n\nclass Pharmacy:\n    def __init__(self, name: str):\n        self.name = name\n        self.drugs = []\n\n    def add_drug(self, drug: Drug) -> None:\n        pass\n\n    def total_inventory_value(self) -> int:\n        pass\n\n    def sell_drug(self, drug_name: str, count: int) -> int:\n        pass\n",
    "hints": [
      "در add_drug اگر دارویی با نام مشابه وجود داشت، مقدار amount را اضافه کنید.",
      "در total_inventory_value از sum(d.amount * d.price for d in self.drugs) استفاده کنید.",
      "در sell_drug اگر دارو نبود یا موجودی ناکافی بود، خطای ValueError صادر نمایید."
    ],
    "solution": "class Drug:\n    def __init__(self, name: str, amount: int, price: int):\n        self.name = name\n        self.amount = amount\n        self.price = price\n\nclass Pharmacy:\n    def __init__(self, name: str):\n        self.name = name\n        self.drugs = []\n\n    def add_drug(self, drug: Drug) -> None:\n        for d in self.drugs:\n            if d.name == drug.name:\n                d.amount += drug.amount\n                return\n        self.drugs.append(drug)\n\n    def total_inventory_value(self) -> int:\n        return sum(d.amount * d.price for d in self.drugs)\n\n    def sell_drug(self, drug_name: str, count: int) -> int:\n        for d in self.drugs:\n            if d.name == drug_name:\n                if d.amount < count:\n                    raise ValueError('موجودی ناکافی')\n                d.amount -= count\n                return count * d.price\n        raise ValueError('دارو پیدا نشد')\n",
    "testsPython": "ph = Pharmacy('Razi')\nph.add_drug(Drug('Aspirin', 10, 5000))\nph.add_drug(Drug('Gelofen', 5, 10000))\nassert ph.total_inventory_value() == 100000\nph.add_drug(Drug('Aspirin', 5, 5000))\naspirin = next(d for d in ph.drugs if d.name == 'Aspirin')\nassert aspirin.amount == 15, 'موجودی داروی تکراری باید جمع شود'\ncost = ph.sell_drug('Aspirin', 5)\nassert cost == 25000\nassert aspirin.amount == 10\n"
  },
  {
    "id": "w2_02_vehicle_hierarchy",
    "level": 2,
    "levelTitle": "سطح ۲: شی‌گرایی و کپسوله‌سازی پایه",
    "week": "هفته ۲",
    "title": "سلسله‌مراتب وسایل نقلیه و ارث‌بری (Vehicle Hierarchy)",
    "category": "Inheritance & Polymorphism",
    "difficulty": "متوسط",
    "points": 110,
    "tags": [
      "inheritance",
      "super()",
      "polymorphism"
    ],
    "description": "کلاس‌های <code>Vehicle(name, speed)</code> (با متغیر کلاس <code>vehicle_count</code>)، <code>GroundVehicle</code> (با متد <code>honk() -> 'Beep Beep!'</code>)، <code>FlyingVehicle</code> (با <code>ascend(meters)</code> محدود به <code>max_altitude</code>) و <code>Airplane</code> را با بازنویسی متد <code>move()</code> پیاده‌سازی کنید.",
    "starterCode": "class Vehicle:\n    vehicle_count = 0\n    def __init__(self, name: str, speed: int = 0):\n        pass\n    def move(self) -> str:\n        pass\n\nclass GroundVehicle(Vehicle):\n    pass\n\nclass FlyingVehicle(Vehicle):\n    pass\n\nclass Airplane(FlyingVehicle):\n    pass\n",
    "hints": [
      "در Vehicle.__init__ حتماً Vehicle.vehicle_count += 1 بنویسید.",
      "در فرزندان از super().__init__(...) استفاده کنید.",
      "در Airplane متد move را بازنویسی کنید: f'Airplane {self.name} is flying at {self.speed} km/h at altitude {self.current_altitude}m'"
    ],
    "solution": "class Vehicle:\n    vehicle_count = 0\n    def __init__(self, name: str, speed: int = 0):\n        self.name = name\n        self.speed = speed\n        Vehicle.vehicle_count += 1\n    def move(self) -> str:\n        return f'{self.name} is moving at {self.speed} km/h'\n\nclass GroundVehicle(Vehicle):\n    def __init__(self, name: str, speed: int = 0, num_wheels: int = 4):\n        super().__init__(name, speed)\n        self.num_wheels = num_wheels\n    def honk(self) -> str:\n        return 'Beep Beep!'\n\nclass FlyingVehicle(Vehicle):\n    def __init__(self, name: str, speed: int = 0, max_altitude: int = 10000):\n        super().__init__(name, speed)\n        self.max_altitude = max_altitude\n        self.current_altitude = 0\n    def ascend(self, meters: int) -> None:\n        self.current_altitude = min(self.max_altitude, self.current_altitude + meters)\n\nclass Airplane(FlyingVehicle):\n    def move(self) -> str:\n        return f'Airplane {self.name} is flying at {self.speed} km/h at altitude {self.current_altitude}m'\n",
    "testsPython": "c_before = Vehicle.vehicle_count\ncar = GroundVehicle('Pride', speed=110)\nplane = Airplane('Airbus', speed=800, max_altitude=12000)\nassert Vehicle.vehicle_count == c_before + 2\nassert car.honk() == 'Beep Beep!'\nplane.ascend(5000)\nassert plane.current_altitude == 5000\nplane.ascend(20000)\nassert plane.current_altitude == 12000, 'ارتفاع نباید از سقف بیشتر شود'\nassert 'Airbus is flying' in plane.move()\n"
  },
  {
    "id": "w2_03_class_attr_guard",
    "level": 2,
    "levelTitle": "سطح ۲: شی‌گرایی و کپسوله‌سازی پایه",
    "week": "هفته ۲",
    "title": "صفت‌های کلاس و دام اشیاء تغییرپذیر (Class vs Instance Attributes)",
    "category": "OOP Internals",
    "difficulty": "سخت",
    "points": 115,
    "tags": [
      "class-attributes",
      "shadowing",
      "mutable-trap"
    ],
    "description": "کلاسی به نام <code>TeamMember</code> بنویسید:<br><ul><li>هر عضو دارای <code>name</code> و <code>personal_skills</code> (یک لیست اختصاصی برای هر عضو) است. هرگز نباید لیست مهارت‌های یک عضو روی دیگران اثر بگذارد!</li><li>یک متغیر کلاس به نام <code>all_members = []</code> برای نگهداری تمام نمونه‌های ساخته‌شده داشته باشد.</li><li>متد نمونه <code>learn_skill(skill_name: str)</code> مهارت جدید را به <code>personal_skills</code> همان عضو اضافه کند.</li><li>متد کلاسی <code>@classmethod get_team_skills(cls) -> set</code> مجموعه تمام مهارت‌های یادگرفته‌شده توسط تمام اعضا را برگرداند.</li></ul>",
    "starterCode": "class TeamMember:\n    all_members = []\n\n    def __init__(self, name: str):\n        pass\n\n    def learn_skill(self, skill: str) -> None:\n        pass\n\n    @classmethod\n    def get_team_skills(cls) -> set:\n        pass\n",
    "hints": [
      "در __init__ بنویسید: self.personal_skills = [] تا هر نمونه لیست مجزا داشته باشد.",
      "در __init__ نمونه را به TeamMember.all_members.append(self) اضافه کنید.",
      "در get_team_skills روی تمام اعضا پیمایش کرده و اجتماع (union) مهارت‌ها را بازگردانید."
    ],
    "solution": "class TeamMember:\n    all_members = []\n\n    def __init__(self, name: str):\n        self.name = name\n        self.personal_skills = []\n        TeamMember.all_members.append(self)\n\n    def learn_skill(self, skill: str) -> None:\n        if skill not in self.personal_skills:\n            self.personal_skills.append(skill)\n\n    @classmethod\n    def get_team_skills(cls) -> set:\n        skills = set()\n        for m in cls.all_members:\n            skills.update(m.personal_skills)\n        return skills\n",
    "testsPython": "TeamMember.all_members.clear()\nm1 = TeamMember('Ali')\nm2 = TeamMember('Sara')\nm1.learn_skill('Python')\nassert 'Python' in m1.personal_skills\nassert 'Python' not in m2.personal_skills, 'مهارت m1 نباید به لیست m2 منتقل شود!'\nm2.learn_skill('Docker')\nassert TeamMember.get_team_skills() == {'Python', 'Docker'}\nassert len(TeamMember.all_members) == 2\n"
  },
  {
    "id": "w2_04_property_bank",
    "level": 2,
    "levelTitle": "سطح ۲: شی‌گرایی و کپسوله‌سازی پایه",
    "week": "هفته ۲",
    "title": "کپسوله‌سازی و پراپرتی‌ها با دکوراتور @property",
    "category": "Encapsulation & Validation",
    "difficulty": "سخت",
    "points": 120,
    "tags": [
      "@property",
      "setters",
      "validation"
    ],
    "description": "کلاس <code>SecureAccount(account_number: str, initial_balance: float = 0.0)</code> را با رعایت کپسوله‌سازی پیاده‌سازی کنید:<br><ul><li>شماره حساب <code>account_number</code> باید فقط‌خواندنی (Read-Only) باشد و setter نداشته باشد.</li><li>موجودی <code>balance</code> با دکوراتور <code>@property</code> و <code>@balance.setter</code> تعریف شود. در صورتی که مقدار منفی به balance داده شود، باید خطای <code>ValueError('موجودی نمی‌تواند منفی باشد')</code> پرتاب شود.</li><li>متغیرهای داخلی به صورت خصوصی (مثل <code>_balance</code> و <code>_account_number</code>) ذخیره شوند.</li></ul>",
    "starterCode": "class SecureAccount:\n    def __init__(self, account_number: str, initial_balance: float = 0.0):\n        pass\n",
    "hints": [
      "@property def account_number(self): return self._account_number (بدون setter)",
      "@property def balance(self): return self._balance",
      "@balance.setter def balance(self, value): if value < 0: raise ValueError(...) self._balance = float(value)"
    ],
    "solution": "class SecureAccount:\n    def __init__(self, account_number: str, initial_balance: float = 0.0):\n        self._account_number = account_number\n        self.balance = initial_balance\n\n    @property\n    def account_number(self) -> str:\n        return self._account_number\n\n    @property\n    def balance(self) -> float:\n        return self._balance\n\n    @balance.setter\n    def balance(self, value: float) -> None:\n        if value < 0:\n            raise ValueError('موجودی نمی‌تواند منفی باشد')\n        self._balance = float(value)\n",
    "testsPython": "acc = SecureAccount('IR12345', 1000.0)\nassert acc.account_number == 'IR12345'\nassert acc.balance == 1000.0\nacc.balance = 1500.0\nassert acc.balance == 1500.0\ntry:\n    acc.balance = -100\n    assert False, 'باید خطای ValueError برای موجودی منفی پرتاب می‌شد'\nexcept ValueError:\n    pass\ntry:\n    acc.account_number = 'NEW'\n    assert False, 'شماره حساب نباید قابل بازنویسی باشد'\nexcept AttributeError:\n    pass\n"
  },
  {
    "id": "w3_01_reverse_iterator",
    "level": 3,
    "levelTitle": "سطح ۳: مدل داده پایتون و متدهای جادویی",
    "week": "هفته ۳",
    "title": "پیاده‌سازی ایتراتور معکوس (Reverse Iterator Protocol)",
    "category": "Data Model & Dunder",
    "difficulty": "سخت",
    "points": 140,
    "tags": [
      "iterators",
      "__iter__",
      "__next__",
      "StopIteration"
    ],
    "description": "کلاس <code>ReverseIterator(data: list)</code> را پیاده‌سازی کنید تا امکان پیمایش معکوس با <code>for</code> و <code>next()</code> بدون استفاده از <code>reversed()</code> یا برش <code>[::-1]</code> فراهم شود. پس از اتمام باید دقیقاً <code>StopIteration</code> صادر کند.",
    "starterCode": "class ReverseIterator:\n    def __init__(self, data: list):\n        pass\n    def __iter__(self):\n        pass\n    def __next__(self):\n        pass\n",
    "hints": [
      "self.index = len(data) - 1",
      "اگر index < 0 بود: raise StopIteration",
      "عنصر را بخوانید، ایندکس را یکی کم کنید و مقدار را بازگردانید."
    ],
    "solution": "class ReverseIterator:\n    def __init__(self, data: list):\n        self.data = data\n        self.index = len(data) - 1\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.index < 0:\n            raise StopIteration\n        val = self.data[self.index]\n        self.index -= 1\n        return val\n",
    "testsPython": "it = ReverseIterator([10, 20, 30])\nassert list(it) == [30, 20, 10]\ntry:\n    next(it)\n    assert False, 'باید StopIteration پرتاب می‌شد'\nexcept StopIteration:\n    pass\nassert list(ReverseIterator([])) == []\n"
  },
  {
    "id": "w3_02_magic_strint",
    "level": 3,
    "levelTitle": "سطح ۳: مدل داده پایتون و متدهای جادویی",
    "week": "هفته ۳",
    "title": "عدد جادویی و بازنویسی عملگرها (Dunder Methods & Strint)",
    "category": "Data Model & Dunder",
    "difficulty": "سخت",
    "points": 150,
    "tags": [
      "dunder",
      "__add__",
      "__len__",
      "inheritance-from-builtin"
    ],
    "description": "کلاس <code>Strint(int)</code> را بسازید:<br><ul><li>ارث‌بری مستقیم از <code>int</code>.</li><li><code>__len__()</code>: تعداد ارقام قدرمطلق عدد را بازگرداند (مثلاً طول <code>-456</code> برابر ۳ باشد).</li><li><code>__add__(self, other)</code>: جمع را به صورت ریاضی معکوس ارقام انجام دهد (۱۲ معکوسش ۲۱ و ۳۴ معکوسش ۴۳ است؛ ۲۱ + ۴۳ = ۶۴؛ حاصل <code>Strint(64)</code>).</li></ul>",
    "starterCode": "class Strint(int):\n    def __len__(self) -> int:\n        pass\n    def __add__(self, other):\n        pass\n",
    "hints": [
      "طول قدرمطلق: len(str(abs(int(self))))",
      "معکوس عدد: int(str(abs(n))[::-1]) با در نظر گرفتن علامت منفی",
      "خروجی جمع را درون Strint(...) برگردانید."
    ],
    "solution": "class Strint(int):\n    def __len__(self) -> int:\n        return len(str(abs(int(self))))\n\n    @staticmethod\n    def _rev(n: int) -> int:\n        val = int(str(abs(n))[::-1])\n        return -val if n < 0 else val\n\n    def __add__(self, other):\n        if not isinstance(other, int):\n            return NotImplemented\n        res = self._rev(int(self)) + self._rev(int(other))\n        return Strint(res)\n",
    "testsPython": "s1 = Strint(12)\ns2 = Strint(34)\nassert len(s1) == 2\nassert len(Strint(-789)) == 3\nres = s1 + s2\nassert res == 64\nassert isinstance(res, Strint)\n"
  },
  {
    "id": "w3_03_proxy_pattern",
    "level": 3,
    "levelTitle": "سطح ۳: مدل داده پایتون و متدهای جادویی",
    "week": "هفته ۳",
    "title": "الگوی پروکسی با رهگیری خصیصه‌ها (Proxy Pattern & __getattr__)",
    "category": "Design Patterns",
    "difficulty": "سخت",
    "points": 150,
    "tags": [
      "proxy",
      "__getattr__",
      "metaprogramming"
    ],
    "description": "کلاس <code>Proxy(obj)</code> را بنویسید که ویژگی‌های شیء داده‌شده را رهگیری کند. خصیصه‌های <code>last_accessed</code> و دیکشنری <code>access_counts</code> را نگهداری کرده و در صورت نبود صفت خطای <code>AttributeError('No such attribute')</code> پرتاب کند.",
    "starterCode": "class Proxy:\n    def __init__(self, obj):\n        self._obj = obj\n        self.last_accessed = None\n        self.access_counts = {}\n\n    def __getattr__(self, name: str):\n        pass\n",
    "hints": [
      "از رویکرد EAFP استفاده کنید: try: val = getattr(self._obj, name) except AttributeError: raise AttributeError('No such attribute')",
      "ثبت آمار: self.last_accessed = name و self.access_counts[name] = self.access_counts.get(name, 0) + 1"
    ],
    "solution": "class Proxy:\n    def __init__(self, obj):\n        self._obj = obj\n        self.last_accessed = None\n        self.access_counts = {}\n\n    def __getattr__(self, name: str):\n        try:\n            val = getattr(self._obj, name)\n        except AttributeError:\n            raise AttributeError('No such attribute')\n        self.last_accessed = name\n        self.access_counts[name] = self.access_counts.get(name, 0) + 1\n        return val\n",
    "testsPython": "class Target:\n    def __init__(self):\n        self.score = 100\n    def ping(self):\n        return 'pong'\n\np = Proxy(Target())\nassert p.score == 100\nassert p.last_accessed == 'score'\nassert p.access_counts['score'] == 1\np.score\nassert p.access_counts['score'] == 2\nassert p.ping() == 'pong'\ntry:\n    p.invalid_attr\n    assert False, 'باید AttributeError پرتاب می‌شد'\nexcept AttributeError:\n    pass\n"
  },
  {
    "id": "w3_04_context_timer",
    "level": 3,
    "levelTitle": "سطح ۳: مدل داده پایتون و متدهای جادویی",
    "week": "هفته ۳",
    "title": "کانتکست منیجر اختصاصی با __enter__ و __exit__",
    "category": "Context Managers",
    "difficulty": "سخت",
    "points": 155,
    "tags": [
      "context-managers",
      "__enter__",
      "__exit__",
      "with"
    ],
    "description": "کلاس <code>TimerContext</code> را پیاده‌سازی کنید تا بتوان از آن با ساختار <code>with TimerContext() as t:</code> استفاده کرد. زمان شروع در <code>__enter__</code> ثبت شود و در <code>__exit__</code> مدت زمان سپری شده به ثانیه در <code>t.elapsed</code> قرار گیرد. اگر درون بلاک خطایی رخ داد، مانع پرتاب خطا نشود (return False).",
    "starterCode": "import time\n\nclass TimerContext:\n    def __init__(self):\n        self.elapsed = 0.0\n    def __enter__(self):\n        pass\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        pass\n",
    "hints": [
      "در __enter__ بنویسید: self.start = time.perf_counter() و return self کنید.",
      "در __exit__ بنویسید: self.elapsed = time.perf_counter() - self.start",
      "برای ادامه روال خطای احتمالی، return False بدهید."
    ],
    "solution": "import time\n\nclass TimerContext:\n    def __init__(self):\n        self.elapsed = 0.0\n        self.start = 0.0\n    def __enter__(self):\n        self.start = time.perf_counter()\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.elapsed = time.perf_counter() - self.start\n        return False\n",
    "testsPython": "import time\nwith TimerContext() as t:\n    time.sleep(0.02)\nassert t.elapsed >= 0.015, 'مدت زمان به درستی اندازه‌گیری نشد'\n"
  },
  {
    "id": "w4_01_type_validator",
    "level": 4,
    "levelTitle": "سطح ۴: دکوراتورها، همروندی و سیستم‌ها",
    "week": "هفته ۴",
    "title": "دکوراتور ۳ لایه‌ای اعتبارسنجی تایپ‌ها (Type Validator)",
    "category": "Decorators",
    "difficulty": "سخت",
    "points": 160,
    "tags": [
      "decorators",
      "functools.wraps",
      "metaprogramming"
    ],
    "description": "دکوراتوری به نام <code>validate_types(**expected_types)</code> بنویسید که تایپ آرگومان‌های نام‌دار (kwargs) را بررسی کند. در صورت عدم تطابق تایپ، خطای <code>TypeError(f'آرگومان {k} باید از نوع {expected.__name__} باشد')</code> بدهد. حتماً از <code>@functools.wraps</code> استفاده شود.",
    "starterCode": "from functools import wraps\n\ndef validate_types(**expected_types):\n    pass\n",
    "hints": [
      "۳ لایه تو در تو: validate_types(**expected_types) -> decorator(func) -> wrapper(*args, **kwargs)",
      "روی kwargs حلقه بزنید: if k in expected_types and not isinstance(v, expected_types[k]): raise TypeError(...)",
      "در پایان تابع اصلی را با return func(*args, **kwargs) صدا بزنید."
    ],
    "solution": "from functools import wraps\n\ndef validate_types(**expected_types):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for k, v in kwargs.items():\n                if k in expected_types:\n                    expected = expected_types[k]\n                    if not isinstance(v, expected):\n                        raise TypeError(f'آرگومان {k} باید از نوع {expected.__name__} باشد')\n            return func(*args, **kwargs)\n        return wrapper\n    return decorator\n",
    "testsPython": "@validate_types(age=int, name=str)\ndef create_user(name: str, age: int):\n    '''ثبت کاربر'''\n    return f'{name}:{age}'\nassert create_user.__name__ == 'create_user'\nassert create_user.__doc__ == 'ثبت کاربر'\nassert create_user(name='Reza', age=30) == 'Reza:30'\ntry:\n    create_user(name='Reza', age='thirty')\n    assert False, 'باید TypeError پرتاب می‌شد'\nexcept TypeError as e:\n    assert 'age' in str(e)\n"
  },
  {
    "id": "w4_02_lack_of_time",
    "level": 4,
    "levelTitle": "سطح ۴: دکوراتورها، همروندی و سیستم‌ها",
    "week": "هفته ۴",
    "title": "دکوراتور بنچ‌مارک و زمان‌سنجی تابع (Execution Timer)",
    "category": "Decorators",
    "difficulty": "سخت",
    "points": 165,
    "tags": [
      "decorators",
      "benchmark",
      "wraps"
    ],
    "description": "دکوراتوری به نام <code>record_execution_time</code> بنویسید که زمان اجرای هر بار فراخوانی تابع را به ثانیه اندازه‌گیری کند و در ویژگی <code>last_duration</code> روی خود تابع ثبت کند. همچنین تعداد کل فراخوانی‌ها را در ویژگی <code>call_count</code> ثبت نماید.",
    "starterCode": "import time\nfrom functools import wraps\n\ndef record_execution_time(func):\n    pass\n",
    "hints": [
      "تابع wrapper بسازید و wrapper.call_count = 0 و wrapper.last_duration = 0.0 را مقداردهی اولیه کنید.",
      "در داخل wrapper: wrapper.call_count += 1",
      "زمان قبل و بعد را با time.perf_counter() بسنجید و تفاضل را در wrapper.last_duration قرار دهید."
    ],
    "solution": "import time\nfrom functools import wraps\n\ndef record_execution_time(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        wrapper.last_duration = time.perf_counter() - start\n        wrapper.call_count += 1\n        return result\n    wrapper.call_count = 0\n    wrapper.last_duration = 0.0\n    return wrapper\n",
    "testsPython": "import time\n@record_execution_time\ndef work():\n    time.sleep(0.01)\n    return 'done'\nassert work.call_count == 0\nres = work()\nassert res == 'done'\nassert work.call_count == 1\nassert work.last_duration >= 0.008\nwork()\nassert work.call_count == 2\n"
  },
  {
    "id": "w4_03_thread_safe_bank",
    "level": 4,
    "levelTitle": "سطح ۴: دکوراتورها، همروندی و سیستم‌ها",
    "week": "هفته ۴",
    "title": "همگام‌سازی چندتردی و قفل‌ها (Threading & Locks)",
    "category": "Concurrency",
    "difficulty": "خیلی سخت",
    "points": 180,
    "tags": [
      "threading",
      "threading.Lock",
      "race-condition"
    ],
    "description": "کلاس <code>ThreadSafeAccount(initial_balance)</code> را پیاده‌سازی کنید. با استفاده از <code>threading.Lock()</code> و کانتکست <code>with self.lock:</code> در متدهای <code>deposit(amount)</code>، <code>withdraw(amount) -> bool</code> و <code>get_balance() -> int</code> مانع از بروز Race Condition در اجرای هم‌زمان ده‌ها ترد شوید.",
    "starterCode": "import threading\n\nclass ThreadSafeAccount:\n    def __init__(self, initial_balance: int = 0):\n        pass\n    def deposit(self, amount: int) -> None:\n        pass\n    def withdraw(self, amount: int) -> bool:\n        pass\n    def get_balance(self) -> int:\n        pass\n",
    "hints": [
      "self.lock = threading.Lock()",
      "with self.lock: self.balance += amount",
      "در withdraw: with self.lock: if self.balance >= amount: self.balance -= amount; return True; return False"
    ],
    "solution": "import threading\n\nclass ThreadSafeAccount:\n    def __init__(self, initial_balance: int = 0):\n        self.balance = initial_balance\n        self.lock = threading.Lock()\n\n    def deposit(self, amount: int) -> None:\n        with self.lock:\n            self.balance += amount\n\n    def withdraw(self, amount: int) -> bool:\n        with self.lock:\n            if self.balance >= amount:\n                self.balance -= amount\n                return True\n            return False\n\n    def get_balance(self) -> int:\n        with self.lock:\n            return self.balance\n",
    "testsPython": "import threading\nacc = ThreadSafeAccount(500)\ndef task_dep():\n    for _ in range(50): acc.deposit(10)\ndef task_with():\n    for _ in range(25): acc.withdraw(10)\nth = []\nfor _ in range(4):\n    t1 = threading.Thread(target=task_dep)\n    t2 = threading.Thread(target=task_with)\n    th.extend([t1, t2])\n    t1.start(); t2.start()\nfor t in th: t.join()\nassert acc.get_balance() == 500 + (4 * 50 * 10) - (4 * 25 * 10)\n"
  },
  {
    "id": "w4_04_producer_consumer",
    "level": 4,
    "levelTitle": "سطح ۴: دکوراتورها، همروندی و سیستم‌ها",
    "week": "هفته ۴",
    "title": "سیستم صف کارگر و پردازش موازی (Worker Queue & Threads)",
    "category": "Concurrency & Queues",
    "difficulty": "خیلی سخت",
    "points": 185,
    "tags": [
      "queue.Queue",
      "threading",
      "producer-consumer"
    ],
    "description": "کلاس <code>TaskDispatcher(num_workers: int = 2)</code> را پیاده‌سازی کنید:<br><ul><li>از <code>queue.Queue()</code> برای ارسال تسک‌ها به تردها استفاده شود.</li><li>تردهای کارگر در یک حلقه پیوسته توابع را به همراه آرگومان‌هایشان اجرا کرده و خروجی را در یک دیکشنری اشتراکی ایمن <code>results</code> بر اساس شناسه تسک (task_id) ذخیره کنند.</li><li>متد <code>submit(task_id, func, *args)</code> تسک را به صف بیفزاید.</li><li>متد <code>wait_completion()</code> با <code>self.queue.join()</code> منتظر اتمام همه تسک‌ها بماند.</li><li>متد <code>shutdown()</code> با ارسال نشانگر خاتمه (Sentinel Value مثل None) تردها را پایان دهد.</li></ul>",
    "starterCode": "import threading\nimport queue\n\nclass TaskDispatcher:\n    def __init__(self, num_workers: int = 2):\n        pass\n    def submit(self, task_id: str, func, *args):\n        pass\n    def wait_completion(self):\n        pass\n    def shutdown(self):\n        pass\n",
    "hints": [
      "یک صف با self.q = queue.Queue() بسازید.",
      "در تابع worker: while True: item = self.q.get(); if item is None: self.q.task_done(); break; task_id, fn, args = item; res = fn(*args); with self.lock: self.results[task_id] = res; self.q.task_done()",
      "در shutdown: به تعداد num_workers مقدار None در صف put کنید."
    ],
    "solution": "import threading\nimport queue\n\nclass TaskDispatcher:\n    def __init__(self, num_workers: int = 2):\n        self.q = queue.Queue()\n        self.results = {}\n        self.lock = threading.Lock()\n        self.num_workers = num_workers\n        self.workers = []\n        for _ in range(num_workers):\n            t = threading.Thread(target=self._worker_loop, daemon=True)\n            t.start()\n            self.workers.append(t)\n\n    def _worker_loop(self):\n        while True:\n            item = self.q.get()\n            if item is None:\n                self.q.task_done()\n                break\n            task_id, fn, args = item\n            res = fn(*args)\n            with self.lock:\n                self.results[task_id] = res\n            self.q.task_done()\n\n    def submit(self, task_id: str, func, *args):\n        self.q.put((task_id, func, args))\n\n    def wait_completion(self):\n        self.q.join()\n\n    def shutdown(self):\n        for _ in range(self.num_workers):\n            self.q.put(None)\n        for t in self.workers:\n            t.join()\n",
    "testsPython": "disp = TaskDispatcher(2)\ndisp.submit('t1', lambda x: x * 2, 10)\ndisp.submit('t2', lambda a, b: a + b, 5, 7)\ndisp.wait_completion()\nassert disp.results['t1'] == 20\nassert disp.results['t2'] == 12\ndisp.shutdown()\n"
  },
  {
    "id": "w5_01_descriptor_orm",
    "level": 5,
    "levelTitle": "سطح ۵: معماری پیشرفته و پروژه‌های یکپارچه",
    "week": "هفته ۴ و ۵",
    "title": "شبیه‌سازی ORM و توصیف‌گرهای اعتبارسنجی (Python Descriptors)",
    "category": "Metaprogramming & Descriptors",
    "difficulty": "خیلی سخت",
    "points": 190,
    "tags": [
      "descriptors",
      "__get__",
      "__set__",
      "orm"
    ],
    "description": "کلاس‌های توصیف‌گر (Descriptor) برای شبیه‌سازی ORM بسازید:<br><ul><li><code>CharField(max_length: int)</code>: باید مطمئن شود مقدار ورودی رشته است و طول آن از <code>max_length</code> بیشتر نیست؛ در غیر این صورت <code>ValueError</code> بدهد.</li><li><code>IntegerField(min_val: int = None, max_val: int = None)</code>: مطمئن شود مقدار عدد صحیح است و در بازه مجاز قرار دارد؛ در غیر این صورت <code>ValueError</code> یا <code>TypeError</code> بدهد.</li><li>استفاده از <code>__set_name__(self, owner, name)</code> برای تعیین خودکار نام متغیر خصوصی ضروری است.</li></ul>",
    "starterCode": "class CharField:\n    def __init__(self, max_length: int):\n        pass\n\nclass IntegerField:\n    def __init__(self, min_val: int = None, max_val: int = None):\n        pass\n\nclass UserProfile:\n    username = CharField(max_length=10)\n    age = IntegerField(min_val=18, max_val=100)\n\n    def __init__(self, username, age):\n        self.username = username\n        self.age = age\n",
    "hints": [
      "در __set_name__(self, owner, name): self.private_name = '_' + name",
      "در __get__(self, obj, objtype=None): if obj is None: return self; return getattr(obj, self.private_name, None)",
      "در __set__(self, obj, value): بررسی شروط نوع داده و مقادیر و در صورت خطا raise ValueError(...)"
    ],
    "solution": "class CharField:\n    def __init__(self, max_length: int):\n        self.max_length = max_length\n    def __set_name__(self, owner, name):\n        self.storage = '_' + name\n    def __get__(self, obj, objtype=None):\n        if obj is None: return self\n        return getattr(obj, self.storage, None)\n    def __set__(self, obj, value):\n        if not isinstance(value, str):\n            raise TypeError('مقدار باید رشته باشد')\n        if len(value) > self.max_length:\n            raise ValueError('طول رشته بیش از حد مجاز است')\n        setattr(obj, self.storage, value)\n\nclass IntegerField:\n    def __init__(self, min_val: int = None, max_val: int = None):\n        self.min_val = min_val\n        self.max_val = max_val\n    def __set_name__(self, owner, name):\n        self.storage = '_' + name\n    def __get__(self, obj, objtype=None):\n        if obj is None: return self\n        return getattr(obj, self.storage, None)\n    def __set__(self, obj, value):\n        if not isinstance(value, int):\n            raise TypeError('مقدار باید عدد صحیح باشد')\n        if self.min_val is not None and value < self.min_val:\n            raise ValueError('کمتر از حد مجاز')\n        if self.max_val is not None and value > self.max_val:\n            raise ValueError('بیشتر از حد مجاز')\n        setattr(obj, self.storage, value)\n\nclass UserProfile:\n    username = CharField(max_length=10)\n    age = IntegerField(min_val=18, max_val=100)\n    def __init__(self, username, age):\n        self.username = username\n        self.age = age\n",
    "testsPython": "u = UserProfile('Farbod', 24)\nassert u.username == 'Farbod'\nassert u.age == 24\ntry:\n    u.username = 'very_long_username_12345'\n    assert False, 'باید خطای طول رشته صادر می‌شد'\nexcept ValueError:\n    pass\ntry:\n    u.age = 15\n    assert False, 'باید خطای حداقل سن صادر می‌شد'\nexcept ValueError:\n    pass\n"
  },
  {
    "id": "w5_02_financial_engine",
    "level": 5,
    "levelTitle": "سطح ۵: معماری پیشرفته و پروژه‌های یکپارچه",
    "week": "هفته ۴ و ۵",
    "title": "موتور پردازش تراکنش‌های مالی با استثناهای سفارشی",
    "category": "Domain Architecture",
    "difficulty": "خیلی سخت",
    "points": 200,
    "tags": [
      "custom-exceptions",
      "system-design",
      "audit-log"
    ],
    "description": "سیستم پردازش مالی شامل استثناهای <code>InsufficientFundsError</code> و <code>InvalidTransactionAmountError</code> و کلاس <code>TransactionEngine(balance)</code> با متدهای <code>process_deposit(amount, desc)</code>، <code>process_withdrawal(amount, desc)</code> و <code>audit_summary()</code> را پیاده‌سازی کنید.",
    "starterCode": "class InsufficientFundsError(Exception): pass\nclass InvalidTransactionAmountError(Exception): pass\n\nclass TransactionEngine:\n    def __init__(self, balance: float = 0.0):\n        pass\n    def process_deposit(self, amount: float, description: str = ''):\n        pass\n    def process_withdrawal(self, amount: float, description: str = ''):\n        pass\n    def audit_summary(self) -> dict:\n        pass\n",
    "hints": [
      "مبالغ کمتر یا مساوی صفر: raise InvalidTransactionAmountError(...)",
      "برداشت بیشتر از موجودی: raise InsufficientFundsError(...)",
      "ثبت تاریخچه در self.history به صورت دیکشنری با فیلدهای type, amount, balance_after"
    ],
    "solution": "class InsufficientFundsError(Exception): pass\nclass InvalidTransactionAmountError(Exception): pass\n\nclass TransactionEngine:\n    def __init__(self, balance: float = 0.0):\n        self.balance = float(balance)\n        self.history = []\n\n    def process_deposit(self, amount: float, description: str = '') -> float:\n        if amount <= 0:\n            raise InvalidTransactionAmountError('مبلغ باید مثبت باشد')\n        self.balance += amount\n        self.history.append({'type': 'DEPOSIT', 'amount': amount, 'balance_after': self.balance, 'desc': description})\n        return self.balance\n\n    def process_withdrawal(self, amount: float, description: str = '') -> float:\n        if amount <= 0:\n            raise InvalidTransactionAmountError('مبلغ باید مثبت باشد')\n        if amount > self.balance:\n            raise InsufficientFundsError('موجودی ناکافی')\n        self.balance -= amount\n        self.history.append({'type': 'WITHDRAWAL', 'amount': amount, 'balance_after': self.balance, 'desc': description})\n        return self.balance\n\n    def audit_summary(self) -> dict:\n        dep = sum(t['amount'] for t in self.history if t['type'] == 'DEPOSIT')\n        wth = sum(t['amount'] for t in self.history if t['type'] == 'WITHDRAWAL')\n        return {\n            'total_deposits': dep,\n            'total_withdrawals': wth,\n            'current_balance': self.balance,\n            'tx_count': len(self.history)\n        }\n",
    "testsPython": "eng = TransactionEngine(100.0)\neng.process_deposit(50.0)\nassert eng.balance == 150.0\neng.process_withdrawal(70.0)\nassert eng.balance == 80.0\ntry:\n    eng.process_withdrawal(500.0)\n    assert False, 'باید InsufficientFundsError پرتاب می‌شد'\nexcept InsufficientFundsError:\n    pass\ns = eng.audit_summary()\nassert s['total_deposits'] == 50.0 and s['total_withdrawals'] == 70.0\n"
  },
  {
    "id": "w5_03_concurrent_task_pool",
    "level": 5,
    "levelTitle": "سطح ۵: معماری پیشرفته و پروژه‌های یکپارچه",
    "week": "هفته ۴ و ۵",
    "title": "موتور صف تسک‌های همروند (PyConcurrent Task Pool)",
    "category": "Distributed & Systems Architecture",
    "difficulty": "خیلی سخت",
    "points": 210,
    "tags": [
      "task-engine",
      "concurrency",
      "worker-pool"
    ],
    "description": "کلاس <code>TaskExecutionPool</code> برای مدیریت اجرای تسک‌های هم‌روند پیاده‌سازی کنید:<br><ul><li>هر تسک دارای وضعیت‌های <code>'PENDING'</code>، <code>'RUNNING'</code>، <code>'COMPLETED'</code> یا <code>'FAILED'</code> است.</li><li>متد <code>add_task(task_id: str, fn, *args)</code> تسک را ثبت کند.</li><li>متد <code>execute_all(max_workers: int = 2)</code> تمام تسک‌ها را با تردهای کارگر پردازش کرده و نتیجه یا خطای هر تسک را در دیکشنری وضعیت ثبت نماید.</li><li>متد <code>get_status(task_id: str) -> dict</code> اطلاعات کامل وضعیت تسک، نتیجه (result) و ارور (error) را بازگرداند.</li></ul>",
    "starterCode": "class TaskExecutionPool:\n    def __init__(self):\n        pass\n    def add_task(self, task_id: str, fn, *args):\n        pass\n    def execute_all(self, max_workers: int = 2):\n        pass\n    def get_status(self, task_id: str) -> dict:\n        pass\n",
    "hints": [
      "می‌توانید از concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) برای اجرای موازی استفاده کنید.",
      "برای هر تسک یک دیکشنری {'status': 'PENDING', 'result': None, 'error': None} نگه‌دارید.",
      "در حین اجرای تابع، وضعیت را 'RUNNING' کرده و در صورت موفقیت 'COMPLETED' و در صورت خطا 'FAILED' با ذخیره str(e) نمایید."
    ],
    "solution": "from concurrent.futures import ThreadPoolExecutor\n\nclass TaskExecutionPool:\n    def __init__(self):\n        self.tasks = {}\n\n    def add_task(self, task_id: str, fn, *args):\n        self.tasks[task_id] = {\n            'fn': fn,\n            'args': args,\n            'status': 'PENDING',\n            'result': None,\n            'error': None\n        }\n\n    def _run_single(self, task_id):\n        item = self.tasks[task_id]\n        item['status'] = 'RUNNING'\n        try:\n            res = item['fn'](*item['args'])\n            item['result'] = res\n            item['status'] = 'COMPLETED'\n        except Exception as e:\n            item['error'] = str(e)\n            item['status'] = 'FAILED'\n\n    def execute_all(self, max_workers: int = 2):\n        with ThreadPoolExecutor(max_workers=max_workers) as executor:\n            futures = [executor.submit(self._run_single, tid) for tid in self.tasks.keys()]\n            for f in futures:\n                f.result()\n\n    def get_status(self, task_id: str) -> dict:\n        t = self.tasks.get(task_id, {})\n        return {'status': t.get('status'), 'result': t.get('result'), 'error': t.get('error')}\n",
    "testsPython": "pool = TaskExecutionPool()\npool.add_task('job1', lambda x: x + 10, 5)\npool.add_task('job2', lambda: 1 / 0)\npool.execute_all(2)\ns1 = pool.get_status('job1')\nassert s1['status'] == 'COMPLETED' and s1['result'] == 15\ns2 = pool.get_status('job2')\nassert s2['status'] == 'FAILED' and s2['error'] is not None\n"
  }
];
