---
layout: post
jdate: '1392-12-28'
user: misam
title: نصب گوگل کروم در لینوکس
categories:
- آموزشی
tags:
- نرم‌افزار
- مرورگر
featured: google_chrome.png
keywords:
- گوگل کروم
- google chrome
description: آموزش نصب گوگل کروم در لینوکس به جای کرومیوم
timeToRead: 5
---

با پیشرفت تکنولوژی‌های وب، نیاز به داشتن مروگری قدرتمند و به‌روز برای پشتیبانی از آن‌ها، به‌شدت احساس می‌شود. بی‌شک گوگل کروم (Google Chrome) یکی از قدرتمندترین مرورگرهای وب است که کاربران زیادی را جذب خود کرده است و وب‌گردی لذت‌بخشی را برای ما مهیا می‌کند. کاربران لینوکس نیز بعد از موزیلا فایرفاکس که به صورت پیش‌فرض روی اکثر توزیع‌ها نصب است یکی از اولین انتخاب‌هایشان گوگل کروم لینوکس است اما به‌صورت پیش‌فرض کرومیوم در مخازن لینوکس نصب است و برای نصب گوگل کروم می‌توانید از دستورات ادامه این مطلب استفاده کنید.

از مزیت‌های این مرورگر می‌توان به سرعت بالا، تجزیه و نمایش درست صفحات وب، کنترل دسترسی‌های هر صفحه و ... اشاره کرد. همچنین با سینک اطلاعاتی مانند بوک‌مارک‌ها در حساب گوگل این امکان را به کاربران می‌دهد که در دستگاه‌های دیگر نیز به اطلاعات خود دسترسی داشته باشند. طراحان وب نیز می‌توانند از ابزارهای توسعه قدرتمند این مروگر استفاده کنند. و در آخر تعداد زیادی از افزونه که امکانات فوق‌العاده‌ای به ما می‌دهند؛ از بازی گرفته تا مدیر دانلود و یا برنامه شبکه‌های اجتماعی و ... .

نصب در دبیان، اوبونتو، لینوکس مینت و ...

```sh
sudo add-apt-repository 'deb http://dl.google.com/linux/deb/ stable non-free main'
sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
sudo apt-get update
sudo apt-get install google-chrome-stable
```

نصب در ردهت، فدورا، CentOs و ... 32 بیتی

```sh
sudo wget http://linuxihaa.ir/file/redhat/repo/i386/google-chrome.repo -O /etc/yum.repos.d/google-chrome.repo
yum install google-chrome-stable
```

نصب در ردهت، فدورا، CentOs و ... 64 بیتی

```sh
sudo wget http://linuxihaa.ir/file/redhat/repo/x86_64/google-chrome.repo -O /etc/yum.repos.d/google-chrome.repo
yum install google-chrome-stable
```

نصب در اوپن سوزه 32 بیتی

```sh
zypper ar http://dl.google.com/linux/chrome/rpm/stable/i386 Google-Chrome
zypper ref
zypper in google-chrome-stable
```

نصب در اوپن سوزه 64 بیتی

```sh
zypper ar http://dl.google.com/linux/chrome/rpm/stable/x86_64 Google-Chrome
zypper ref
zypper in google-chrome-stable
```