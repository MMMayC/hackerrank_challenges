function sockMerchant(n, ar) {
    let socksByColor = {};
    // sort socks by color
    for (let i = 0; i < n; i++) {
        if (!socksByColor.hasOwnProperty(ar[i])) {
            socksByColor[ar[i]] = 1;
        } else {
            socksByColor[ar[i]] += 1;
        }
    }
    let pairs = 0;
    // count how many pairs
    Object.values(socksByColor).forEach((numberOfSocks) => {
        pairs += Math.floor(numberOfSocks / 2);
    });
    return pairs;
}

const testOutput1 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log('testOutput1 :', testOutput1);