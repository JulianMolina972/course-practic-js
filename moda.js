// const list1 = [
//     1,
//     12,
//     3,
//     42,
//     1,
//     12,
//     1
//];



function calculateMode(list){

    const listCount = {};

    list.map(
        function (element) {
            console.log(element);
            if (listCount[element]){
                console.log(element);
                listCount[element] += 1;
                console.log(element);
            } else {
                listCount[element] = 1;
                console.log(listCount[element]);
            }
            
            
        }
    );

    const listArray = Object.entries(listCount).sort(
        function (valueAccumulated, newValue){
            return valueAccumulated[1] - newValue[1];

        }
    );

    const moda = listArray[listArray.length - 1];

    return moda;

};




/********** Moda en código más reducido**********/

// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr){
//     return arr.sort((a,b) =>
//         arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }

// console.log(mode(NUMBERS)); //5