//Destructuring object -- using const {} : objectname

const course= {
    cname :" js",
    price :"990",
    instuctor : "hitesh"
}

const{cname : cn ,price: p } = course  // providing another name for element in object

console.log(p)

