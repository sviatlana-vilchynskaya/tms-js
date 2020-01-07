/*ЗАДАНИЕ №1------------------------------------------------------------------------------------------------------------------
Объявите три переменные: manager, name, currentUser.
    Запишите строку "Вася" в переменную name.
    Скопируйте значение из переменной name в manager.
    Скопируйте значение из переменной manager в currentUser.
    Выведите в консоль значение переменной currentUser.
const nameUser='Вася';
const manager = nameUser;
const currentUser= manager;
console.log(currentUser); //ответ: Вася*/

/*ЗАДАНИЕ №2----------------------------------------------------------------------------------------------------------------
(Без запуска на компьютере определить что выведется в консоль. Потом проверить, запустив на компьютере и разобраться почему так. )

let name = "Вася";
console.log( `hello ${1}` );   //hello 1 ( в фигурных скобках числовое значение 1, его и выведет)
console.log( `hello ${"name"}` );  //hello name (name  взято в ковычки, поэтому и выведется name)
console.log( `hello ${name}` );  //hello Вася  (name без ковычек, значит выведется значение этой переменной, в данном варианте 'Вася')

console.log(" \n \n" - 2); //-2 в кавычках значение будет 0, 0-2=-2
console.log(true + false);  //Ответ: 1 Если значение не логического типа – то оно к нему приводится в целях вычислений. Например, число 1 будет воспринято как true, а 0 – как false:
console.log(false + false); //Ответ: 0 Так как значение false=0
console.log(6 / "3"); //Ответ: 2
console.log("2" * "3"); // 6
console.log(7 / 0); // Infinity Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.Мы можем получить его в результате деления на ноль:
console.log(4 + 5 + "px"); //9px
console.log("" + 3 + 0); //30 преобразование в строку.
console.log("" - 4 + 0); //-4
console.log("!" + 2 + 5); //!25
console.log("1" - 2); //-1
console.log("3px" - 2); //NaN
console.log("  -9  " + 5);  //  -9  5
console.log("  -9  " - 5);  //-14
console.log(null + 1); //1
console.log(undefined + 1);//NaN

/*ЗАДАНИЕ №4------------------------------------------------------------------------------------------------------------
(/* Без запуска на компьютере определить что выведется. Потом проверить, запустив на компьютере и разобраться почему так. )

console.log(2 > 4); //false
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(false == 0); //true
console.log(false == ""); //true
console.log(false === ""); //false

/*Задание №5------------------------------------------------------------------------------------------------------------
Создать объект animal с двумя свойствами, первое свойство будет тип животного со значением dog, второе свойство вес со значением 40
Добавить два свойства цвет и скорость с любыми значениями
удалить свойство вес
Изменить значение свойства цвет
Вывести в консоль полученый объект

const animal = {
    type: 'dog',
    weight: 40,
};
     animal.color='white';
     animal.speed=60;
     delete animal.weight;
     animal.color='black';

console.log(animal);  //{type: "dog", color: "black", speed: 60}*/


/*Задание № 2*/

const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40,
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54,
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24,
    },
];
function showResult(lastName) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].lastName.toLocaleLowerCase() === lastName) {
            return data[i];
        }

    }
    return 'No results found for your request';
}

let result = showResult('pitt');
console.log(result);

const input = document.getElementById('lastNameInput');
input.addEventListener("keyup", function (event) {
        let result = showResult(event.target.value);
        if (typeof (result) === 'object') {
            let html = '';
            for (let key in result) {
                html += key +': '+ result[key]+ '<br>' ;
            }
            document.getElementById('showResultInput').innerHTML = html;
        } else {
            document.getElementById('showResultInput').innerHTML = result;
        }
    }
);
