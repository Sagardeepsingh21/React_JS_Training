var number=[33,11,54,77,10]
number.forEach(function(num){
    console.log(num)
})

var num=[23,56,78,90,34]
num.forEach(num=>console.log(num))

var arr=[2,4,6,8,10]
var newarr=arr.map(function(n){
    return(n+2)
})
console.log(arr)
console.log(newarr)   

var arr=[2,4,6,8,10]
var newarr=arr.map(n=>n+2)
console.log(arr) 

const productList=[
    {product:"product1",price:79},
    {product:"product1",price:99},
    {product:"product1",price:199},
    {product:"product1",price:49},
    {product:"product1",price:149},

]

const newproducts=productList.filter(item=>item.price<100)
console.log(newproducts)