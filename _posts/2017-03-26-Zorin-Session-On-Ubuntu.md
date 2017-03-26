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

سلام سال نو مبارک.
یکی از توزیع‌های اوبونتو zorinos است. زورین بیش‌تر برای افراد ویندوزی طراحی شده و کاربران ویندوزی به راحتی می‌توانند به دنیای گنو/لینوکس مهاجرت کنند. ما امروز قصت داریم که دسکتاپ زورین را در اوبونتو اجرا کنیم.
ابتدا باید بگم که زورین فقط یک تم GTK+ رو همینطور چند پلاگین برای گنوم است. ما می‌توانیم با نصب کردن پلاگین زورین در گنوم دسکتاپ زورین را شبه سازی کنیم البته ما اینجا تم GTK زورین را نصب نمی‌کنیم و فقط پلاگین‌های زورین را نصب می‌کنیم.
ابتدا اگر گنوم نصب نکرده‌اید آن را با استفاده از ترمینال نصب کنید.

```sh
sudo apt-get update
sudo apt-get -y dist-upgrade
sudo apt-get install -y ubuntu-gnome-desktop
```

بعد از دانلود به شما پیام می‌دهد که می‌خواهید صفحه‌ی بالا آمدن سیستم شما چه شکلی باشد.
اگر گزینه‌ی lightdm را انتخاب کنید مثل قبل باقی می‌ماند ولی اگر gdm را انتخاب کنید. بعد از بوت سیستم با این صفحه مواجع می‌شوید.
![LightdmVSGdm3]({{ site.imgurl }}/LightdmVSGdm3.jpg)
این دیگر به شما بستگی دارد. ولی من gdm رو بیش‌تر می‌پسندم. حالا انتخاب کنید و بعد از نصب  سیستم را ربوت کنید. 
اگر در هنگام نصب gdm را انتخاب کرده‌اید ابتدا روی یوزر خود کلیک کنید و بعد آیکن تنظیمات را فشار دهید و بعد Gnome را انتخاب کنید.
![GDM-LoginForm]({{ site.imgurl }}/GDM-LoginFrom.jpg)
![GDM-LoginForm2]({{ site.imgurl }}/GDM-LoginForm2.jpg)
ولی اگر lightdm را انتخاب کرده‌اید بر روی عکس اوبونتو کلیک کنید و Gnome را انتخاب کنید.
![LightDM]({{ site.imgurl }}/LightDM.jpg)
حالا شما میزکار گنوم را نصب کرده‌اید. حال باید پلاگین‌ها را نصب کنید. برای این کار ترمینال را باز کنید و چنین تاپ کنید. اگر از ورژن اوبونتوی ۱۶.۰۴ استفاده نمی‌کنید جای xUbuntu_xx.xx ورژن اوبونتوی خود را قرار دهید.

```sh
sudo add-apt-repository ppa:zorinos/stable
sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/Horst3180/xUbuntu_16.04/ /' > /etc/apt/sources.list.d/arc-theme.list"
cd
wget -nv http://download.opensuse.org/repositories/home:Horst3180/xUbuntu_16.04/Release.key -O Release.key
sudo apt-key - < Release.key
sudo apt-get install -y arc-theme zorin-icon-themes gnome-tweak-tool gnome-shell-extension-zorin-dash gnome-shell-extension-zorin-media-controls gnome-shell-extension-zorin-menu gnome-shell-extension-zorin-overview gnome-shell-extension-zorin-panel gnome-shell-extension-zorin-taskbar gnome-shell-extension-zorin-tray gnome-shell-extension-zorin-window-list-bottom-panel gnome-shell-extension-zorin-window-list-main-panel gnome-shell-extensions-zorin-desktop 
gnome-tweak-tool
```
حال با چنین پنجره‌ای مواجع می‌شوید.
![Gnome-Tweark-Tool]({{ site.imgurl }}/Gnome-Tweark-Tool.jpg)
حالا شما می‌توانید گنوم خود را شخصی‌سازی کنید.
در قسمت GTK+ شما باید Arc را انتخاب کنید.
در قسمت Icons شما به دلخواه انتخاب کنید.
حالا نوبت به فعال کردن پلاگین‌ها می‌رسد. به قسمت extensions بروید و لیست زیر را فعال کنید.
> Zorin media controls
> Zorin menu
> Zorin overview
> Zorin panel
> Zorin taskbar
> Zorin tray

حالا به قسمت Desktop بروید و Icons on Desktop را فعال کنید.
حالا به قسمت Windows بروید و maximize و minimize را نیز فعال کنید.
حالا سیستم را ربوت کنید و دوباره لاگین کنید. و از دسکتاپ زورین مانند لذت ببرید.
![Gnome-Tweark-Tool]({{ site.imgurl }}/ZorinSessionOnUbuntu.jpg)
![Gnome-Tweark-Tool]({{ site.imgurl }}/ZorinSessionOnUbuntu2.jpg)
![Gnome-Tweark-Tool]({{ site.imgurl }}/ZorinSessionOnUbuntu3.jpg)
