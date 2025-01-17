import { produce } from "immer"

const employee = {
    name:"Mir",
    adress:{country:"Bangladesh",city:"Dhaka"}
}
const employee2 = produce(employee,(draft)=>{
    draft.name = "Rayhan",
    draft.adress.city="Jamalpur"
})

console.log(employee,employee2);

//normal function

// const totalPrice = (amount,discount)=>amount - amount*discount;

//function currying
//ex-1
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(10)(20)(40));
// ex-2 :discount
const totalPrice =(discount)=>(amount)=>amount-amount*discount;
const withDiscount = totalPrice(0.3);

console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(300));