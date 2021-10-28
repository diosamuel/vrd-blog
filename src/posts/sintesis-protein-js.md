---
title: "Memahami Tahapan Sintesis Protein Menggunakan Kode Javascript - Transkripsi"
date: 2021-05-29
thumb: "sintesis-protein-js.jpg"
tags: 
 - codewithschool
---

> \#codewithschool adalah topik yang mencoba menjelaskan kembali materi yang diajarkan disekolah menggunakan perumpamaan dalam kode pemrograman. Kedengarannya memang aneh, tetapi itu cara saya untuk lebih memahami materi di sekolah

---

# Apa Itu Sintesis Protein?
Simpelnya, sintesis protein merupakan proses pembentukan **protein** yang melibatkan peran DNA dan RNA.
Ada 2 Tahap Sintesis Protein, yaitu **Transkripsi dan Translasi**

# Proses Transkripsi
Nukleus adalah tempat dimana proses Sintesis Protein berlangsung, mari kita anggap Class adalah tempat bersemayamnya Nukleus
```js
class Nukleus {}
```

Transkripsi terjadi di dalam Nukleus, mari kita anggap kodenya seperti ini....
```js
class Transkripsi extends Nukleus{}
```


Lalu kita isi constructor dengan materi materi pada Sintesis Protein
```js
class Transkripsi extends Nukleus{
	constructor(template){
		this.DNAtemplate = template
		this.startKodon = "AUG"
		global.basa = {
			"A" : "U",
			"T" : "A",
			"G" : "C",
			"C" : "G"
		}
		global.mRNA = ''
	}
}
```	
