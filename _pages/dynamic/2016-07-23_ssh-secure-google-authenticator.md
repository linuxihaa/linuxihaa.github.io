---
layout: post    
jdate: '1395-05-02'   
user: rmasoumvand    
title: SSH امن با Google Authenticator
categories:
- آموزشی
tags:
- سرور
- حریم‌شخصی
featured: openssh-two-factor.png    
keywords:
- Google Authenticator
- two factor ssh  
- two factor Authenticator
description: امن نمودن SSH با استفاده از Google Authenticator 
timeToRead: 5
---

یکی از راه‌هایی که می‌توان برای امن نمودن دسترسی ssh به سیستم‌های لینوکسی مخصوصا سرورها انجام داد استفاده از روش تایید ارتباط ۲ مرحله ای یا two-factor authentication است. با استفاده از الگوریتم تولید کلمه عبور یکبار مصرف بر اساس زمان می‌توانیم تأیید اعتبار دسترسی ssh را به‌صورت دو مرحله‌ای انجام دهیم. برای اینکار می‌توانیم از سیستم Google Authenticator استفاده کنیم. به این صورت که پس از ورود با رمز اصلی، یک Verification code از شما درخواست می‌شود که می‌بایست آنرا از روی نرم‌افزار نصب شده روی گوشی موبایلتان وارد کنید.

*نکته)‌ می‌بایست نرم‌افزار Google Authenticator بر روی گوشی موبایلتان نصب باشد. نسخه رسمی این برنامه برای سه پلتفرم IOS, Blackberry و اندروید منتشر شده است.

برای این کار می‌بایست از ماژول Google Authenticator PAM استفاده کنیم. PAM مجموعه‌ای از ماژول‌های داینامیک است که فرایند Authorization را انجام می‌دهند.

برای نصب ماژول Google Authenticator PAM در سیستم‌های 
مبتنی بر دبیان بصورت زیر عمل می‌کنیم.

```sh
sudo apt-get install libpam-google-authenticator
```
سپس با یوزری که می‌خواهید به‌صورت Remote به سرور دسترسی داشته باشید لاگین نموده و دستور زیر را وارد می‌کنیم.

```sh
google-authenticator
```

پس از اجرای دستور بالا یک سری سؤالات بصورت Yes/No از شما 
پرسیده می‌شود که به آن‌ها پاسخ مناسب بدهید. سپس برنامه یک QR Code قابل اسکن و Secret Key مخصوص به شما و تعدادی Emergency Code برای شرایط اضطراری را به شما نمایش می‌دهد که می‌بایست Secret Key نمایش داده شده را وارد برنامه Google Authenticator نصب شده بر روی گوشی موبایلتان کنید. همچنین می‌توانید توسط دوربین موبایلتان QR Code نمایش داده شده را اسکن کنید تا بطور خودکار اطلاعات مربوطه در نرم‌افزار ثبت شود.

پس از وارد نمودن اطلاعات فوق برنامه به‌طور مرتب یک شماره ۶ رقمی را برای شما ایجاد می‌کند که این همان Verification code شما خواهد بود.

سپس می بایست ماژول  Google Authenticator PAM را برای سرویس SSH فعال کنیم. برای اینکار به‌صورت زیر عمل می کنیم.
  
ابتدا فایل etc/pam.d/sshd را ویرایش نموده و خط زیر را به آن اضافه می‌کنیم.

```sh
auth required pam_google_authenticator.so
```

سپس فایل etc/ssh/sshd_config را ویرایش نموده و خط ChallengeResponseAuthentication را به‌صورت زیر تغییر می‌دهیم.

```sh
ChallengeResponseAuthentication yes
```

در پایان سرویس ssh را توسط دستور زیر مجدداً راه اندازی می‌کنیم.

```sh
sudo systemctl restart sshd.service
```

از این پس هنگام ssh نمودن یه سیستم فوق علاوه بر رمز کاربر از شما یک Verification code هم درخواست می‌شود که می‌بایست با مراجعه به نرم‌افزار نصب‌شده روی گوشی، کد تولید شده را وارد نمایید.
