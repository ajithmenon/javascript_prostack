
let state = {
    product : {
        name: "iPhone 12",
        price: 120000,
        qty:1
    },
    offers : {
        onam : '20% discount'
    },
    seller:"MyG"
}

let {seller} = state                                            // got seller from state
console.log("Seller : ", seller)

let {product} = state                                           // get product from seller - an object
console.log("Product details : ", product)

let {name, qty} = product                                       // extracted name and qty from product - which is already extracted
console.log(`Product Name : ${seller} \nProduct Qty: ${qty}`)

let {onam} = state.offers                                       // extracted inner object directly in a go
console.log('Onam Offer', onam)  
