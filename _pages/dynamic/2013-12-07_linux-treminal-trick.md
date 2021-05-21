---
layout: post
jdate: '1392-09-16'
title: 5 شگرد جالب و کاربردی خط فرمان لینوکس
author: محمد مختاری
author_url:
author_bio:
categories:
- آموزشی
tags:
- ترمینال 
featured: terminal2.png
keywords:
- خط فرمان لینوکس
- ترمینال لینوکس
description: آموزش  شگردهای جالب و کاربردی خط فرمان لینوکس
timeToRead: 5
---

تو این آموزش می خوایم در مورد ۵ روش جالب برای استفاده‌ی بهتر و سریع‌تر از خط فرمان لینوکس با هم صحبت کنیم. انشاالله به مرور قسمت‌های دیگه‌ی این آموزش رو هم می‌تونید از لینوکسی‌ها مطالعه کنید.  در آموزش‌های بعدی کارهای هیجان انگیزتری در خط فرمان انجام خواهیم داد!

![](/images/terminal2.png)

**توجه:** در این آموزش فرض شده که خواننده حداقل آشنایی نسبی با لینوکس و دستورات خط فرمان داره؛ اگه مشکلی تو فهمیدن کاری که این دستورات انجام میدن دارین، می تونین به [اینجا](http://linuxihaa.ir/%D9%85%D8%B1%D8%AC%D8%B9-%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D8%A7%D8%AA-%D8%AA%D8%B1%D9%85%DB%8C%D9%86%D8%A7%D9%84-%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3/) مراجعه کنید.

**توجه:** _تمام این مثال‌ها تو پوسته‌ی bash‌ (پوسته‌ی پیش فرض اکثر توزیع‌های لینوکس) تست شده‌اند._

خب! با مثال اول شروع می‌کنیم:

### ۱. چطوری سریع و بی دردسر بین دایرکتوری های مختلف جابجا بشیم؟

معمولا وقتی داریم با خط فرمان لینوکس کار می‌کنیم، لازمه که بین تعدادی دایرکتوری مرتبا سوییچ کنیم. مثلا توی دایرکتوری A هستیم، به دایرکتوری B منتقل میشیم، حالا می خوایم دوباره برگردیم به دایرکتوری A. نوشتن کل آدرس اون دایرکتوری ممکنه کار مشکلی باشه. تو همچین شرایطی می تونیم از دستور میان‌بر `cd -` استفاده کنیم. مثلا:

```sh
$ pwd
/home/mohammad
$ cd /usr/local/bin/
$ cd -
/home/mohammad
```

این جوری می‌تونیم به راحتی بین دو تا دایرکتوری جابجا بشیم.

### ۲. چطور  از تاریخچه‌ی خط فرمان به صورت کاربردی استفاده کنیم؟

با استفاده از `!!` می تونیم آخرین دستور اجرا شده را دوباره فراخوانی کنیم. مثلا:

```sh
$ uname -a
Linux mohammad-1015PN 3.8.0-26-generic #38-Ubuntu SMP Mon Jun 17 21:46:08 UTC 2013 i686 i686 i686 GNU/Linux
$ !!
uname -a
Linux mohammad-1015PN 3.8.0-26-generic #38-Ubuntu SMP Mon Jun 17 21:46:08 UTC 2013 i686 i686 i686 GNU/Linux
```

خب! حالا چه کارای خلاقانه‌ای می تونیم با** !!** انجام بدیم؟  
اول از همه می‌تونیم با دستورات دیگه ترکیبش کنیم، مثلا:

```sh
$ !! | grep Linux
uname -a | grep Linux
Linux mohammad-1015PN 3.8.0-26-generic #38-Ubuntu SMP Mon Jun 17 21:46:08 UTC 2013 i686 i686 i686 GNU/Linux
```

و معمولا خیلی پیش میاد که دستوری رو وارد می کنید و خطایی رو مشاهده می کنین که این دستور، سطح دسترسی root لازم داره. تو این موارد اولین چیزی که به نظر می رسه اینه که دکمه ی up arrow  و بعد home رو بزنیم و ابتدای دستور sudo رو اضافه کنیم. با استفاده از !!‌ می تونیم راحت تر این کار رو انجام بدیم:

```sh
$ touch new_binary
touch: cannot touch 'new_binary': Permission denied
$ sudo !!
sudo touch new_binary
[sudo] password for mohammad:
$ ls new_binary
new_binary
```

مورد استفاده دیگه می‌تونه این باشه که می‌خوایم یه دستور رو به آخر یه فایل shell اضافه کنیم. یا مثلا یه فایل shell‌ از دستوری که الان وارد کردیم درست کنیم:

```sh
$ ls -lart /home/mohammad/test/*.py
-rw-rw-r-- 1 mohammad mohammad 50 Mar 1 00:23 /home/mohammad/test/test.py
$ echo !! > myscript.sh
echo ls -lart /home/himanshu/practice/*.py > script.sh
$ cat script.sh
ls -lart /home/mohammad/test/*.py
```

پس مسلما استفاده از !! می تونه خیلی کمک کننده باشه و باعث صرفه جویی در وقت میشه.  
مورد دیگه استفاده از **!** به صورت تکی هست که مثلا تو این مورد می‌تونه کاربرد داشته باشه که می‌خوایم یه دستور خاص رو از سری دستوراتی که قبلا وارد کردیم اجرا کنیم، مثلا:

```sh
$ history
...
...
...
2039 uname -a | grep Linux
2040 dmesg
2041 clear
2042 cd bin
2043 clear
2044 pwd
2045 touch new_binary
2046 sudo touch new_binary
2047 ls new_binary
2048 history
$ !2039
uname -a | grep Linux
Linux mohammad-1015PN 3.8.0-26-generic #38-Ubuntu SMP Mon Jun 17 21:46:08 UTC 2013 i686 i686 i686 GNU/Linux
```

خیلی راحت تونستیم دستور 2039 از تاریخچه ی دستورهای خط فرمان رو دوباره اجرا کنیم، بدون اینکه نیازی باشه دوباره تایپش کنیم. این روش حتی از copy/paste هم راحت تره، نه؟!  
حتی می‌تونیم به جای شماره دستور از ۲- ، یعنی عدد منفی استفاده کنیم:

```sh
$ history
...
...
...
2049 ! 2039
2050 uname -a | grep Linux
2051 history
$ !-2
uname -a | grep Linux
Linux mohammad-1015PN 3.8.0-26-generic #38-Ubuntu SMP Mon Jun 17 21:46:08 UTC 2013 i686 i686 i686 GNU/Linux
```

اجرا کردن دستور با ورودی های دستور قبل با استفاده از !$

فقط یه مثال رو ببینیم:

```sh
$ ls /home/mohammad/test/*.py
/home/mohammad/test/firstPYProgram.py
```

```sh
$ ls -lart !$
ls -lart /home/mohammad/test/*.py
-rw-rw-r-- 1 mohammad mohammad 50 Mar 1 00:23 /home/mohammad/test/firstPYProgram.py
```

که مقدار ورودی دستور قبلی رو تو دستور بعدی به عنوان ورودی استفاده کردیم.  
می تونیم از `![keyword]` برای تکرار آخرین دستوری که با keyword شروع میشه، استفاده کنیم:

```sh
$ !ls
ls -lart /home/mohammad/practice/*.py
-rw-rw-r-- 1 mohammad mohammad 50 Mar 1 00:23 /home/mohammad/test/firstPYProgram.py
```

### ۳. چطور از  کاما استفاده کنیم؟!

یکی از کاربرد های کاما اینه که بخوایم یه رشته یا ابتدای یه رشته رو به حروف کوچک تبدیل کنیم:

```sh
$ words="Example of comma OPERATOR"
```

```sh
$ echo ${words,}
example of comma OPERATOR
```

```sh
$ {words,,}
example of comma operator
```

که تو مثال اول فقط حرف اول رشته‌ی تعریف شده، و تو مثال دوم، کل رشته رو به حروف کوچک تبدیل کردیم.

استفاده از  کاما در اسم فایل

یکی از کاربرد‌های جالب استفاده از کاما می‌تونه این باشه که مثلا می‌خوایم با دستوری مثل touch سه تا فایل بسازیم.

```sh
$ touch new_file{1,2,3}
$ ls new_file*
new_file1  new_file2  new_file3
```

با کاما خیلی راحت تونستیم اسم فایل‌ها رو وارد کنیم. در واقع محتویات داخل {} هر کدوم به اسم فایل اضافه شدن و در نهایت سه تا اسمی که می‌خواستیم ساخته شد.

یکی از پرکاربردترین کارهایی که معمولا با این روش انجام میشه اینه که بخوایم اسم یه فایل رو موقتا تغییر بدیم تا مثلا دو نسخه ی جدید و قدیمی رو ازش داشته باشیم:

```sh
$ mv my_filename.{old,new}
```

که فایلی به اسم my_filename.old رو به my_filename.new تغییر میده.

### ۴. چطور با فایلی که ابتدای اسمش خط تیره (-) داره، کار کنیم؟

حتما می دونید که تو خط فرمان معمولا پارامترهای دستورات مختلف رو با خط تیره مشخص می کنیم. حالا فرض کنید فایلی به اسم `-1mpFile.out` رو می خوایم پاک کنیم. خب! اگه از دستور `$ rm 1mpFilee.out` استفاده کنیم. با این خطا مواجه میشیم (حتی اگه از "" استفاده کنیم بازم خطا میده!) :

```sh
rm: invalid option -- '1'
Try 'rm ./-1mpFile.out' to remove the file '-1mpFile.out'.
Try 'rm --help' for more information.
```

یه راه حل، همین راه حلی هست که خط فرمان برامون نوشته، راه حل دیگه می تونه این باشه که دستور بالا رو اینجوری بنویسیم:

```sh
$ rm -- -1mpFile.out
```

یعنی دو تا خط تیره قرار میدیم و بعد اسم فایلمون.

این راه حل رو میشه تو موارد مشابه با دستورات دیگه هم به کار برد.

### ۵. چطور همه ی فایل های یک دایرکتوری به جز تعداد خاصی رو حذف کنیم؟

فرض کنید یه دایرکتوری داریم با تعداد زیادی فایل و می‌خوایم همه رو حذف کنیم، به جز تعدادی که پسوندهای خاصی دارند. مثلا تو این دایرکتوری:

```sh
$ ls
a.out         Cfile.c  file.c             macro.c     my_printf.c   orig_file.orig  stacksmash.c
bfrovrflw.c   cmd.c    firstPYProgram.py  main.c      new_printf.c  orig_file.rej   test_strace.c
bufrovrflw.c  env.c    helloworld.c       my_fopen.c  new.txt       prog.c          virtual_func.c
```

می خوایم همه‌ی فایل‌های تو دایرکتوری رو پاک کنیم، به جز فایل‌های سورس کدمون(فایل های با پسوند c و py). برای این کار می تونیم از دستور rm به این صورت استفاده کنیم:

```sh
$ rm !(*.c|*.py)

$ ls
bfrovrflw.c   Cfile.c  env.c   firstPYProgram.py  macro.c  my_fopen.c   new_printf.c  stacksmash.c   virtual_func.c
bufrovrflw.c  cmd.c    file.c  helloworld.c       main.c   my_printf.c  prog.c        test_strace.c
```

می بینید که همه‌ی فایل ها به جز اونایی که پسوند c و py داشتن، حذف شدن. (در اینجا اپراتور ! به معنی مکمل هست، یعنی همه به جز این فایل‌ها)

البته از این روش مشخص کردن اسامی فایل‌ها تو دستورات دیگه هم میشه استفاده کرد.

ادامه دارد... :)