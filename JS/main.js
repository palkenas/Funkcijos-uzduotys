// pirma uzduotis
console.log("----------pirma uzduotis-----------");

function string1(string) {
    document.getElementById("task1").innerHTML = "<h1>" + string + "</h1>";
    return string;
}

string1("Labas");

// antra uzduotis
console.log("----------antra uzduotis-----------");

// Parašykite funkciją su dviem argumentais, pirmas 
// argumentas tekstas, įterpiamas į h tagą, o antrasis tago 
// numeris(1 - 6).
// Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

function NumberString(string2, number) {
    document.getElementById("task2").innerHTML = "<h1>" + string2 + " " + number + "</h1>";
    return 
}
NumberString("Labas rytas", 1);

// Trečia uzduotis
console.log("----------trecia uzduotis-----------");

// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių.
// Visus skaitmenis stringe įdėkite į h1 tagą.
// Raides palikite.
// Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti 
// kartu(h1 atsidaro prieš pirmą ir užsidaro po paskutinio) 
// Keitimui naudokite pirmo patobulintą(jeigu reikia) uždavinio funkciją.

function randomCharacter(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


function task03() {
    let taskas3 = document.getElementById("task3");
    let str = randomCharacter(20);
    console.log(str);
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            temp += str[i];
        } else {
            if (temp != "") {
                console.log("[" + temp + "]");
                taskas3.innerHTML += "<h1>" + "[" + temp + "]" + "</h1>";
                temp = "";
        }
    }
}
return
}
task03();

// Ketvirta uzduotis
console.log("----------ketvirta uzduotis-----------");

// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių 
// jos argumentas dalijasi be liekanos(išskyrus vienetą ir patį save).

function task4(number4) {
    let count = 0;
    for (let i = 2; i < (number4/2); i++) {  
        if (number4 % i == 0) {
            count++;
        }
    }
    return count;
}
document.getElementById("task4").innerHTML = task4(463);

// pasiklausti kodel is 2 reikia dalinti

// Penkta uzduotis
console.log("----------penkta uzduotis-----------");

// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai 
// nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo 
// tvarka, panaudodami ketvirto uždavinio funkciją.

function task5() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        let x = (Math.round(Math.random() * (44)) + 33);
        arr[i] = x;   
    }
    console.log(arr);
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        let dalikliukiekis = task4(arr[i]);
        arr1[i] = dalikliukiekis;
    }
    console.log(arr1);
    // kodel reikia nauja cikla cikle pasileisti?
    for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < arr.length; a++) {

            if (arr1[i] < arr1[a]) {
                let temp = arr[i];
                arr[i] = arr[a];
                arr[a] = temp;

                let temp1 = arr1[i];
                arr1[i] = arr1[a];
                arr1[a] = temp1;
            }     
        }
        console.log(arr1); 
    }

    return arr
}
document.getElementById("task5").innerHTML = task5();
console.log(task5());

// sesta uzduotis
console.log("----------sesta uzduotis-----------");

// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai 
// nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius 
// skaičius.

function task6() {
    let arr1 = [];
    for (let i = 0; i < 100; i++) {
        let x = (Math.round(Math.random() * (444)) + 333);
        arr1[i] = x;
    }
    arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (task4(arr1[i]) !== 0) {
            arr2[i] = arr1[i];
        }
    }
    return arr2;
}
document.getElementById("task6").innerHTML = task6();
console.log(task6());

// SEPTINTA UZDUOTIS

console.log("----------septinta uzduotis-----------");

// Sugeneruokite atsitiktinio(nuo 10 iki 20) ilgio masyvą, kurio visi, 
// išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
// o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip 
// ir pirmasis masyvas.Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų.
// Paskutinio masyvo paskutinis elementas yra lygus 0;
