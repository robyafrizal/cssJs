console.log('------------Object-----------')

let nama = 'Roby Afrizal';
const kita = new Array();
// const kita = {};
const family = {
    pipi: 'Roby',
    mimi: 'Dian'
};
family.ayuk = 'Aluna';
family.adek = 'Arjuna';
// delete family.adek; - Menghapus property object

//For in pengulangan khusus object
for (const property in family) {
    kita.push(property, family[property])
};
console.log(`Nama saya adalah ${nama}, Keluarga saya adalah ${kita}`);

// function newUser(name, age){
//     return {
//         nama:name,
//         umur:age,
//     };
// }
// let user = newUser('Atin', 33);
// console.log(`${user.nama} adalah baby sister berumur ${user.umur}`)

//Atau bisa juga disingkat jika parameter = key object
function newUser(name, age){
    return {
        name,
        age,
    };
}
let users = newUser('Atin', 33);
console.log(`${users.name} adalah baby sister berumur ${users.age}`)

console.log('----------------------')

// Comparison & Logical Operator
let hour = 11;
let isWeekend = false;
// if (hour <= 9 || hour >=22 || isWeekend) {
//     alert('The office is closed')
// }
// else {
//     console.log('The office is opened')
// }

//CONDITIONAL OPERATOR
// let result = consition ? value1 : value2
let result = (hour <= 9 || hour >=22 || isWeekend) ? alert('The office is closed') : console.log('The office is opened')

//Nested if else
let number = 0;
number >= 0 ? (number == 0 ? console.log('You enter number 0') : console.log('You enter positive number')) : console.log('You enter negative number');

//Truthy and Falsy
console.log(1 && 0) //falsy
console.log(1 && 5) //ambil yg tertinggi

if(0) {
    console.log('Ini Truthy Value')
}
console.log('Ini Falsy Value')

console.log('------------------------')

//Penyingkatan operator pengecekan Null(??)
// let hari; 
let a = 'Senin';
let b = 'Libur';
console.log(a ?? b); 
//Kalau ada nilai diambil nilai variabel
//Kalau tidak ada diambil nilai libur

 //Check undefined and null
// result = (a !== null && a !== undefined) ? a : b;

//Cek Property ada /tidak dengan with in
let data = {}
console.log(data.noProperty === undefined) //true

const siswa = {
    cow: 'Roby',
    cew: 'Dian'
};
let key = 'cew'
console.log(key in siswa)

for (let k in siswa) {
    console.log(k);
    console.log(siswa[k]);
}

console.log('-----------SWITCH CASE-------------')
let bulan = new Date().getMonth();
switch(bulan) {
    case 1:
        console.log('Sekarang Bulan Januari');
        break;
    case 2:
        console.log('Sekarang Bulan Februari');
        break;
    case 3:
        console.log('Sekarang Bulan Maret');
        break;
    case 4:
        console.log('Sekarang Bulan April');
        break;
    case 5:
        console.log('Sekarang Bulan Mei');
        break;
    case 6:
        console.log('Sekarang Bulan Juni');
        break;
    case 7:
        console.log('Sekarang Bulan Juli');
        break;
    case 8:
        console.log('Sekarang Bulan Agustus');
        break;
    case 9:
        console.log('Sekarang Bulan September');
        break;
    case 10:
        console.log('Sekarang Bulan Oktober');
        break;
    case 11:
        console.log('Sekarang Bulan November');
        break;
    default:
        console.log('Sekarang Bulan Desember');
            
}

//Shorthand agar tidak terjadi pengulangangan penulisan code
 switch(new Date().getDay){
    case 6:
    case 0:
        console.log('This is weekend');
        break;
    default:
        console.log('This is weekday, time to work');
 }

console.log('------------LOOPING------------')
// Formula For : for(initialExpression; condition; updateExpression) {statement}

// const n = 5;
// for(let i = 1; i <= n; i++){
//     console.log(`I Love Javascrpt - ${i}`);
// }


//Formula While
// initialExpression
// while(condition) {
//     statement
//     updateExpression
// }

//Formula Do While
// initialExpression
// do {
//     statement
//     updateExpression
// } while(condition)

// const n = 5;
// let i = 1;
// while(i<=n) {
//     console.log(`I Love Javascrpt - ${i}`);
//     i++;
// }

const n = 5;
let i = 6;
do {
    console.log(`I Love Javascrpt - ${i}`);
    i++;
} while(i<=n)
console.log('-------------')

// while(i!=0) bisa disingkat dengan while(i) yg hasilnya adalah Boolean true/false
// let j = 5;
// while(j){
//     console.log(j)
//     j--
// }

let j = 5;
do{
    console.log(j)
    j--
}while(j)

console.log('-------------')

let hasil = 0;
let angka = 0
do{
    angka++
    hasil += i
} while(angka<5)
console.log(hasil)

console.log('-------------')

//Continue Statement

//Cek bilangan genap akan jadi bilangan ganjil jika ditambahkan continue
for(let i = 0; i<10;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
for(let i = 0; i<10;i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}

console.log('-------------')
//For of bisa untuk pengulangan semua tipe data
const numbers = new Array(54, [21, 26], 3, 80, 43)
for(number of numbers) console.log(number)

const hurufs = 'Roby Afrizal'
for(huruf of hurufs) console.log(huruf)

const keyVals = new Map([['Roby', 1],['Dian', 2],['Aluna', 3],['Arjuna', 4]])
for([key,value] of keyVals) console.log(`Nama - ${key} dengan urutan KK ke ${value}`)

console.log('------------Function------------')
function sapa(nama = 'Aluna', apa = 'Selamat Pagi') {
    console.log(`Hello ${nama} : ${apa}`);
}
function tes(nm, ad) {
    sapa(nm, ad);
}
tes('Dian', 'Ada apa?')
tes()
console.log('-------------')

function checkAge(age) {
    if(age>=18) {
        return true;
    } 
    return false;
}

let age = 80
if(checkAge(age)) {
    console.log('Silahkan Masuk')
}else {
    console.log('Belum cukup umur')
}

function showJob(age) {
    if(!checkAge(age)) {
        return;
    }
    console.log('Ini daftar pekerjaan buat kamu')
}
showJob(age)

console.log('---------------------DOM HTML------------')

// let url = window.document.URL
let url = document.URL
console.log(url)

const el = document.getElementById('intro');
console.log(el.innerHTML);
console.log(el);
document.getElementById('demo').innerHTML = 'Ini Masuk menggunakan DOM - ' + el.innerHTML

const ele = document.getElementsByClassName('intro1');
console.log(ele);
document.getElementsByClassName('demo1')[1].innerHTML = 'Pake teknik Pomodoro - ' + ele[0].innerHTML

const ele1 = document.getElementsByTagName('p')
document.getElementsByTagName('p')[3].innerHTML = 'Masuk menggunakan DOM Tag Name - ' + ele1[0].innerHTML

const ele2 = document.querySelectorAll('div.wrapper > p')
document.querySelectorAll('div.wrapper > p')[3].innerHTML = 'Masuk menggunakan DOM Query Selector All - ' + ele2[4].innerHTML