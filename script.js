var _ = require('lodash');


console.log(_);


var arr = [1,2,3,4,5,6,7,8];

console.log('answer: ', _.without(arr,3));








const flattened = [[0,1], [2, 3],[4,5]].reduce(
        (accumulator, array) => {
            //removed debugger;
            //updated
            return accumulator.concat(array)
        },[]);   