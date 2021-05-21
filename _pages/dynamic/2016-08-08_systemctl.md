---
layout: post  
jdate: '1395-05-18'
user: farbodgame  
title: مدیریت سرویس‌ها توسط systemctl
categories:
- آموزشی
tags:
- پیکربندی
featured: systemctl.jpg  
keywords:
- systemctl
- systemd
description: مدیریت سرویس‌ها توسط systemctl
timeToRead: 5
---

در این مطلب قصد داریم دستورات systemctl را آموزش بدهیم که ابزار اصلی برای کنترل سرویس‌ها و init است. در ادامه نگاهی می‌اندازیم که چگونه سرویس‌ها را مدیریت کنیم و در نهایت وضعیتشان را بررسی کنیم.

## شروع و متوقف کردن سرویس‌ها

برای شروع کردن یک سرویس systemd باید از دستور `start` 
استفاده کنیم.

اگر شما یک کاربر غیر ریشه هستید لطفا روت شوید و یا قبل از دستور `sudo` بگذارید تا دستور با دسترسی ریشه اجرا شود در غیر این صورت ممکن که دستور شما عمل نکند.

```sh
systemctl start APPLICATION.service
```

توسط این دستور شما می‌توانید سرویس خود را شروع کنید.

 برای مثال توسط این دستور میتوانید وب سرور nginx را فعال نمایید (لازم به ذکر است که اگر شما نام سرویسی را که می‌خواهید استفاده کنید را نمی‌دانید، می‌توانید با نوشتن فقط یکی دو حرف اول آن سرویس و سپس زدن دو بار پشت سر هم کلید `TAB` نام آن را کامل کنید.).
 
```sh
systemctl start nginx.service
```

systemd برای کنترل کردن یک سرویس، به دنبال `*.service` (همانطور که می‌دانید ستاره یک `wild card` و به معنی هر چیزی است) می‌گردد، بنابر این شما می‌توانید برای راحتی کار به این صورت سرویس‌های خود را مدیریت کنید.

```sh
systemctl start nginx
```

درصورتی که می‌خواهید سرویسی را که شروع کرده‌اید، متوقف 
کنید می‌توانید به همین شیوه عمل کنید با این تفاوت که به جای `start` از `stop` استفاده کنید.

```sh
systemctl stop APPLICATION.service
```

## بارگذاری و راه اندازی مجدد سرویس‌ها

در صورتی که سرویسی را شروع کردید و اکنون می‌خواهید آن را دوباره راه‌اندازی کنید باید از `restart` استفاده کنید.

```sh
systemctl restart APPLICATION.service
```

و یا اگر می‌خواهید فقط آن را به صورت مجدد بارگذاری نمایید میتوانید از `reload` استفاده کنید.

```sh
systemctl reload APPLICATION.service
```

 **​نکته:** تفاوت `reload` و `restart` در این است که `reload` فقط فایل کانفیگ ویرایش شده را می‌خواند (و سرویس را مجدد راه‌اندازی نمی‌کند) که عموما بسیار سریع انجام می‌شود. اما اگر می‌خواهید به‌طور کلی یک سرویس را دوباره راه‌اندازی کنید باید از `restart` استفاده کنید که عموما زمان بیشتری نسبت به بارگذاری طول می‌کشد. اگر مطمئن نیستید که می‌خواهید از کدام استفاده کنید بهتر است که از `reload-or-restart` استفاده کنید که ابتدا فایل کانفیگ ویرایش شده را مجدد بارگذاری می‌کند و در صورت نیاز سرویس مربوطه را مجدد راه اندازی می‌کند.

```sh
systemctl reload-or-restart APPLICATION.service
```

## فعال و غیر فعال کردن سرویس‌ها

در صورتی که سرویس مورد نظر خود را توسط `start` شروع کرده باشید، با اولین ریبوت همه آنها به تنظیمات خود بازمی‌گردد و ممکن است اصلا بعد از بارگذاری سیستم اجرا نشوند. در صورتی که می‌خواهید systemd سرویس مورد نظر شما را هنگام بوت به صورت خودکار فعال کند باید از enable استفاده کنید. به این صورت.

```sh
systemctl enable APPLICATION.service
```

این کار یک لینک از `/etc/systemd/system` (و در بعضی سیستم ها `/lib/systemd/system`) ایجاد می‌کند در مسیری که systemd در آن به دنیال فایل هایی می‌گردد که باید هنگام بوت آنها را شروع کند. (معمولا در `/etc/systemd/system/some-target.target.wants​_`)

اگر می‌خواهید عکس این کار را انجام دهید، یعنی وقتی سیستم بوت شد آن سرویس به طور پیشفرض اجرا نشود باید از `disable` استفاده کنید، به این صورت.

```sh
systemctl disable APPLICATION.service
```

برای مثال درصورتی که می‌خواهید جلوی اجرا شدن خودکار وب سرور nginx را هنگام بوت بگیرید باید به این صورت عمل کنید.

```sh
systemctl disable nginx.service
```

## وضعیت یک سرویس

در صورتی که می‌خواهید وضعیت یک سرویس را بررسی کنید (برای مثال مطمئن شوید که سرویس شروع و یا متوقف شده است و یا چند خط اول لاگ را بررسی کنید) میتوانید از `status` استفاده نمایید.


```sh
systemctl status APPLICATION.service
```

برای مثال، در صورتی که وضعیت وب سرور nginx را بررسید کنید با خطوطی شبیه به این مواجه می‌شوید:

```
nginx.service - A high performance web server and a reverse proxy server
Loaded: loaded (/usr/lib/systemd/system/nginx.service; enabled; vendor preset: disabled)
Active: active (running) since Tue 2015-01-27 19:41:23 EST; 22h ago Main PID: 495 (nginx)
CGroup: /system.slice/nginx.service
├─495 nginx: master process /usr/bin/nginx -g pid /run/nginx.pid; error_log stderr;
└─496 nginx: worker processJan 27 19:41:23 desktop systemd[1]: Starting A high performance web server and a reverse proxy server...Jan 27 19:41:23 desktop systemd[1]: Started A high performance web server and a reverse proxy server.
```

اگر می‌خواهید مطمئن شوید سرویسی که می‌خواهید شروع یا متوقف شده است (برای مثال در اسکریپت نویسی) می‌توانید از `is-active` استفاده کنید.

```sh
systemctl is-active APPLICATION.service
```

خروجی این دستور در صورتی که سرویس مورد نظر شما شروع شده باشد `active` خواهد بود و در غیر این صورت `inactive`.

و به همین ترتیب، اگر می‌خواهید مطمئن شوید که سرویس شما فعال است یا غیر فعال (الان شما دیگه می‌دونید که فرق غیر فعال با متوقف چیه :) ) می‌توانید از `is-enabled` استفاده کنید.

```sh
systemctl is-enabled APPLICATION.service
```

خروجی این دستور هم در صورت فعال بودن `enable` و در صورت غیر فعال بودن `disable` خواهد بود.

منبع با اندکی تغییر:
[How To Use Systemctl to Manage Systemd Services and Units](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)
