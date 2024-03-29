// function base_10(fn) {
//     console.log(1)
//     // const wrap = (x, y) => fn(x, y) + 10; // type-1
//     // return (x, y) => fn(x, y) + 10; // type-2 -> direct return
//
//     function wrap(x, y) { // type-3
//         console.log(3)
//         return fn(x, y) + 10;
//     }
//
//     console.log(2)
//     return wrap;
// }

// function mysum(a, b) {
//     return a + b;
// }

const base_10 = fn => (x, y) => fn(x, y) + 10;
const mysum = (a, b) => a + b;

const return_fn = base_10(mysum); //인자의 mysum은 mysum 함수가 아니라 base_10 내부의 wrap함수 1, 2는 wrap의 인자
console.log(return_fn(1, 2))


let person1 = {
    name: "steve",
    age: 1,
    is_checed: false
}

const pure_func = (person) => {
    return {
        ...person,
        is_checed: true
    }
}


console.log(pure_func(person1))

const numbers = [3, 5, 123, 2]
const number = numbers.reduce((acc, n) => acc + n, 0); // accumulate 의 초기값 0
const even_numbers = numbers.filter(i => i % 2 == 0);
console.log(even_numbers)
console.log(number)


const userPost = username => message => {
		console.log(`${username} - ${message}`);
}
const post = userPost("livejh")
post("Hello")
