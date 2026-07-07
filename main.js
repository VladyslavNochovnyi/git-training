
function sumEven(nums){
    return nums.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0)
}

const b = sumEven([1, 2, 3, 4, 5, 6]);
console.log(b);


const fn = (items) => items.filter(num => num > 10).reduce((acc, num) => 
    {return num > acc? acc + 1:acc}, 0);
console.log(fn([2, 13, 4, 15]));

console.log(((arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
})([1,2,3]))


const data = [
  ["price1", 100],
  ["price2", 200],
  ["price3", 50]
];
const dataInfo = Object.fromEntries(data.map(([key, value]) => ([key, value * 2])));

console.log(dataInfo);

const user = {
  name: "Tom",
  age: 37,
  salary: 500
};

const personData = Object.entries(user);

const newPersonData = Object.fromEntries(personData.filter(([key, value]) => value > 100));
console.log(newPersonData);

console.log(cart.showCount());


const phone = {
    brand: "Apple",
    model: "iPhone 12",
    owner: {
        name: "Bob",
        age: 23
    },
    apps: ["Telegram", "YouTube", "Spotify"],

    showInfo(){
        console.log(`Brand: ${this.brand}`);
        console.log(`Brand: ${this.model}`);

        for(app of this.apps){
            console.log(`App: ${app}`)
        }
    }

}
phone.showInfo()

const users = [
    { name: "Bob", age: 17 },
    { name: "Tom", age: 22 },
    { name: "Alice", age: 15 },
    { name: "John", age: 30 }
];


function getAdults(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].age >= 18){
            result.push(arr[i].name);
        }
    }
    return result;
}

console.log(getAdults(users));

const orders = [
  { id: 1, customer: 'Anna', total: 250, status: 'completed' },
  { id: 2, customer: 'Oleh', total: 80, status: 'pending' },
  { id: 3, customer: 'Marta', total: 420, status: 'completed' },
  { id: 4, customer: 'Ivan', total: 150, status: 'cancelled' },
  { id: 5, customer: 'Sofia', total: 600, status: 'completed' }
];

const getCompletedOrderSummaries = (orders) => {
    return orders.filter(order => order.status == "completed" && order.total >= 300).map(order => `Customer: ${order.customer}, Total: ${order.total}`);
}
console.log(getCompletedOrderSummaries(orders))

const person = {
    name: "Alice",
    age: 21,
    city: "Lviv",
    getInfo(){
        return (`${this.name} is ${this.age} and she lives in ${this.city}.`)
    },
    celebrateBirthday(){
        return this.age+=1;
        
}
}
console.log(person.getInfo());
console.log(person.celebrateBirthday());
console.log(person.getInfo());

function getPriceLabel(prefix, currency){
    return `${prefix}: ${this.title} costs ${this.price} ${currency}`
}

const product = {
    title: "MacBook",
    price: 300,
}

console.log(getPriceLabel.call(product, "Product" , "$"))