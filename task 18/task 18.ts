let a:string[] = ["London","Turkey","Dubai","Egypt","Japan","Germany"]

console.log(a)

let b = a.sort()
console.log(b) //array in alpbabetic order

console.log(a)

let b1 = a.reverse()
console.log(b1) //array a in reverse order

let c = b.reverse()
console.log(c)
console.log(a) //array b in reverse order

let d = c.reverse()
console.log(d)
console.log(a) //array c in reverse ordered

let e = d.reverse()
console.log(e) //array d in reverse order

console.log(a)

let c1 = e.sort()
console.log(c1) // array e is sort

let d1 = c1.reverse()
console.log(d1)// c1 id reversed