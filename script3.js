const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.querySelector("body");

const changeColor1 = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

color1.addEventListener("input", changeColor1);

const changeColor2 = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

color2.addEventListener("input", changeColor2);


const input = document.querySelector("#input1");
const button = document.querySelector("#button");
const ul = document.querySelector("ul");

function enterBtn(){
    if(input.value.length >0){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);  
        input.value = "";
    }
}
button.addEventListener('click', enterBtn);


function enterKey(event){
    if (input.value.length > 0 && event.keyCode === 13 ){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);  
        input.value = "";   
    }
}

input.addEventListener("keypress", enterKey);

const checker = (bool) => {
    return bool;
}

const answer = checker(false)? "login":"please register";

const movements = (direction) => {
    let whatHappensNext;
    switch(direction){
        case("forward"):
            whatHappensNext= "you encounter a dragon";
            break;
        case("backward"):
            whatHappensNext = "you encounter a rhino";
            break;
        case("right"):
        whatHappensNext ="heavem at last";
        break;
        case("left"):
        whatHappensNext = "i'm just so sick of beign human";
        break;
        default:
            whatHappensNext= "please select a direction"
    }
    return whatHappensNext;
}

const obj = {
    player: "jinjun hu",
    skils: "kicking",
    strong: "true"
}

// const {player, skils,} = obj;
// console.log(player);
// console.log(skils);

// let {strong} = obj;
// strong = false;
// console.log(strong)

// let surName = "mighty conqueror";

// const object = {
//     [surName]: "say hello",
//     ["suleiman" + "aboki"]: "chap rice",
//     [22+3]: "name of the bar tender",
// };

// function greeting(name="", age = 18, pet = "tiger"){
//     return `hello there ${name}, i can see that you are ${age} old, what a lovely ${pet} you have`;
// }

// greeting("martins, 23, goat");

// closures 

// const run = (name='kalista') => {
//     var Hello = `hello there ${name}`;
//     const sayHello = () => {
//         alert(Hello);
//     }
//     return sayHello;
// }

// const newFunction = run();

// newFunction();


// currying

// const calculate = (a) => (b) => a * b;
// const multiplyBy2 = calculate(2);
// multiplyBy2(5)

// compose

// let compose = (f,g) => (a) => f(g(a));
// let sum = (num) => num + 12;

// compose(sum, sum)(25) 

// const array = [1,2,3,4,5,6,7,8,9,10];
// const multiply = [];
// const newArray = array.forEach((num) => {
//     multiply.push(num*20)
// });

// console.log(multiply);

// const map = array.map((num) => {
//     return num*15;
// })

// console.log(map)

// const filter = map.filter((num) => {
//     return num> 80
// });

// console.table(filter)

// //reduce 

// const reduceArray = filter.reduce((acc, num) => {
//     return acc+num
// }, 2)

// console.log("reduce", reduceArray)


class player{
    constructor(name, type) {
        console.log(this)
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`hello my name is ${this.name}, and i am a ${this.type}`);
    }
};

class wizard extends player {
    constructor(name, type){
        super(name, type);
        console.log(this)
    }
    play(){
        console.log(`yo!!! i am a ${this.type}`);
    }
}

const wizard1 = new wizard("cream", "fire-bender")