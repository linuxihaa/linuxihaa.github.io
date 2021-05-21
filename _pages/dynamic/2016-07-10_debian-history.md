---
layout: post
jdate: '1395-04-20'
user: mps3c
title: معرفی دبیان
categories:
- آموزشی
tags:
- دبیان
featured: deb00.png
keywords:
- دبیان
- نسخه‌های دبیان
- debian
description: معرفی تاریخچه دبیان و نسخه‌های مختلف دبیان
timeToRead: 5
---

دبیان یک سیستم‌عامل شبه یونیکس است که به‌طور کامل از نرم‌افزارهای رایگان تشکیل شده است که بیشتر نرم‌افزارهای آن تحت مجوز پروانه عمومی همگانی گنو هستند و توسط گروهی از برنامه‌نویس‌ها دور هم جمع شده‌اند که پروژه دبیان رو تشکیل داده‌اند. دبیان در سه شاخه اصلی ارائه می‌شود که به‌طور کلی عبارت‌اند از:

پایدار(Stable) – درحال توسعه(Testing) – ناپایدار (sid)

دبیان 0.01 توسط آقای [ایان مورداک](https://fa.wikipedia.org/wiki/%D8%A7%DB%8C%D8%A7%D9%86_%D9%85%D9%88%D8%B1%D8%AF%D8%A7%DA%A9) در ماه آگوست در سال ۱۹۹۳ منتشر شد. قبل از توسعه پروژه دبیان، مورداک از سیستم‌عامل SLS یا به عبارتی [Softlanding Linux System](https://en.wikipedia.org/wiki/Softlanding_Linux_System) که توزیع محبوب لینوکسی برپایه [Slackware](https://en.wikipedia.org/wiki/Slackware) بود استفاده می‌کرد و به‌خاطر مشکلات فراوانی که این سیستم‌عامل به‌همراه داشت مورداک تصمیم به ساخت این توزیع گرفت و بعداً در سال ۱۹۹۶ نسخه پایدار دبیان 1.0 رونمایی شد. همین‌طور که شاید بدانید نام دبیان ترکیبی از نام ایان مورداک و نامزدش دبرا لین بود (دبرا + ایان = دب + یان = دبیان)، کسی که نام دبیان را برای این سیستم‌عامل انتخاب کرد.

> به گفته ویکی‌پدیا، در سال ۱۹۹۳ مورداک «بیانیه دبیان» را منتشر کرد و طرح کلی خودش را برای سیستم‌عاملی جدید معرفی کرد. در آناو در آن اشاره به ساخت یک [توزیع لینوکس](https://fa.wikipedia.org/wiki/%D8%AA%D9%88%D8%B2%DB%8C%D8%B9_%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3) می‌کند که به‌صورت متن باز و آزاد نگهداری و توسعه داده شود، همانند لینوکس و گنو.

![pic01](/images/deb01.png)


و در نهایت مورداک در سال 1996 از رهبری پروژه دبیان خداحافظی کرد و آقای بروس پرنز به عنوان رهبر پروژه جایگزین انتخاب شد.

لیستی از رهبران پروژه دبیان تا به امروز که به شکل زیر در ویکی پدیا آمده است:

> رهبر پروژه دبیان (DPL) یک شخص مطرح در پروژه است که راه کنونی پروژه را تعیین می‌کند.
> 
> *   ایان مورداک (آگوست ۱۹۹۳ – مارس ۱۹۹۶), بنیان‌گذار پروژه دبیان
> 
> *   بروس پرنز (آوریل ۱۹۹۶ – دسامبر ۱۹۹۷)
> 
> *   Ian Jackson (ژانویه ۱۹۹۸ – دسامبر ۱۹۹۸)
> 
> *   Wichert Akkerman (ژانویه ۱۹۹۹ – مارس ۲۰۰۱)
> 
> *   Ben Collins (آوریل ۲۰۰۱ – آوریل ۲۰۰۲)
> 
> *   Bdale Garbee (آوریل ۲۰۰۲ – آوریل ۲۰۰۳)
> 
> *   Martin Michlmayr (مارس ۲۰۰۳ – مارس ۲۰۰۵)
> 
> *   Branden Robinson (آوریل ۲۰۰۵ – آوریل ۲۰۰۶)
> 
> *   Anthony Towns (آوریل ۲۰۰۶ – آوریل ۲۰۰۷)
> 
> *   Sam Hocevar (آوریل ۲۰۰۷ – آوریل ۲۰۰۸)
> 
> *   استیو مک‌اینتایر (آوریل ۲۰۰۸ – آوریل ۲۰۱۰)
> 
> *   استفانو زاکیرولی (آوریل ۲۰۱۰ – آوریل ۲۰۱۳)
> 
> *   لوکاس ناسباوم (آوریل ۲۰۱۳ - هم‌اکنون)

و البته دبیان برای سیستم‌های مختلف پورت شده است که اگر دوست دارید بیشتر بدانید میتوانید به لینک [https://www.debian.org/ports](https://www.debian.org/ports) مراجعه کنید.

شاید برایتان جالب باشد که با توجه به فلسفه دبیان که به‌طور کاملاً واضح بیان می‌کند که هدف از این پروژه توسعه یک سیستم عامل رایگان و آزاد هستش، در اوایل توسعه خیلی‌ها فکر میکردن که در نهایت پروژه دبیان یک پروژه شکست‌خورده خواهد بود و در آخر از یاد می‌رود، ولی هم‌اکنون بیشتر از ۱۰۰۰ برنامه‌نویس در سراسر دنیا در حال توسعه این سیستم‌عامل هستن و خیلی‌ها و سیستم‌عامل‌های زیادی بر پایه‌ای این سیستم‌عامل به وجود آمده‌اند. به گفته Distrowatch از این توزیع ۱۲۴ توزیع دیگر به‌وجود آمده است که به‌صورت فعال دارن توسعه داده میشن که از این لیست میتوان به Ubuntu و Knoppix اشاره کرد.

![pic02](/images/deb02.png)

دبیان با کدنیم شخصیت‌های انیمیشن Toy Story (اسباب‌بازی) نام گذاری می‌شود. انیمیشن Toy Story در ماه نوامبر سال ۱۹۹۵ توسط Pixar ساخته شد و دبیان 1.1 یک سال بعد از آن ریلیز شد. به‌خاطر این‌که آقای بروس پرنز علاقه زیادی به این انیمیشن داشت و در آن زمان هم برای Pixar کار می‌کرد و هم رهبر پروژه دبیان بود تصمیم گرفت که نسخه‌های بعدی دبیان را با شخصیت‌های این انیمیشن توسعه دهند.

هم‌اکنون نسخه دبیان 8 با کدنیم Jessie (دختر گاوچران) نسخه پایدار دبیان است، نسخه درحال توسعه یا همان Testing با کدنیم Stretch (هشت پا) در حال توسعه است و نسخه ناپایدار دبیان که شامل بسته‌های به‌روزشده هستش که با کدنیم Sid (پسر شیطان) موجود هست. وقتی نسخه‌ای جدید از Testing برای دبیان ریلیز می‌شود همراه با کدنیم جدید خواهد بود ولی دبیان Sid ثابت بوده و تغییر نمی‌کند و البته مخازن ناپایدار دبیان هر ۶ ساعت به‌روز می‌شوند و می‌توانید با apt سیستم رو به‌روز کنید.

![pic03](/images/deb03.png)

چرخه بسته‌های در دبیان به شکل زیر بررسی می‌شوند تا به پایداری ممکن برسند. هر بسته باید در مرحله‌های زیر بررسی شود.

Experimental (آزمایشی) ← Unstable(ناپایدار) ← Testing (درحال توسعه) ← Stable(پایدار)

برخلاف توزیع‌های مختلف، در زمان مشخصی نسخه پایدار دبیان ریلیز نمیشه یعنی زمان مشخصی برای ریلیز شدنش وجود نداره و برای همین هروقت آماده بشه برای انتشار قرار داده میشه.