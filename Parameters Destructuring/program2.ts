type  Product = {
    id: number,
    name: string,
    price: number
};

function showProduct({id,name,price}: Product){
    console.log(`Product: ${id}, Product name: ${name}, having price of ${price} Rs.`);
}

showProduct({id:1,name:"Biryani",price:300})