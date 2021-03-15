// let admin;
// let user_name;

// user_name = "Jon"

// admin = user_name;

// alert (admin);

// ........................ДОМАШКА №1

// ........................ЗАДАЧА № 1

// let number = prompt ("Number?")

// alert (number*number)

// ........................ЗАДАЧА № 2

// let user_name = prompt ("Ваше имя?")
// let many = prompt ("Сумма депозита?")
// let mounts = prompt ("Сколько месяцев?")
// let sum =mounts*30

// alert (`Шановний ${user_name}, Ви внесли ${many} грн., під 20% річних, на термін ${mounts} 
// місяців. За цей період часу Ви заробите ${Number(many)+Number(many)*0.2*sum/365} грн. `)


// ........................ЗАДАЧА № 3

// let number1 = prompt ("Number 1?")
// let number2 = prompt ("Number 2?")

// alert (Number(number1)+Number(number2))
// alert (number1-number2)
// alert (number1*number2)
// alert (number1/number2, )


// let number1 = +prompt ("Number 1?")
// let number2 = +prompt ("Number 2?")

// alert (number1+number2)
// alert (number1-number2)
// alert (number1*number2)
// alert (number1/number2, )

// let number1 = pacseInt (prompt ("Number 1?"))
// let number2 = pacseInt (prompt ("Number 2?"))


// alert (number1+number2)
// alert (number1-number2)
// alert (number1*number2)
// alert (number1/number2, )

// ........................ЗАНИТИЕ 12

// let userName = prompt ("Name?");

// console.log(typeof userName)

//....................... Задание с учебника


// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//     let pass = prompt('Пароль?', '');

//         if (pass == 'Я главный') {
//             alert( 'Здравствуйте!' );
//     } else if (pass == '' || pass == null) {
//             alert( 'Отменено' );
//     } else {
//             alert( 'Неверный пароль' );
//     }

//     } else if (userName == '' || userName == null) {
//             alert( 'Отменено' );
//     } else {
//             alert( "Я вас не знаю" );
//     }


// ....................................Домашка № 13

// ....................................Зачада №1

// let userAge = prompt ("U age?")

// if (userAge >=18 && userAge <=45) {
//     alert ("Good")
// } else {
//     alert("bad")
// }


// ....................................Зачада №2

// let a = prompt ("number a?")
// let b = prompt ("number b?")

// if((a>3 && a <12) && (b>=5 && b < 13)) {
//     alert ("good")
// } else {
//         alert("bad")
//     }

// ....................................Зачада №3

// let user_name = prompt ("Ваше имя?");
// let many = prompt ("Сумма депозита?");
// let mounts = prompt ("Сколько месяцев?");
// let sum =mounts*30;
// let proc;

// if (mounts<6) {
//     proc = 0.15 

//         alert (`Шановний ${user_name}, Ви внесли ${many} грн., під 20% річних, на термін ${mounts} 
// місяців. За цей період часу Ви заробите ${Number(many)+Number(many)*proc*sum/365} грн. `)
//     }
// else if (mounts>=6 && mounts<=9  ) {
//     proc = 0.16 
    
//         alert (`Шановний ${user_name}, Ви внесли ${many} грн., під 20% річних, на термін ${mounts} 
//     місяців. За цей період часу Ви заробите ${Number(many)+Number(many)*proc*sum/365} грн. `)
//         }  

// else if (mounts>9) {
//     proc = 0.17 
// alert (`Шановний ${user_name}, Ви внесли ${many} грн., під 20% річних, на термін ${mounts} 
// місяців. За цей період часу Ви заробите ${Number(many)+Number(many)*proc*sum/365} грн. `)
// }




//........................... занятие №14



// let currentMount = prompt ("Mounts?");

// if (currentMount == "январь" ||currentMount == "февраль"|| currentMount == "декабрь") {
//     alert ("Сейчас зима!")
// } else if (currentMount == "март" ||currentMount == "апрель"|| currentMount == "май") {
//     alert ("Сейчас весна!")
// } else if (currentMount == "июнь" ||currentMount == "июль"|| currentMount == "август") {
//     alert ("Сейчас лето!")
// } else if (currentMount == "сентябрь" ||currentMount == "октябрь"|| currentMount == "ноябрь") {
//     alert ("Сейчас осень!")
// }

// let price1 = prompt ("price1?");
// let price2 = prompt ("price2?");
// let price3 = prompt ("price3?");
// let  current= "грн";
// let sale = 20;

