//First we will go with the Filter method

const ItemsList = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 200 },
    { name: "Keyboard", price: 50 }
]

const itemnames = ItemsList.filter((item) => {
    return item.price < 200
})

console.log(itemnames);


//then we will go with the map method


const items = [
    {name :'kiran',marks : 23},
    {name : 'rakesh' , marks : 45},
    {name : 'Suresh', marks : 56},
    {name : 'ramesh', marks : 78}
] 

const markers = items.map((ite) => {
    return ite.marks < 35
})

console.log(markers);
