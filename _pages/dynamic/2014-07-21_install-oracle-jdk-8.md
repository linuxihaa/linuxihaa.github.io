---
layout: post
jdate: '1393-04-30'
user: saaie
title: نصب 8 jdk اوراکل و شناسایی javac به سیستم
categories:
- آموزشی
tags:
- توسعه
featured: java8.png
keywords:
- jdk 8
- jdk 8 لینوکس
description: آموزش نصب 8 jdk اوراکل و شناسایی javac به سیستم
timeToRead: 5
---

در مخازن توزیع‌های مختلف معمولا بسته نرم‌افزاری openjdk وجود دارد و اگر بخواهیم با جاوا ۸ کار کنیم باید به دنبال راهی برای نصب oracle jdk1.8 باشیم. در این مطلب می‌خواهیم مراحل نصب و شناسایی جاوا به کل سیستم را بررسی کنیم.

ابتدا جاوا ۸ را از لینک [jdk8.java.net](https://jdk8.java.net/download.html) دریافت کنید. پس از دریافت فایل مربوط به لینوکس، فایلی با پسوند tar.gz که حاوی jdk هست را از حالت فشرده خارج کنید و در مسیری مثل opt/ قرار دهید یا با دستور زیر را در ترمینال اجرا کنید.

```sh
$ sudo tar -xzvf jdk-8XXXXXXXXX.tar.gz -C /opt/
```

پس از اینکه فایل از حالت فشرده خارج شد سه دستور زیر را در ترمینال اجرا کنید تا نصب کامل شود و در کل سیستم جاوا قابل دسترس باشد.

```sh
$ sudo update-alternatives --install "/usr/bin/java" "java" "/opt/jdk1.8.0/bin/java" 1
$ sudo update-alternatives --install "/usr/bin/javac" "javac" "/opt/jdk1.8.0/bin/javac" 1
$ sudo update-alternatives --install "/usr/bin/javaws" "javaws" "/opt/jdk1.8.0/bin/javaws" 1
```

اگر بر روی سیستم openjdk نصب است لازم است که دستورات زیر را نیز اجرا کنید و از منوی ظاهر شده گزینه مورد نظر را انتخاب کنید تا jdk8 به عنوان پیش فرض در نظر گرفته شود.

```sh
$ sudo update-alternatives --config java
There are 2 choices for the alternative java (providing /usr/bin/java).

 Selection Path Priority Status
------------------------------------------------------------
 0 /usr/lib/jvm/java-6-openjdk-amd64/jre/bin/java 1061 auto mode
* 1 /opt/jdk1.8.0/bin/java 1 manual mode
 2 /usr/lib/jvm/java-6-openjdk-amd64/jre/bin/java 1061 manual mode

Press enter to keep the current choice[*], or type selection number: 1
```

همین کار را برای javac و javaws نیز تکرار کنید. حال نصب کامل شده است و جاوا  در همه جا قابل دسترسی است. برای امتحان موفقیت آمیز بودن عملیات فوق دستور زیر را  در ترمینال اجرا کنید.

```sh
$ java -version
java version "1.8.0"
Java(TM) SE Runtime Environment (build 1.8.0-b132)
Java HotSpot(TM) 64-Bit Server VM (build 25.0-b70, mixed mode)
```