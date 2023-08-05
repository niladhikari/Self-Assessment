const numbers = [22,44,66,80,30,87,55,90,24,86];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 80) {
        console.log(element);
        continue
    }
}