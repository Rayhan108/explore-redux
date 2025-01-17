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