const flattened = [[0,1], [2, 3],[4,5]].reduce(
        (accumulator, array) => {
            //removed debugger;
            //updated
            return accumulator.concat(array)
        },[]);   