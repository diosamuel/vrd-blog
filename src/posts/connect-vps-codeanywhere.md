---
title: "Cara Connect VPS Codeanywhere"
date: 2021-10-04
thumb: "http://codeanywhere.com/img/backgrounds/codeanywhere-bg.jpg"
tags: 
 - tutorial
 - linux
 - vps
 - catatan
---

# Lewat Putty

1. Buka putty key generator
2. Generate key
3. Save private key
4. Salin public key openssh
5. Buka IDE Codeanywhere
6. nano ~/.ssh/authorized_keys
7. Paste public key openssh (nomor 4)
5. Buka Putty
6. Isi hostname dan port
	```hostname : host{n}.codeanyhost.com```
7. Dikiri, Connection - SSH - Auth
8. Browse, buka Private key yg sudah di save di no 3
9. Open
10. Login sebagai cabox
11. Vps akan terkoneksi

# Lewat CMD

1. Buka CMD
2. Ketik ssh-keygen
3. cd .ssh && notepad id_rsa.pub
4. Salin isi id_rsa.pub
5. Buka IDE codeanywhere
6. nano ~/.ssh/authorized_keys
7. Paste public key openssh (nomor 4)
8. Buka CMD lagi
9. Ketik
	```ssh cabox@host{n}.codeanyhost.com -p {port}```
10. Vps akan terkoneksi
