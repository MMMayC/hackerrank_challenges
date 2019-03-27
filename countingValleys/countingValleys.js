function countingValleys(n, s) {
    let currentAtitude = 0;
    let prevAtitude = 0;
    let valleysCount = 0;
    for(let i = 0; i < n; i ++) {
        prevAtitude = currentAtitude;
        if(s.charAt(i) == 'U') {
            currentAtitude += 1;
        } else {
            currentAtitude -= 1;
        }
        if (currentAtitude == 0 && prevAtitude < 0) valleysCount ++;
    }
    return valleysCount;
}

const testOutput = countingValleys(8, 'UDDDUDUU');
console.log('testOutput :', testOutput);