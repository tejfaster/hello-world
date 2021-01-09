const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1]
var i, j

/*
Question 1
*/

//  console.log(number.length)
//  for(i;i < number.length;i++)
//  {
//     if(number[i]%2===0)
//     {
//         console.log(number[i])
//     }
//     else
//     {
//         console.log("not a even"+number[i])
//     }
//  }


/*
Question 2
a
*/

var count = 0, sum
var arr = []

// var array = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]

// for (i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//         count = 0
//     }
//     else {
//         count = count + 1,
//             arr.push(count)
//         //  console.log(count)
//         //  console.log(JSON.stringify(arr))
//         var mab = Math.max(...arr)

//     }

// }
// console.log("Max num of consecutive 1's is " + mab)

/*
Question 2
b
*/

// var array = [1,0,0,0,0,1,0,0,0,1]
// for (i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//         count = 0
//     }
//     else {
//          count = count + 1,
//          arr.push(count)
//         var mab = Math.max(...arr)
//     }
// }
// console.log("Max num of consecutive 1's is "+ mab) 


/*
Question 3
*/

// for (i = 0; i < number.length; i++) {
//     for (j = i + 1; j < number.length; j++) {
//         if (number[i] === number[j]) {
//             console.log("it occured multiple time " + number[i])
//         }
//     }
//     //console.log("ones occured"+number[i])
// }




/*
Question 5
*/


// var obj = [
//     { "id": 4, " name": "abc" },
//     { "id": 10, "name": "abc2" },
//     { "id": 5, "name": "abc3" },
//     { "id": 6, "name": "abc4" }
// ]

// var interchange

// for (i = 0; i <= obj.length; i++) {
//     for (j = i + 1; j < obj.length; j++) {
//         if (obj[i].id < obj[j].id) { }
//         else {
//             interchange = obj[i]
//             obj[i] = obj[j]
//             obj[j] = interchange
//         }
//     }
// }
// console.log(obj)