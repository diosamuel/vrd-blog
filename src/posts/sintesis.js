// Transkripsi
// DNA -> mRNA
class Nukleus {}
class Transkripsi extends Nukleus{
	constructor(template){
		super()
		this.DNA = {template}
		this.adenin = "A"
		this.guanin = "G"
		this.sitosin = "C"
		this.timin = "T"
		this.startKodon = "AUG"

		//DNA : mRNA
		global.basa = {
			"A" : "U",
			"T" : "A",
			"G" : "C",
			"C" : "G"
		}

		global.mRNA = ''
	}
	kodon(mRNA){ return mRNA.slice(0,3).join('')  }
	RNAPolimerase(){
		return {
			tempel(things){ console.log(`RNA Polimerase menempel di ${things}`) },
			buka(things){ console.log(`RNA Polimerase membuka untaian ${things}`) },
			cetak(dna){ 
				console.log(`RNA Polimerase mencetak ${dna} ke mRNA`)
				let mRNA = []
				for(let i = 0; i < dna.length ; i++){
					mRNA.push(global.basa[dna.split('')[i]])
				}
				console.log(`hasil mRNA : ${mRNA.join('')}`)
				global.mRNA = mRNA
			},
			menuju(tempat){ console.log(`Transkripsi selesai, mRNA menuju ${tempat}`)}
		}
	}

	//do
	
	inisiasi(){
		console.log('====INISIASI====')
		this.RNAPolimerase().tempel('terminator')
		this.RNAPolimerase().buka('dna')
		this.RNAPolimerase().tempel('promoter')
	}
	elongasi(){
		console.log('====ELONGASI====')
		this.RNAPolimerase().tempel('terminator')
		this.RNAPolimerase().cetak(this.DNA.template)
	}
	terminasi(){
		console.log('====TERMINASI====')
		if(this.kodon(global.mRNA) == this.startKodon){
			this.RNAPolimerase().menuju('sitoplasma')
		}
	}
}

SintesisProtein = new Transkripsi('TACAAACAGACAGACT')
SintesisProtein.inisiasi()
SintesisProtein.elongasi()
SintesisProtein.terminasi()