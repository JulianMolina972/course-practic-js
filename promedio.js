// const list1 = [
//     100,
//     200,
//     300,
//     500,
// ];



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