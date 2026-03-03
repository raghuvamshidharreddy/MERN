const products = [
    { id: 1, name: "p1", price: 25 },
    { id: 2, name: "p2", price: 45 },
    { id: 3, name: "p3", price: 50 },
]

 let cart = []

function DisplayProducts(){
    for(let product of products){
        console.log(product)
    }
}
function Additem(id,quantity=1){
    p=products.filter((product)=> product.id===id);

    cart=[...cart,{...p[0],quantity:quantity}]
}
function DisplayCart(){
    for(let value of cart){
        console.log(value);
    }
    console.log(cart)
}
DisplayProducts();
DisplayCart()
Additem(1,1)
Additem(2)
DisplayCart()

