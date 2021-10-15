---
title: "BugHunting - Reflected XSS Attacks"
date: 2021-05-29
thumb: "xss-logo.jpg"
tags: 
 - bughunting
---

# Intro
Pada tanggal **20 April 2021**, saya menemukan website kamus bahasa inggris yang lumayan akurat untuk menerjemahkan sebuah *idiom* untuk tugas saya. Saya iseng untuk memasukkan karakter *double quote* ( " ) ke dalam search bar, dan tiba tiba double quote tersebut berubah menjadi teks "null"

```
https://[REDACTED].org/[PARAMETER]/?q="
```

Lalu saya membuka source code web tersebut

![error](../assets/img/source_dict.jpg)

Coba tebak kenapa bisa null?
Yaa.. karena object **lookupWord** berisi *double quote* dan tidak difilter menjadi **&amp;quot; atau %22**, itulah yang menyebabkan crash di web nya

# Mulai Inject
Nah karena *double quote* tidak difilter, maka kita bisa sangat mudah memasukkan (atau meng-inject) kode html/js kedalamnya

Coba perhatiin deh, apa yang terjadi kalau kita ketik **"}** di url (lihat kode dibawah sebagai ilustrasi)


```js
{
	...
	lookupWord:""}"
}

```

Bisa ditebak apa yang terjadi? yap, isi dari lookupWord menjadi kosong (" "), dan JSON nya menjadi tertutup berkat kurung kurawal { } :D, tapi masih ada masalah ini, karena masih ada sisa *double quote* dan *kurung kurawal* diujung

## Inject Html & Javascript Code

Saya hampir buntu disini, tapi saya ingat, saya bisa memasukkan HTML code kedalamnya, inilah payload full nya
```
"}</script></amp-state></template></div><script>alert(document.domain)</script><!--
```
![error](../assets/img/payload_dict.jpg)

# Result
Hanya ilustrasi

![xss](../assets/img/alert_dict.jpg)

# Timeline

 - 23 April 2021 : Report Bug ke CSIRT Universitas 
 - 27 April 2021 : Belum mendapatkan balasan, tetapi Bug sudah diperbaiki





