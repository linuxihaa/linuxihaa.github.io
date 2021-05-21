---
layout: post  
jdate: '1395-05-14'
user: rmasoumvand  
title: راه اندازی DNS Server لینوکس
categories:
- آموزشی
tags:
- شبکه
- سرور
featured: dns-server-linux.jpg  
keywords:
- dns server لینوکس
- bind9
description: آموزش راه اندازی DNS Server لینوکس
timeToRead: 5
---

همان‌طور که می‌دانید زمانی که می‌خواهید وارد وبسایتی شوید برای مراجعه می‌بایست آدرس سرویس‌دهنده آن وب سایت را بدانید که با آدرس آی‌پی (IP Address) مشخص می‌شود. از آنجایی که به‌خاطر سپردن آدرس‌های IP برای تمامی وب‌سایت‌ها کاری دشوار و تقریباً غیر ممکن است می‌توانیم به‌جای وارد نمودن آدرس IP از سرویس نام دامنه یا همان DNS استفاده کنیم. توسط این سرویس نام‌های دامنه به آدرس‌های آی‌پی ترجمه می‌شوند.

در این آموزش به نحوه نصب و راه اندازی سرویس دهنده معروف `bind` در لینوکس خواهیم پرداخت.

ابتدا توسط دستور زیر سرویس دهنده bind را نصب می‌کنیم.

- برای سیستم‌های مبتنی بر دبیان:

```sh  
sudo apt install bind9  
```

- برای سیستم‌های مبتنی بر ردهت:

```sh  
sudo yum install bind  
```

سپس برای تعریف یک `zone`، می‌بایست فایل زیر را ویرایش کنیم.

```sh  
sudo nano /etc/bind/named.conf.local  
```

و خطوط زیر را به آن اضافه می‌کنیم.

```  
zone “linuxihaa.ir” {  
    type master;  
    file “/etc/bind/db.linuxihaa.ir”;  
};  
```

که در اینجا نام دامنه ما `linuxihaa.ir` و از نوع `master` است.

سپس می‌بایست یک zone فایل برای دامنه مورد نظرمان ایجاد کنیم. برای این کار به‌صورت زیر عمل می‌کنیم.

```sh  
cd /etc/bind  
cp db.empty db.linuxihaa.ir  
```

و فایل ایجاد شده را توسط یک ویرایشگر متنی ویرایش می‌کنیم.

```sh  
sudo nano /etc/bind/db.linuxiha.ir  
```

که در ابتدا محتویات فایل فوق بصورت زیر خواهد بود.

```  
$TTL 86400

@ IN SOA localhost. root.localhost. (  
    1 ; Serial  
    604800 ; Refresh  
    86400 ; Retry  
    2419200 ; Expire  
    86400 ) ; Negative Cache TTL  
;  
@ IN NS localhost.  
```

که می‌بایست به‌جای `localhost` نام دامنه مورد نظرمان را اضافه کنیم.

```  
$TTL 86400

@ IN SOA linuxihaa.ir. admin.linuxihaa.ir. (  
    1 ; Serial  
    604800 ; Refresh  
    86400 ; Retry  
    2419200 ; Expire  
    86400 ) ; Negative Cache TTL  
;

@ IN NS linuxihaa.ir.  
```

که در اینجا `linuxihaa.ir.` نام دامنه مورد نظر ما و `admin.linuxihaa.ir.` آدرس ایمیل مدیر سیستم است.

پس از اعمال تغییرات فوق می‌بایست رکوردهای مربوط به هاست‌های مورد نظرمان را به انتهای فایل، به‌صورت زیر اضافه کنیم.

```  
ns IN A 104.28.12.99

linuxihaa.ir. A 104.28.12.99  
www CNAME linuxihaa.ir.  
host1 A 104.28.12.199  
host2 A 104.28.12.200  
```

که در مثال فوق در خط چهارم آدرس یک وب سرور را مشخص نمودیم که در‌واقع یک نام مستعار به آدرس `linuxihaa.ir` است.

همچنین در خطوط پنجم و ششم دو هاست به آدرس‌های `host1.linuxihaa.ir` و `host2.linuxihaa.ir` تعریف نمودیم.

پس از ویرایش و ذخیره فایل فوق می‌بایست صحت اطلاعات وارد شده را توسط ابزار `named-checkzone` به‌صورت زیر بررسی کنیم.

```sh  
named-checkzone linuxihaa.ir /etc/bind/db.linuxihaa.ir  
```

پس از اجرای دستور فوق و در صورت نداشتن مشکل برنامه خروجی زیر را نمایش خواهد داد.

```sh  
zone linuxihaa.ir/IN: loaded serial 1  
OK  
```

سپس جهت راه اندازی مجدد bind دستور زیر را وارد می‌کنیم.

```sh  
sudo systemctl restart bind9  
```

جهت تست سرویس دهنده می‌توانیم از دستور `dig` به‌صورت زیر استفاده کنیم.

```sh  
dig @104.28.12.99 [www.linuxihaa.ir](http://www.linuxihaa.ir/)  
```

*   نکته: برای استفاده از دستور dig می بایست بسته `dnsutils` را نصب کنید.
