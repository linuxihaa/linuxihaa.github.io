---
layout: post  
jdate: 1396-01-06
user: amirmahdi
title: آموزش نصب میزکار زورین در اوبونتو
categories:
- آموزشی
tags:
- پیکربندی
- میزکار
- شخصی‌سازی
featured: ZorinOS.jpg
keywords:
- Zorin
- زورین در اویونتو
- زورین
- میزکار زورین
- میزکار zorin
description: نصب میزکار زورین در اوبونتو
---

سلام سال نو مبارک. یکی از توزیع‌های اوبونتو zorinos است. زورین بیش‌تر برای افراد ویندوزی طراحی شده و کاربران ویندوزی به راحتی می‌توانند به دنیای گنو/لینوکس مهاجرت کنند. ما امروز قصد داریم که دسکتاپ زورین را در اوبونتو اجرا کنیم.
ابتدا باید بگم که زورین فقط یک تم GTK+ به همراه چند پلاگین برای دسکتاپ گنوم است. ما می‌توانیم با نصب کردن پلاگین‌های زورین در گنوم، دسکتاپ زورین را شبیه‌سازی کنیم البته ما اینجا تم GTK زورین را نصب نمی‌کنیم و فقط پلاگین‌های آن را نصب می‌کنیم.
اگر گنوم نصب نکرده‌اید ابتدا آن را با استفاده از ترمینال نصب کنید.


```sh
sudo apt-get update
sudo apt-get -y dist-upgrade
sudo apt-get install -y ubuntu-gnome-desktop
```

بعد از اینکه دانلود به اتمام رسید او شما پیام می‌دهد که شما می‌خواهید صفحه‌ی بالا آمدن سیستم‌تان چه شکلی باشد.
![LightdmVSGdm3]({{ site.imgurl }}/LightdmVSGdm3.jpg)

اگر گزینه‌ی lightdm را انتخاب کنید مثل قبل باقی می‌ماند ولی اگر gdm را انتخاب کنید. بعد از بوت سیستم با این صفحه مواجع می‌شوید.
![GDM-LoginForm]({{ site.imgurl }}/GDM-LoginFrom.jpg)
این دیگر به شما بستگی دارد. ولی من gdm رو بیش‌تر می‌پسندم. حالا دیگر گزینه‌ی مورد نظر را انتخاب کنید و بعد از نصب کامل سیستم خود را ریبوت کنید. 
اگر در هنگام نصب gdm را انتخاب کرده‌اید ابتدا روی یوزر خود کلیک کنید و بعد آیکن تنظیمات را فشار دهید و بعد Gnome را انتخاب کنید.

![GDM-LoginForm2]({{ site.imgurl }}/GDM-LoginForm2.jpg)
ولی اگر lightdm را انتخاب کرده‌اید بر روی عکس اوبونتو کلیک کنید و Gnome را انتخاب کنید.
![LightDM]({{ site.imgurl }}/LightDM.jpg)
حالا شما میزکار گنوم را نصب کرده‌اید. اکنون باید پلاگین‌ها را نصب کنید. برای این کار ترمینال را باز کنید و متن زیر را تاپ کنید.

```sh
sudo add-apt-repository ppa:zorinos/stable
sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/Horst3180/xUbuntu_16.04/ /' > /etc/apt/sources.list.d/arc-theme.list"
cd
wget -nv http://download.opensuse.org/repositories/home:Horst3180/xUbuntu_16.04/Release.key -O Release.key
sudo apt-key - < Release.key
sudo apt-get update
sudo apt-get install -y arc-theme zorin-icon-themes gnome-tweak-tool gnome-shell-extension-zorin-dash gnome-shell-extension-zorin-media-controls gnome-shell-extension-zorin-menu gnome-shell-extension-zorin-overview gnome-shell-extension-zorin-panel gnome-shell-extension-zorin-taskbar gnome-shell-extension-zorin-tray gnome-shell-extension-zorin-window-list-bottom-panel gnome-shell-extension-zorin-window-list-main-panel gnome-shell-extensions-zorin-desktop 
gnome-tweak-tool
```

البته اگر از ورژن اوبونتوی ۱۶.۰۴ استفاده نمی‌کنید جای xUbuntu_xx.xx ورژن اوبونتوی خود را قرار دهید.
حال با چنین پنجره‌ای مواجع می‌شوید.
![Gnome-Tweark-Tool]({{ site.imgurl }}/Gnome-Tweark-Tool.jpg)
حالا شما امکان این رو دارید که گنوم خود را شخصی‌سازی کنید.
در قسمت GTK+ شما باید Arc را انتخاب کنید.
در قسمت Icons شما به دلخواه یکی را انتخاب کنید.
حال نوبت به فعال کردن پلاگین‌ها می‌رسد. به قسمت extensions بروید و لیست زیر را فعال کنید.
> Zorin media controls,
> Zorin menu,
> Zorin overview,
> Zorin panel,
> Zorin taskbar,
> Zorin tray

حالا به قسمت Desktop بروید و Icons on Desktop را فعال کنید.
بعد به قسمت Windows بروید و maximize و minimize را نیز فعال کنید.
حال سیستم را ریبوت کنید و دوباره لاگین کنید. و از دسکتاپ زورین لذت ببرید
![Gnome-Tweark-Tool]({{ site.imgurl }}/ZorinSessionOnUbuntu.jpg)
![Gnome-Tweark-Tool]({{ site.imgurl }}/ZorinSessionOnUbuntu2.jpg)
![Gnome-Tweark-Tool]({{ site.imgurl }}/ZorinSessionOnUbuntu3.jpg)