// let finishPrice1 = price1-(price1*sale/100);
// let finishPrice2 = price2-(price2*sale/100);
// let finishPrice3 = price3-(price3*sale/100);

// console.log(`Цена товара со скидкой ${finishPrice1} ${current}`)
// console.log(`Цена товара со скидкой ${finishPrice2} ${current}`)
// console.log(`Цена товара со скидкой ${finishPrice3} ${current}`)


// function finishPrice () {

//     let  current= "грн";
//     let sale = 20;
//     let price = prompt ("price?");
//     let discountPrice = price-(price*sale/100);

//     console.log(`Цена товара со скидкой ${discountPrice} ${current}`)
// }

// finishPrice ()
// finishPrice ()
// finishPrice ()


  // ....................................Домашка № 14

// ....................................Зачада №1

// function calcNumber () {

//     let a = prompt ("a?");
//     let b = prompt ("b?");

//     return (a<b) ? b:a 
    
// }

// console.log(calcNumber ())

// ....................................Зачада №2
               
//     function yearsUntilRetirement(year,userName) {
            
//     userName = prompt ("Укажите ваше имя");
//     let age = prompt ("Укажите год рождения");

//             function calcAge()  {

//         let year= 2021-age;

//         console.log(`u age is ${year}`) 
                    
//         let retirementAge =60;
        
//         let retirement = retirementAge-year;
        
//            if (year>=60) {
//                 alert (`${userName} вже на пенсіонер`)
//             } else {
//                 alert (`${userName} вийде на пенсію через ${retirement} років`)
//                 }
//             }
//             calcAge() 
//         }

//    yearsUntilRetirement()
    

// ....................................Зачада №3

// function sale() {

//     let sum = prompt ("Введите сумму покупок в магазине")

//     if(sum<1000) {
//         saleCost = 0.03
//     } else if (sum > 1000 && sum < 5000 ) {
//         saleCost = 0.05
//     } else if(sum > 5000 ){
//         saleCost = 0.1
//     }

//     let finishPrice = sum - (sum*saleCost)
    
//     console.log(`Ваша скидка составляет ${saleCost*100}%, a сумма покупок со скидкой ${finishPrice} грн`) 
// }

// sale()

// ....................................Зачада №4



// function calcSum() {
    
//     let price = prompt ("price?")
//     let quantity = prompt ("quantity?")

//     let price2 = prompt ("price2?")
//     let quantity2 = prompt ("quantity2?")

//     let allSum = (price*quantity) + (price2*quantity2);

//     console.log(`Общая сумма ваших покупопк - ${allSum} грн`) 
// }

// calcSum()


//........................... занятие №15

//     let  current= "грн";
//     let discount = 20;


//     function calcDiscount(productNumber) {

    
//     let productPrice = prompt (`price ${productNumber} product?`);
//     let productPriceWithDiscount = productPrice-(productPrice*discount/100)

//     console.log(`Цена ${productNumber} товара со скидкой ${productPriceWithDiscount} ${current}`)
// }

//     calcDiscount (1)
//     calcDiscount (2)
//     calcDiscount (3)

// ///////////////////////ВТОРОЕ РЕШЕНИЕ


//     let  current= "грн";
//     let discount = 20;
//     let productNumber =1;


//     function calcDiscount() {

    
//     let productPrice = prompt (`price product?`);
//     let productPriceWithDiscount = productPrice-(productPrice*discount/100)

//     console.log(`Цена ${productNumber++} товара со скидкой ${productPriceWithDiscount} ${current}`)
// }

//     calcDiscount ()
//     calcDiscount ()
//     calcDiscount ()


// function test() {
//     return 3 + 4
// }

// console.log (test())


// let userName = "Ivan";

// function calcAge (age) {
//     return 2020-age

// }

// console.log (calcAge(1990))

// function yearsUntilRetirement (year,userName) {

//     let age = calcAge(year);
//     let retirement = 60 - age;

//     if(retirement > 0) {
//         return (`${userName} выйдет на персию через ${retirement} лет`)
//     } else  {
//         return (`${userName} уже пенсионер`)
//     }
// }

// console.log (yearsUntilRetirement(1985, "Ivan"))


////////////////////// ОБЬЕКТЫ

// let obj = {

//   key:value,

// }

let user = {

  userName: "Kate",
  surname: "Kolesnikova",
  age: "17",
  phoneNumber: "87868678686"
}

user.city ="Kyiv"

user.city ="Lviv"

delete user.city

console.log(user)
console.log(user.userName)
console.log(user['userName'])