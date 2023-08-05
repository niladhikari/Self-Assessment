function nagetiveNumber(number) {
    let positiveNumber = [];
     for (let i = 0; i < number.length; i++) {
         const element = number[i];
         if (element >= 0) {
            positiveNumber.push(element);
         }
         else{
            break; 
         }
     }
     return positiveNumber;
}

const numbers = [2,4,6,0,-8,5,-3,12,23,55,-6];
 let positiveNumbers = nagetiveNumber(numbers);
 console.log(positiveNumbers);