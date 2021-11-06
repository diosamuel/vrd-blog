---
title: "Cara Connect VPS Codeanywhere"
date: 2021-10-04
thumb: "https://kb.qwords.com/wp-content/uploads/2016/12/qwords_putty_2.png"
license : "codeanywhere.com"
license_url : "https://codeanywhere.com"
tags: 
 - tutorial
 - linux
 - vps
 - note
---

```bash
# Lewat Putty

- Buka putty key generator
- Generate key
- Save private key
- Salin public key openssh
- Buka IDE Codeanywhere
- nano ~/.ssh/authorized_keys
- Paste public key openssh (nomor 4)
- Buka Putty
- Isi hostname dan port (hostname : host{n}.codeanyhost.com)
- Dikiri, Connection - SSH - Auth
- Browse, buka Private key yg sudah di save di no 3
- Open
- Login sebagai cabox
- Vps akan terkoneksi
```

```bash
# Lewat CMD

- Buka CMD
- Ketik ssh-keygen
- cd .ssh && notepad id_rsa.pub
- Salin isi id_rsa.pub
- Buka IDE codeanywhere
- nano ~/.ssh/authorized_keys
- Paste public key openssh (nomor 4)
- Buka CMD lagi
- ssh cabox@host{n}.codeanyhost.com -p {port}
- Vps akan terkoneksi
```
