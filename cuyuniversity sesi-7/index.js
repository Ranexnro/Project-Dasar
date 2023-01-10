const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = 'localhost'
const port = 3002

//request adalah = data masuk dari luar
//response adalah = data keluar dari sistem

const server = http.createServer(function (request, response){
const nama = "KEVIN FAIRUZ";
let uang = 500000;
let jajan = 150000;
let sisa = uang - jajan;

uang = rupiah.convert(uang)
jajan = rupiah.convert(jajan)
sisa = rupiah.convert(sisa)

fs.appendFile('sisauang.txt', sisa, () =>{
    console.log('berhasil disimpan')
})

const sisaRAM = os.freemem();

const hasil = `saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}.`
const Sisa  =`Sisa RAM PC saya: ${sisaRAM}`

console.log('sisa ram saya  :',Sisa)
response.statusCode = 203
response.end(hasil);

});

server.listen(port,host, function (){
    console.log(`server menyala di ${host}:${port}` );
});
