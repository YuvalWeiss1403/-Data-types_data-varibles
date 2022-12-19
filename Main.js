

function A(){
let someName = "Yuval";
console.log(someName);
someName="Weiss";
alert(someName);
}

function B(){
   let num = Math.random();
   let by3 = num*3;
   let calc = `${num}* 3 = ${by3}`; 
   console.log(calc);
}

function C(){
    const favoriteNumber = 2;
    let favoriteStringed = favoriteNumber.toString();
    console.log(favoriteStringed);
}

function D(){
    const favoriteNumber =2;
    const halfOfFavNum = favoriteNumber/2;
    let michaelsFavorite = 13;
    console.log(michaelsFavorite-favoriteNumber);
    michaelsFavorite *=26;
}

function E(){
    let numberOfChildren =5;
    let partnersName = "Alon";
    let geographicLocation ="Kfar Saba";
    let jobTitle ="CEO";
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids`);
}

function F(){
    const birthYear = 2001;
    let year=2023;
    let possibleAge1 = year -birthYear ;
    let possibleAge2 = possibleAge1--;
    console.log(`I will be either ${possibleAge1} or ${possibleAge2} in ${year}`);
}


A();
B();
C();
D();
E();
F();