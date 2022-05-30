function calculateArithmetcAverage(list){

    // let sumList = 0;
    // for(let i = 0; i < list.length;i ++){
    //     sumList += list[i];
        
    // }

    const sumList = list.reduce(
        function (valueAccumulated = 0, newElement) {
            return valueAccumulated + newElement;
        }
    );

    const averageList = sumList / list.length;

    return averageList

};

function isEven(number){
    if (number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

// const list1 = [
//     120, 
//     213,
//     500,
//     3000000,
// ];


function medianFunction(list){

    //ordenar lista con el método .sort

    const sortList = list.sort(function(a, b) {
        return a - b;
    });
    console.log(sortList);

    const halfSortList = parseInt(sortList.length / 2);

    
    let median;

    if (isEven(sortList.length)) {
        const element1 = sortList[halfSortList];
        const element2 = sortList[halfSortList - 1];

        const averageElement1and2 = calculateArithmetcAverage([
            element1, 
            element2
        ]);

        median = averageElement1and2
    } else {
        median = sortList[halfSortList];
        // position halfList1 inside list1
    }
    return median;
}



