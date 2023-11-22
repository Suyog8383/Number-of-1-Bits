var hammingWeight = function(n) {
       let result = 0;
    while (n !== 0) {
        n = n & (n - 1);
        result++;
    }
    return result;
};
