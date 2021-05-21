---
layout: post  
jdate: '1395-05-01'  
user: rmasoumvand  
title: بهبود فونت رندرینگ در لینوکس  
categories:
- آموزشی
tags:
- شخصی‌سازی
featured: infinality.png  
keywords:
- فونت رندرینگ در لینوکس
- linux font rendering
- infinality font rendering
description: آموزش بهبود فونت رندرینگ در لینوکس
timeToRead: 5
---

در بعضی توزیع‌های لینوکس بخصوص Debian نوع رندرینگ یا استایل فونت خیلی زمخت و زننده است که برای بهبود و رفع این مشکل می‌تونیم از Infinality استفاده کنیم که در ادامه به نحوه نصب و کانفیگ اون می‌پردازیم.

۱) ابتدا توسط دستور زیر بسته fontconfig-infinality را نصب می‌کنیم.

```sh
sudo apt install fontconfig-infinality
```

۲) پس از نصب بسته فوق دستور زیر را وارد می‌کنیم.

```sh
sudo bash /etc/fonts/infinality/infctl.sh setstyle
```

۳) پس از اجرای دستور فوق لیستی از فونت استایل‌های قابل استفاده نمایش داده می‌شود که بسته به سلیقه خودتان می‌توانید انتخاب کنید.

۴) سپس فایل زیر را با یک ویرایش‌گر باز نموده و مقدار زیر را تغییر می‌دهیم.

```sh
gedit /etc/profile.d/infinality-settings.sh
```

و مقدار `USE_STYULE="DEFAULT"` را به استایل مورد نظرمان تغییر می‌دهیم. برای مثال برای تغییر به استایل Ubuntu به‌صورت `USE_STYULE="UBUNTU"` می‌شود.

۵) پس از ویرایش فایل بالا آن را Save کنید و برای اعمال تغییرات مجدد Login و یا Restart کنید.
