---
layout: post
jdate: '1394-10-08'
user: amirhossein
title: نصب آخرین نگارش فایرفاکس روی اوبونتو
categories:
- آموزشی
tags:
- اوبونتو
- نرم‌افزار
- مرورگر
featured: firefox-512.jpg
keywords:
- فایرفاکس در اوبونتو
- فایرفاکس اوبونتو
description: آموزش نصب آخرین نگارش مرورگر فایرفاکس روی اوبونتو
timeToRead: 5
---

مرورگر فایرفاکس به صورت پیش‌گزیده در بسیاری از توزیع‌های گنو/لینوکس نصب است. اما از آنجایی که این مرورگر با روند نسبتاً سریعی در حال پیشرفت است ممکن است در به‌روزترین توزیع‌ها هم از آخرین نگارش آن استفاده نشده باشد.

![FirefoxHD](/images/FirefoxHD.jpg)

در این پست قصد داریم نحوه‌ی نصب این مرورگر را از طریق بستهٔ ` tar.bz2` در سیستم‌عامل اوبونتو آموزش دهیم.

ابتدا با مراجعه به [وب‌سایت](https://www.mozilla.org/en-US/firefox/new/) این شرکت، آخرین نگارش این بسته را دانلود نموده و در مسیر Home قرارداده و به ترتیب زیر عمل می‌نماییم:

محیط خط فرمان را با استفاده از کلیدهای ترکیبی `Ctrl+Alt+T` باز نموده و یا اگر در این محیط قرار دارید ابتدا دستور زیر را وارد می‌کنیم تا به مسیر (Directory) خانه برویم.

```sh
cd
```

حال به کمک دستور زیر پرونده دانلود شده را از حالت فشرده خارج می‌نماییم.

```sh
tar xjf firefox-*.tar.bz2
```

دقت کنید به جای * باید ادامه‌ی نام بسته خود را وارد نمایید که معمولا شماره نگارش آن می‌باشد.

اکنون به کمک دستور زیر پرونده باز شده را به مسیر نصب انتقال و مجوز پرونده را کاربر ریشه قرار می‌دهیم.

```sh
sudo mv firefox /usr/local
sudo chown -R root:root /usr/local/firefox
```

در آخر به کمک دستورات زیر یک پیوند برای دسترسی به نگارش جدید، در مسیر ذکر شده ایجاد می‌کنیم.

```sh
sudo cd /usr/local/binsudo ln -s ../firefox/firefox
```

دقت کنید که در اولین دستور به‌علت به‌کار بردن sudo از شما رمز عبور کاربر را درخواست می‌نماید.

اکنون آخرین نگارش مرورگر فایرفاکس با موفقیت روی سیستم‌عامل اوبونتوی شما نصب شده است.