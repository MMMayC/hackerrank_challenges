function jumpingOnClouds(c) {
    let jumps = 0;
    let currentCloud = 0;
    while (currentCloud < c.length - 1) {
        currentCloud += 2;
        if(c[currentCloud] > 0) {
            currentCloud -= 1;
        }
        jumps ++;
    }
    return jumps;
}

const testOutput = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
const testOutput2 = jumpingOnClouds([0, 0, 0, 1, 0, 0]);

console.log('testOutput :', testOutput);
console.log('testOutput2 :', testOutput2);