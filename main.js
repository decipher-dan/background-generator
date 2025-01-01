//destructuring
const surname = "daniel goje"
const object = {
    [surname]: "yo yo yo ",
    ["bros " + "kii"]: "mashallah fam",
    [22+30]: "investor kind of vibe",
    Name: "shedrach",
    age: 24,
    male: true,
};

const {name, age, male} = object;

console.log(Name)

// functions

const drink = (name="", type="soft-drink", brand="coke", amount= 450) => `hello ${name}, you are taking ${type} of the brand ${brand}, and roughly cost about ${amount}`;

// closure

const singOut = () =>{
    const sing = "ahhhh ehhhh ehhhh ahhhhh";
    const singIt = () => {
        alert(sing);
    }
    return singIt;
}

const newFunc = singOut();

newFunc()

// currying

const currying = (a) => (b) =>{
    return a*b
}
const multiplyBy2 = currying(2)
multiplyBy2(15);

//compose

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num+12;

compose(sum, sum)(13);

//advanced array
//=========================
// forEach
const array = [1,2,3,4,5,6,7,8,9,10];
const save = [];
const newArray = array.forEach((num) => {
    save.push(num*2);
})
console.log("forEach", save);
// map
const mapArray = array.map((num) => {
    return num*2;
})
console.log("map", mapArray)

// Filter array
 const filterArray = array.filter((num) => {
    return num>=10;
 });
 console.log("filter", filterArray);

//  reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator+num
}, 13);

console.log("reduce",reduceArray)

// instantiation

class player{
    constructor(name, type){
        console.log(this)
        this.name = name;
        this.type = type;
    };
    introduction(){
        console.log(`my name is ${this.name} and i am a ${this.type}`);
    };
};

class wizard extends player {
    constructor(name, type){
        super(name, type)
        console.log(this)
    };
    play(){
        console.log(`i am a ${this.type}`)
    };
};

class footballer extends player {
    constructor(name, type){
        super(name, type);
        console.log(this)
    };
    play(){
        console.log(`i am a ${this.type}`);
    };
};

wizard1 = new wizard("ishmael", "wizard");
footballer1 = new footballer("modric", "footballer");


const obj = {
    a: "a",
    b: "b",
    c: {deep: "deeeper"}
}

const clone = {...obj}

const clone1 = JSON.parse(JSON.stringify(obj));

obj.c.deep = "rapsody"

console.log(obj)
console.log(clone)
console.log(clone1)