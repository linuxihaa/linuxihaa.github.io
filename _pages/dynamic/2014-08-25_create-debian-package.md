---
layout: post
jdate: '1393-06-03'
user: misam
title: ساخت بسته دبیان
categories:
- آموزشی
tags:
- دبیان
- توسعه
featured: create-package.jpg
keywords:
- بسته دبیان
- debian package
- deb
- dh_make
description: آموزش ساخت بسته دبیان
timeToRead: 5
---

توزیع‌هایی که پایه دبیان دارند از بسته‌های دبیان با پسوند `.deb` استفاده می‌کنند.

روش‌های مختلفی برای ساخت بسته دبیان از یک برنامه وجود دارد. برخی روش‌ها به سادگی از فایل اجرایی برنامه، یک بسته باینری دبیان را تولید می‌کنند اما بسته باینری فقط برای رفع نیاز خودمان کافی است و فایل‌ها و بسته‌های دیگری نیز باید تولید شود تا بتوان برنامه را در مخزن (repository) توزیع‌های لینوکس منتشر کرد. برای انتشار یک برنامه در مخازن توزیع‌های لینوکس باید سورس برنامه نیز عرضه شود.

در اینجا روش پایه‌ای را می‌خواهیم دنبال کنیم که تمام فایل‌های مورد نیاز را برای ساخت بسته دبیان به ما می‌دهد که به آن ساخت بسته سورس دبیان (debian source package) می‌گویند. در این روش ما از سورس برنامه بسته را می‌سازیم (در مطلبی دیگر روش کوتاهی برای تولید بسته از فایل اجرایی را خواهیم گفت).

در اینجا من یک برنامه آزمایشی می‌سازم و فرایند ساخت بسته را انجام می‌دهم تا با روش آن آشنا شویم.

قبل از هر چیز ابزارهای مورد نیاز را نصب می‌کنیم.

```sh
sudo apt-get install dh-make build-essential devscripts fakeroot debootstrap pbuilder
```

سپس بر اساس نام برنامه و نسخه آن پوشه‌ای ایجاد می‌کنیم. مثلا linuxihaa-1.0

اکنون درون پوشه یک فایل linuxihaa.c ایجاد می‌کنیم و برنامه ساده‌ای (که با اجرای آن متن Linuxihaa.IR نمایش داده می‌شود) درون آن می‌نویسیم.

```c
#include <stdio.h>

int main() {
	printf("Linuxihaa.IR\n");
	return 0;
}
```

این فایل اصلی برنامه ما است که با کمپایل آن می‌خواهیم فایل اجرایی linuxihaa تولید شود.

اکنون دورن همان پوشه فایل Makefile را می‌سازیم.

```make
DESTDIR=/
INSTALL_LOCATION=$(DESTDIR)/usr/
all:
	gcc linuxihaa.c -o linuxihaa
install:
	mkdir -p $(INSTALL_LOCATION)/bin
	cp linuxihaa $(INSTALL_LOCATION)/bin
clean:
	rm linuxihaa
```

این فایل دارای سه بخش است که بخش all وظیفه کمپایل کدها را بر عهده دارد؛ بخش install دستوراتی است که جهت نصب برنامه (قرار دادن فایل اجرایی و دیگر فایل‌ها در جای مناسب) استفاده می‌شود و بخش clean برای پاک کردن فایل‌های تولید شده در بخش all است.

در اینجا ما مسیر قرار دادن فایل اجرایی برنامه را شاخه /usr در نظر گرفته‌ایم؛ شاخه‌ای که فایل‌های اجرایی کاربران در آن قرار می‌گیرند و مانند دستورات ترمینال قابل فراخوانی و اجرا هستند. یعنی بعد از نصب برنامه با وارد کردن دستور linuxihaa در ترمینال نوشته Linuxihaa.IR برای کاربر نمایش داده می‌شود.

اکنون تمام منابع و کدهای برنامه ما آماده شده است. از پوشه برنامه فایل tar.gz آن را می‌سازیم. این همان بسته‌ای است که به عنوان نسخه عمومی (generic) برای توزیع‌های لینوکس ارائه می‌شود. با این بسته کاربر می‌تواند بعد از استخراج (extract) آن دستور make را وارد کرده و فایل اجرایی را بسازد و استفاده کند. همچنین با دستور make install فایل اجرایی در مسیر مناسب قرار می‌گیرد و کاربر می‌تواند به عنوان یک برنامه نصب شده روی سیستم از آن استفاده کند.

خب اکنون باید از بسته عمومی، بسته دبیان را بسازیم.

ابتدا ایمیل و نام خود را برای مراحل بعدی معرفی می‌کنیم.

```sh
DEBEMAIL="info@linxuihaa.ir"
DEBFULLNAME="Linuxihaa"
export DEBEMAIL DEBFULLNAME
```

سپس به پوشه برنامه رفته و دستور زیر را وارد می‌کنیم تا فایل‌های مورد نیاز برای ساخت بسته دبیان ساخته شود.

* بخشی از دستورات که با رنگ تیره مشخص شده است مسیر جاری ما است.

```sh
~/linuxihaa-1.0$ dh_make -c gpl3 -f ../linuxihaa-1.0.tar.gz
```

در اینجا من بعد از سوایچ c لایسنس برنامه که gpl3 در نظر گرفته‌ام را نوشتم.

با اجرای دستور بالا و وارد کردن s در جواب سوال نوع بسته (می‌خواهیم یک بسته معمولی عادی بسازیم)، خروجی زیر مشاهده می‌شود که جهت تایید اطلاعات است.

