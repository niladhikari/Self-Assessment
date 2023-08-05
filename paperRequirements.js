function paperRequirements(firstBook,secondBok,thirdBook) {
    let firstBookPages = 100 *firstBook;
    let secondBokPages = 200 * secondBok;
    let thirdBookPages = 300 * thirdBook;
    let totalBookPage = firstBookPages + secondBokPages + thirdBookPages;
    return totalBookPage;
}

let totalBookPages = paperRequirements(3,4,5);
console.log(totalBookPages,'pages paper need');