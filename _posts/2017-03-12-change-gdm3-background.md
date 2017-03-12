---
layout: post  
jdate: 1395-12-22
user: rmasoumvand
title: تغییر تصویر زمینه gdm3  
categories:
- آموزشی
tags:
- پیکربندی
- میزکار
featured: gnome-display-manager.png
keywords:
- gdm3
- تصویر زمینه
- تصویر پس‌زمینه
- تصویر پس زمینه
description: آموزش تغییر تصویر زمینه gdm3
---

شاید برایتان پیش آمده باشد که از تصویر زمینه ساده و پیش‌فرض GDM 3 خسته شده باشید و بخواهید تصویر دلخواه خودتان را جایگزین آن کنید. در این آموزش به چگونگی انجام این کار می‌پردازیم.

ابتدا می‌بایست تصویر مورد نظرمان را توسط دستور زیر به مسیر مربوطه کپی کنیم.

```sh
sudo cp sun.jpg /usr/share/gnome-shell/theme/
```

> نام تصویر مورد نظر ما در این آموزش sun.jpg می باشد

سپس فایل زیر را با یک ویرایشگر متنی ویرایش می‌کنیم.

```sh
sudo gedit /usr/share/gnome-shell/theme/gnome-shell.css
```

در فایل فوق به دنبال عبارت lockDialogGrop# می‌گردیم که بخشی مانند زیر خواهد بود.

```css
#lockDialogGroup {
	background: #2e3436 url(noise-texture.png);
	background-repeat: repeat;
}
```

در قسمت url نام فایل مورد نظرمان را وارد می‌کنیم و همچنین مقدار عبارت background-repeat را به no-repeat تغییر می‌دهیم.

```css
#lockDialogGroup {
	background: #2e3436 url(sun.jpg);
	background-repeat: no-repeat;
}
```

فایل فوق را ذخیره نموده و جهت مشاهده تغییرات یکبار Logout می‌کنیم.
