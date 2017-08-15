---
layout: post  
jdate: 1396-05-24
user: amirmahdi
title: فرستنده رادیویی FM با رسپبری‌پای
categories:
- آموزشی
tags:
- رسپبری‌پای
featured: Raspberry_FM_Transmitter_Logo.jpg
keywords:
- تبدیل رسپبری به فرستنده رادیو
- تبدیل رسپبری‌پای به فرستنده رادیو
- raspberry fm transmitter
- raspberry pi fm transmitter
description: آموزش ساخت دستگاه فرستنده رادیویی FM  با رسپبری‌پای
---

سلام امروز قصد داریم که دستگاه رسپبری‌پای خود را به یک فرستنده‌ی رادیویی FM تبدیل کنیم. منظور از فرستنده‌ی FM همان دستگاهی است که بعضی از شما در ماشین‌تان قرارش می‌دهید و بعد با رادیو آهنگ گوش می‌کنید.  
## برای این آموزش به وسایل زیر نیاز دارید:
۱- یک عدد رسپبری پای (ترجیحاً رسپبری‌پای ۳)  
۲- آهنگ یا موسیقی  
۳- اینترنت  
۴- یک آنتن کوچک به همراه سیم جامپر (اجباری نیست-فقط برای امتحان)
## نحوه‌ی انجام:
۱- ابتدا سیستم‌عامل خود را نصب کنید (ترجیحاً Raspbian) و رسپبری‌پای خود را روشن کنید.  
۲- با رسپبری‌پای ارتباط برقرار کنید. (مانند SSH یا HDMI)  
۳- ترمینال را باز کنید یا اگر در محیط گرافیکی حضور ندارید فقط ورود کنید.  
۴- با این دستور سیستم را ارتقا دهید.

```sh
sudo apt-get update
sudo apt-get upgrade
```

۵- هسته‌ی سیستم را ارتقا دهید. (اگر از هسته‌ی تقریباً جدید استفاده می‌کنید، اجباری نیست)

```sh
sudo apt-get install -y rpi-update
sudo rpi-update
```

۶- نرم‌افزار‌های مورد نیاز را با این دستور نصب کنید.

```sh
sudo apt-get install -y libsndfile1-dev git make gcc c++ sox libsox-fmt-mp3
```

۷- نرم‌افزار فرستنده‌ی FM را نصب کنید.

```sh
git clone https://github.com/ChristopheJacquet/PiFmRds.git
cd PiFmRds/src
make clean
make
```

۸- یک آنتن کوچک درست کنید. (هر چه کیفیت آنتن بهتر باشد محدوده‌ی بیش‌تری را به خود اختصاص می‌دهد و اگر درست نکنید شاید تا ۲متر برود.)  
۹- سیم جامپر را از وسط بریده و سیم قسمت مادگی آن را با چسب به آنتن بچسبانید.  

![JumperWithAntenna]({{ site.imgurl }}/JumperWithAntenna.jpg)

۱۰- سیم جامپر و آنتن را در GPIO 4 دستگاهتان قرار دهید. GPIO در رسپبری پای ۳ در این مکان قرار دارد.  

![GPIO4-RPi3]({{ site.imgurl }}/GPIO4-RPi3.jpg)
![JumperOnGPIO4]({{ site.imgurl }}/JumperOnGPIO4.jpg)

۱۱- برای اجرا موسیقی با فرمت WAV در ترمینال چنین تایپ کنید. (به جای x نام فایل مورد نظر و به جای y فرکانس مورد نظر را قرار دهید.)

```sh
sudo ./pi_fm_rds -audio xxx.wav -freq yyy.y
```

۱۲- اما برای اجرا موسیقی با فرمت MP3 چنین تایپ کنید. (مانند قبل)

```sh
sox xxx.wav -r 22050 -c 1 -b 16 -t wav - | sudo ./fm_transmitter -f yyy.y -
```

و تمام.