```sh
Type of package: single binary, indep binary, multiple binary, library, kernel module, kernel patch?
 [s/i/m/l/k/n] s

Maintainer name  : Linuxihaa.IR
Email-Address    : info@linuxihaa.ir 
Date             : Mon, 25 Aug 2014 18:46:30 +0430
Package Name     : linuxihaa
Version          : 1.0
License          : gpl3
Type of Package  : Single
Hit  to confirm: 
Done. Please edit the files in the debian/ subdirectory now. You should also
check that the linuxihaa Makefiles install into $DESTDIR and not in / .
```

اکنون در شاخه برنامه، پوشه debian ساخته شده است که حاوی فایل‌هایی برای ساخت بسته دبیان است. با دستور زیر برخی از فایل‌هایی که در اینجا نیاز نیستند را حذف می‌کنیم.

```sh
~/linuxihaa-1.0/debian$ rm -f *.ex *.EX README.*
```

دو فایل اصلی در پوشه debian وجود دارد که باید آن‌ها را ویرایش کرد.

**فایل control**

```
Source: linuxihaa
Section: unknown
Priority: optional
Maintainer: Linuxihaa.IR <info@linuxihaa.ir>
Build-Depends: debhelper (>= 8.0.0)
Standards-Version: 3.9.4
Homepage: <insert the upstream URL, if relevant>
#Vcs-Git: git://git.debian.org/collab-maint/linuxihaa.git
#Vcs-Browser: http://git.debian.org/?p=collab-maint/linuxihaa.git;a=summary

Package: linuxihaa
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}
Description: <insert up to 60 chars description>
 <insert long description, indented with spaces>
```

مواردی که باید ویرایش شوند Section (بخش برنامه)، Homepage (آدرس سایت توسعه‌دهنده)، Depends (بسته‌هایی که برنامه ما برای اجرا به آن نیاز دارد) و Description (توضیحات برنامه) هستند. بخش توضیحات شامل توضیح کوتاه در ۶۰ حرف و توضیح بلند در خطوط جدا (اول هر خط یک فاصله باید قرار گیرد) است.

موارد Vcs هم مربوط به آدرس نگهدارنده نسخه برنامه هستند که در اینجا گیت در نظر گرفته و آدرسی برای آن فرض شده است که به علت این‌که برنامه ما در این آدرس نگهداری نمی‌شود از آن صرف نظر می‌کنیم.

ما فایل control را به شکل زیر ویرایش می‌کنیم.

```
Source: linuxihaa
Section: utils
Priority: optional
Maintainer: Linuxihaa.IR <info@linuxihaa.ir>
Build-Depends: debhelper (>= 8.0.0)
Standards-Version: 3.9.4
Homepage: http://linuxihaa.ir

Package: linuxihaa
Architecture: any
Description: Linuxihaa Debian Test Package
 This software literally prints "Linuxihaa.IR".
```

همان‌طور که مشاهده می‌کنید مورد Depends را نیز حذف کردیم زیرا برنامه ما بسیار ساده است و به بسته خاصی نیاز ندارد.

**فایل copyright**

این فایل بسته به لایسنسی که در دستور dh_make انتخاب کردیم ایجاد می‌شود و موارد کوچکی دارد که باید براساس اطلاعات سازنده کامل شود.

مثلا فایل copyright برنامه ما بعد از ویراش این‌گونه است.

```sh
Format: http://www.debian.org/doc/packaging-manuals/copyright-format/1.0/
Upstream-Name: linuxihaa
Source: [آدرس سورس برنامه]

Files: *
Copyright: 2014 info@linuxihaa.ir
           2014 Linuxihaa
License: GPL-3.0+
```

بعد از ویرایش این فایل‌ها نوبت به ساخت بسته‌ها می‌رسد.

به پوشه اصلی برنامه باز می‌گردیم و دستور زیر را وارد می‌کنیم تا فایل‌های مورد نیاز بسته سورس دبیان ساخته شوند.

```sh
debuild -S
```

خب تمام شد! فایل‌هایی که برای انتشار برنامه نیاز هستند آماده شدند.

*   linuxihaa_1.0.orig.tar.gz
*   linuxihaa_1.0-1.debian.tar.gz
*   linuxihaa_1.0-1.dsc
*   linuxihaa_1.0-1.changes

از این مرحله به بعد **اختیاری** است و برای تولید بسته‌های باینتری (.deb) برنامه، جهت استفاده شخصی و آزمودن آن برای خودمان هست زیرا مخازن با دریافت فایل‌های بالا، خودشان بسته‌های باینری را ساخته و در مخزن قرار می‌دهند.

خب در همان پوشه مراحل زیر را دنبال می‌کنیم تا بسته باینری برنامه ساخته شود.

```sh
fakeroot debian/rules build
```

اکنون با دستور زیر بسته باینری دبیان را از برنامه می‌سازیم.

```sh
fakeroot debian/rules binary
```

اگر از پوشه برنامه خارج شوید مشاهده می‌کنید که بسته قابل نصب با پسوند deb از برنامه ایجاد شده است و می‌توان آن را نصب کرد اما کار ما هنوز تمام نشده است. این یک بسته باینری است و به معماری سیستم ما محدود است؛ برای تکمیل کار و انتشار برنامه باید فایل‌های دیگری نیز ساخته شود که با دستور زیر ایجاد می‌شوند.

```sh
debuild -us -uc
```

اکنون به شاخه بالای پوشه برنامه بازگردید و دستور زیر را وارد کنید تا فایل‌های موقت حذف شوند و بسته‌های سورس از بسته ما استخراج گردد.

```sh
~/$ dpkg-source -x linuxihaa_1.0-1.dsc
```

خب این مرحله هم تمام شد و بسته باینری در کنار دیگر بسته‌های سورس دبیان قابل مشاهده است.

* مرجع santi-bassett.blogspot.com/2014/07/how-to-create-debian-package.html

* تصویر شاخص از raphaelhertzog.com