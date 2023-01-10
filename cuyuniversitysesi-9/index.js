// const mahasiswa = [
//   {
//     nama: "Kevin fairuz",
//     alamat:"Cimohai",
//     usia: 19,
//     Semester: "1"
//   },
//   {
//     nama: "Gina Aulia",
//     alamat:"Banten",
//     usia: 19,
//     Semester: "5"
//   }
// ]
// //Standar function
// function getDetailData() {
//     //mahasiswa.map(function(result, i){
//       //  console.table(result)
//    mahasiswa.forEach(result =>{
//         console.log(result)
//     });
//    // console.log(`Data yangh anda cari adalah ${mahasiswa.nama}`)
// }
class Hewan {
    warna
    keahlian
    constructor(nama) {
       this.nama = nama 
    }

    set newColor(color){
        this.warna = color
    }
    
    set newSkill(skill){
        this.keahlian = skill
    }
    get detail(){
        retun `Hi saya ${this.nama}, saya berwarna ${this.warna} dan keahlian saya ${this.keahlian}`
    }
}

const kucing = new Hewan('aci')
kucing.newColor = "pink"
kucing.newSkill = "Manjat"

console.log(kucing.detail)