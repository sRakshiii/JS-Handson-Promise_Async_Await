
// let count = 0;
// setTimeout(() => {
//     console.log(++count);
//     setTimeout(() => {
//         console.log(++count);
//         setTimeout(() => {
//             console.log(++count);
//             setTimeout(() => {
//                 console.log(++count);
//                 setTimeout(() => {
//                     console.log(++count);
//                     setTimeout(() => {
//                         console.log(++count);
//                         setTimeout(() => {
//                             console.log(++count);
//                         }, 7000);
//                     }, 6000);
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

// function printNum(nums){
//     return new Promise((res, rej) => {
//         let count = 1;
//         for(let i = 1; i < nums ; i++){
//             setTimeout(() => {
//             console.log(count++);
//             res()
//             }, i * 1000);
//         }
//     })
// }
    
// printNum(8).then();

function promise(num){
    return new Promise((res, rej) => {
        if(num){
            res('Promise Resolved');
        }
        else{
            rej('Promise Rejected')
        }
    })
}
promise(20).then((solve) => console.log(solve)).catch((err) => console.log(err));