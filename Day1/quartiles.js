'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'quartiles' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quartiles(arr) {
    // Write your code here
    let nums = arr.sort((a, b) => a - b);
    let medianL = 0;
    let medianU = 0;
    const medianX = findMedian(nums);
    if (medianX.length === 3) {
        medianL = findMedian(nums.slice(0, medianX[1] + 1)); 
        medianU = findMedian(nums.slice(medianX[2]))
    } else {
        medianL = findMedian(nums.slice(0, medianX[1]));
        medianU = findMedian(nums.slice(medianX[1] + 1))
    }

    return [medianL[0], medianX[0], medianU[0]];
}

function findMedian(arr) {
    let medianIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return [(arr[medianIndex - 1] + arr[medianIndex]) / 2, medianIndex - 1, medianIndex];
    } else {
        return [arr[medianIndex], medianIndex];
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const data = readLine().replace(/\s+$/g, '').split(' ').map(dataTemp => parseInt(dataTemp, 10));

    const res = quartiles(data);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
