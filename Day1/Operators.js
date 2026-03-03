//Arithmetic operators
let a = 10
let b = 20
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//Assignment operators
let c = 10
let d = 20
c += d
console.log(c)
c -= d
console.log(c)
c *= d
console.log(c)
c /= d
console.log(c)
c %= d
console.log(c)

//Comparison operators
let e = 10
let f = 20
e == f
console.log(e == f)
e === f
console.log(e === f)
e != f
console.log(e != f)
e !== f
console.log(e !== f)
e < f
console.log(e < f)
e <= f
console.log(e <= f)
e > f
console.log(e > f)
e >= f
console.log(e >= f)

//Logical operators
let g = 10
let h = 20
g && h
console.log(g && h)
g || h
console.log(g || h)
!g
console.log(!g)

//Bitwise operators
let i = 10
let j = 20
i & j
console.log(i & j)
i | j
console.log(i | j)
i ^ j
console.log(i ^ j)
i << j
console.log(i << j)
i >> j
console.log(i >> j)
i >>> j
console.log(i >>> j)

//Ternary operator
let k = 10
let l = 20
k > l ? k : l
console.log(k > l ? k : l)

//Unary operators
let m = 10
m++
console.log(m++)
m--
console.log(m--)
++m
console.log(++m)
--m
console.log(--m)

//Typeof operator
let n = 10
console.log(typeof n)
let o = "Hello"
console.log(typeof o)
let p = true
console.log(typeof p)
let q = null
console.log(typeof q)
let r = undefined
console.log(typeof r)
let s = Symbol("Hello")
console.log(typeof s)
let t = BigInt(1234567890123456789012345678901234567890)
console.log(typeof t)
let u = { name: "John", age: 20 }
console.log(typeof u)
let v = [1, 2, 3, 4, 5]
console.log(typeof v)
let w = function () {
    console.log("Hello")
}
console.log(typeof w)

//Delete operator
let x = { name: "John", age: 20 }
delete x.name
console.log(x)

//void operator
let y = 10
void y
console.log(void y)

//typeof operator
let z = 10
console.log(typeof z)

