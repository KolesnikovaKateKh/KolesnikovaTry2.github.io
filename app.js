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


function finishPrice () {

    let  current= "грн";
    let sale = 20;
    let price = prompt ("price?");
    let discountPrice = price-(price*sale/100);

    console.log(`Цена товара со скидкой ${discountPrice} ${current}`)
}

finishPrice ()
finishPrice ()
finishPrice ()