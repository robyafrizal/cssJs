console.log('-----------DATE-------------')
console.log(new Date())
console.log(new Date(2023, 11, 22, 11, 1, 8, 12))//Menggunakan 7 parameter
// console.log(new Date(2023, 11)) //Parameter yang empty diisi default oleh javascript
console.log(new Date(1000)) //milisecond 1 detik + 1 Januari 1970
console.log(new Date('october 20, 2019 11:09:10')) //Membuat object baru dari tanggal

//Format input tanggal JS
console.log("2019-09-20")//International standar / ISO 8601 - (YYYY-MM-DD)
console.log("2019-09-20T15:00:34Z")//Full International standar / ISO 8601 - (YYYY-MM-DDTHH:MM:ZZS)
//T adalah time sebagai pemisah, Z adalah zone UTC/GMT
console.log("03/25/2019")//Short Date
console.log("22 Mar 2019")//Long Date
console.log("Mar 222019")//Long Date

console.log('---Date Method-----')
//Secara default new Date() menggunakan format string / sama seperti hasil toString()
console.log(new Date().toDateString()) //Untuk format yg lebih simple
console.log(new Date().toUTCString()) //Untuk format string UTC (Standar Tampilan Tanggal)
console.log(new Date().toISOString()) //Untuk format standar ISO

//Bulan bisa ditulis lengkap atau disingkat
//Koma akan diabaikan. Nama juga tidak pekan huruf besar/kecil

console.log('---Date Get Method-----')
console.log(new Date().getTime()) //milidetik sejak 1 jan 1970
console.log(new Date().getFullYear()) //Tahun
console.log(new Date().getMonth()) // 0 - 11
console.log(new Date().getDate()) // 1 - 31
console.log(new Date().getDay()) // 0 - 6
console.log(Date.now()) //Get time pada ECMAScript5

//Biar muncul hari nya
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let day = days[new Date().getDay()]
console.log(day)

console.log('---Date Set Method-----')
console.log(new Date().setTime(1703256680026)) //Kebalikan dari getTIme - Hasil Masih ERROR
console.log(new Date().setFullYear(2019)) // Hasil Masih ERROR
console.log(new Date().setMonth(10)) // Hasil Masih ERROR


console.log('-----------ES6-------------')

console.log('-------Arrow Function--------')
//Fungsi Biasa
// const tambah = function(a) {
//     return a + 2
// }
// console.log(tambah(6))

//Arrow Function - memiliki 1 argumen
const tambah = a => a + 2
console.log(tambah(5))

//Arrow Function - tanpa argumen
const kurang = () => 25 - 9
console.log(kurang())

//Arrow Function - memiliki 2 argumen
const kali = (b,c) => (2 * b) + c
console.log(kali(2,5))

//Arrow Function - kompleks (lebih dari 1 baris dan menggunakan return)
const checkAge = (age) => {
    if(age >= 18) {
        return true
    }
    return false
}
console.log(checkAge(18))

console.log('-------Spread Syntax--------')
//Mempermudah untuk menyingkat/expand iterables(...)
let addNum = [4,5]
// let number = [1,2,3,addNum[0],addNum[1],6,7] // Tanpa spread syntax
let number = [1,2,3,...addNum,6,7]
console.log(number)