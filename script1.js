console.log('---------------STRING--------------')

let hai = '    Assalamualaikum'
let say = 'Hello semua, mari mari kita shalat jum\'at '
console.log(say)
console.log(say.length)

//String Method For Extract
//slice(start, end)
console.log(say.slice(1,5))
console.log(say.slice(-6,-1))
console.log(say.slice(-14)) //Jika TIdak ada parameter kedua, akan mengambil semua sisa string

//substring(start, end)
console.log(say.substring(6,10)) //Tidak bisa menggunakan parameter -

//substr(start, length)
console.log(say.substr(13,4)) //Sudah terdepreciacy

//Replace(awal, akhir) - menggantikan nilai
console.log(say.replace('jum\'at', 'ashar'))

//Dengan REGEX, tidak peduli huruf besar/kecil menggunakn tanda /i (tidak peka/case insensitive)
console.log(say.replace(/JUm\'AT/i, 'Dzuhur'))

//Dengan REGEX, mengambil semua kecocokan menggunakn tanda /g (pencocokan global)
console.log(say.replace(/mari/g, 'ayo')) //Tapi kata menjadi case sensitive
console.log(say.replace(/mAri/i, 'ayo')) //Kata menjadi case insensitive dan cuma kata 1 yang diganti

//Uppercase & Lowercase
console.log(say.toUpperCase())


//Concat - Gabung kata
let gabung = (hai.concat(' - ',say))
console.log(gabung)

//Trim - menghilangkan spasi putih
console.log(hai.trim())

//IndexOf & lastIndexOf  - mengembalikan indeks kemunculan
console.log(say.indexOf('mau')) //Mengembalikan -1 apabila indeks tidak ada
console.log(say.indexOf('mari')) //indeks pertama ditemukan
console.log(say.lastIndexOf('mari')) //Indeks terakhir ditemukan

//Search hampir sama dengan indexof
console.log(say.search('mari')) //hanya untuk indeks pertama saja
//Includes mengembalikan boolean true/false jika nilai ditemukan
console.log(say.includes('shalat')) //hanya untuk indeks pertama saja

//StartsWith mengembalikan boolean true/false jika string dimulai dengan nilai yang ditentukan
console.log(say.startsWith('Hello')) //nilai bersifat case sensitive


console.log('---------------NUMBER--------------')
let angka = 123e5 //Sama dengan 12300000
let angka1 = 123e-5 //Sama dengan 0,00123
let angka2 = 999999999999999 //Number akurat sampai 15 digit
console.log(angka1)
console.log(angka2)

let angka3 = 0.2 + 0.1 
console.log(angka3) //hasilnya 0.30000000000000004
let angka4 = ((0.2 * 10) + (0.1  * 10)) / 10
console.log(angka4) //hasilnya 0.30000000000000004

//operator + akan menjadi concatenate di string dan number
let str = '100'
let num = 30
console.log(str + num) //sedangkan di operator - * / bisa

console.log('------------')
//Number Mehod
num.toString() // Mengubah number jadi string
angka2.toExponential(5)
// console.log(angka2.toExponential(5))

//toFixed
let angka5 = 3.3443
console.log(angka5.toFixed(2))//Pembulatan sesuai parameter dibelakang koma
console.log(angka5.toFixed())//Jika tidak ada parameter, pembulatan ke yang terdekat

//toPrecicion - hampir sama dg toFIxed
console.log(angka5.toPrecision(2))//Hanya 2 angka yg diambil
console.log(angka5.toPrecision())//Jika tidak ada parameter, nilai sesuai yg ada

console.log('------Math Method------')
console.log(Math.round(angka5)) //Mengembalikan bilangan bulat terdekat
console.log(Math.ceil(angka5)) //Pembulatankeatas
console.log(Math.floor(angka5)) //Pembulatan kebawah
console.log(Math.trunc(angka5)) //Hanya mengembalikan bilangan integer, dibelakang koma tidak
console.log(Math.pow(4,3)) //Nilai pangkat
console.log(Math.sqrt(4)) //Nilai kuadrat

console.log(Math.max(4, 7, 23,55,32, 8)) //Nilai Tertinggi
console.log(Math.min(4, 7, 23,55,32, 8)) //Nilai Tertinggi
console.log(Math.random()) //Nilai Acak 0 - 1
console.log(Math.floor(Math.random() * 10)) //Nilai Acak 0 - 9


console.log('---------------Array--------------')

const family = ['Roby', 'Dian', 'Aluna', 'Arjuna', 'Afrizal', 'Palmendha']
console.log(family.toString()) //Convert to string
console.log(family.join('-')) //Sama seperti tostring,bebas menentukan tanda hubung

console.log(family.pop()) //Elemen terakhir yg terhapus
console.log(family.push('Puspita')) //Mengembalikan panjang array setelah penghapusan
console.log(family)

console.log(family.shift()) //Elemen awal yg terhapus
console.log(family.unshift('Sari')) //Mengembalikan panjang array terbaru setelah penambahan
console.log(family)

console.log(family[0] = 'Pipi Roby') //Mengembalikan elemen yang baru ditambah diawal
console.log(family[family.length-1] = 'Andriani') //Mengembalikan elemen yang baru ditambah sebelum diakhir
console.log(family[family.length] = 'Andrian') //Mengembalikan elemen yang baru ditambah diakhir
console.log(family[family.length +1] = 'palmendha') //Mengembalikan elemen yang baru ditambah diakhir, elemen kosong yg terlewat akan meninggalkan nilai empty
console.log(family)

const umur = [38, 38, 1, 1]
const total = family.concat(umur) // Concat akan membuat array baru dg menggabungkan 2 array yg ada
console.log(total) 
delete total[8] //Menghapus elemen tetapi akan meninggalkan nilai empty
console.log(total) 

//Method Splice() - menambahkan item baru ke array
//parameter1 - dimana elemen ditambahkan
//parameter2 - berapa banyak elemen dihapus
//parameter3 - elemen awal
//parameter4 - elemen akhir
total.splice(7,2,'saya') //Tidak meninggalkan nilai empty
total.splice(1,0,'Mimi Dian','Ayuk Luna')
console.log(total)

//Method Slicing
//parameter1 - dimana elemen mulai di slicing
//parameter2 - dimana elemen selesai di slicing
console.log(total.slice(3,7))

//Method Sort & Reverse
const buah = ['Mangga', 'Alpukat', 'Salak', 'Belimbing','Semangka', 'Melon']
const hitung = [3,5,12,20,8,43,92,19,5,,134]
console.log(buah.sort().reverse())
console.log(hitung.sort()) //Sort pada numerik sering salah

//Makanya di numerik digunakan fungsi COMPARE
console.log(hitung.sort(function(a,b){return a-b})) //ascending
console.log(hitung.sort(function(a,b){return b-a})) //descending

//FUngsi COMPARE juga bisa untuk object
const cars = [
    {merk: 'Toyota', tahun:2013},
    {merk: 'Honda', tahun:2015},
    {merk: 'Suzuki', tahun:2023},
    {merk: 'Mitsubishi', tahun:2010},
]
console.log(cars.sort(function(a,b){return b.tahun - a.tahun}))

console.log('---------------Iteration Array--------------')
//ForEach menerima 3 parameter & tidak membuat array baru
let isi = ''
hitung.forEach(myFunction)
function myFunction(value, index, array) {
    // console.log(value,index, array)
    console.log(isi = value *2)
}

//Map menerima 3 parameter & membuat array baru
const isi1 = hitung.map(myFunction1) 
function myFunction1(value, index, array) {
    return value * 3
}
console.log(isi1)

//Filter menerima 3 parameter & membuat array baru dengan elemen yg lolos pengujian
const isi2 = hitung.filter(myFunction2) 
function myFunction2(value, index, array) {
    return value > 40
}
console.log(isi2)

//Every & Some menerima 3 parameter, mengembalikan boolean True jika kondisi memenuhi/sebaliknya
const isi3 = hitung.every(myFunction3) //Cek semua nilai elemen yg lolos kualifikasi
const isi4 = hitung.some(myFunction3) //Cek beberapa nilai elemen yg lolos kualifikasi
function myFunction3(value, index, array) {
    return value > 40
}
console.log(isi3)
console.log(isi4)

//IndexOf & lastIndexOf  - mengembalikan indeks kemunculan
console.log(family.indexOf('Alena')) //Mengembalikan -1 apabila indeks tidak ada
console.log(family.indexOf('Aluna')) //indeks pertama ditemukan

//Find menerima 3 parameter & mengembalikan elemen pertama yg lolos pengujian
const isi5 = hitung.find(myFunction4) 
function myFunction4(value, index, array) {
    return value > 40
}
console.log(isi5)


console.log('---------------REGEX--------------')
//Regex atau pola dalam pencarian
//Syntax : (/POLA ATAU PATTERN/MODIFIERS ATAU MODIFIKASI PENCARIAN)
let kata = 'Selamat belajar semua, semangat ya jangan patah lagi'
// console.log(kata.search('SemUA')) // Mengembalikan -1 jika tidak menemukan kata sesuai
// console.log(kata.search(/SemUA/i)) //ekspresi reguler untuk pencarian case-insensitive
console.log(kata.match(/SemUA/i)) //ekspresi reguler untuk pencarian case-insensitive
let result = kata.match(/el/g)
console.log(result)

let text = '\nIs th \nis it is?'
let hasil = text.match(/is/m)
console.log(text)
console.log(hasil)

//Modifier : i- mencari yg case-insensitive juga, g- mencari semua kata yg cocok bukan hanya yang pertama kaliditemukan, m-mencari hanya baris tulisan yg cocok
//Pattern : between bracket - [abc[a-zA-Z]]0-9],(x|y)

//Testing Regex dg test(), mengembalikan boolean
const pattern = /at/;
// const pattern = /atas/;
console.log(pattern.test(kata));
