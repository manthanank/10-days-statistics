'use strict';

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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */

function insertionSort(arr){
    let i;
    let j;
    let item;
    for(i=0;i<arr.length;i++){
        j = i-1;
        item = arr[i];
        while(j>=0&&arr[j]>item){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = item
    }
}
function interQuartile(values, freqs) {
    // Print your answer to 1 decimal place within this function
    let S = [];
    for(let i = 0;i<values.length;i++){
        let count = freqs[i];
        while(count>0){
            S.push(values[i]);
            count--;
        }
    }
    insertionSort(S)
    let mid = parseInt(S.length/2);
    let left = parseInt(mid/2);
    let right = parseInt(mid+(mid/2)+1);
    
    let q1 = 0;
    let q3 = 0;

    if(mid%2!==0){
        q1 = S[left];
        q3 = S[right]
    }else{
        q1 = (S[left-1]+S[left])/2
        q3 = (S[right]+S[right-1])/2
    }  
    console.log((q3-q1).toFixed(1)) 
     
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const val = readLine().replace(/\s+$/g, '').split(' ').map(valTemp => parseInt(valTemp, 10));

    const freq = readLine().replace(/\s+$/g, '').split(' ').map(freqTemp => parseInt(freqTemp, 10));

    interQuartile(val, freq);
}
