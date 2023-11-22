function hammingWeight (n) {
    let result=0;
    while(n !== 0){
        let lastBit = n & 1;
        if(lastBit === 1){
            result++;
        }
        n = n>>1
    }
    return result;
};
console.log(hammingWeight(11111111111111111111111111111101));
