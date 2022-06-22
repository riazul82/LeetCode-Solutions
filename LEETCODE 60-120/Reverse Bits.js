function reverseBits(n) {
    let str = (n >>> 0).toString(2).padStart(32, '0');
    let i = 0, integer = 0, bit;
    
    while (i < str.length) {
        bit = parseInt(str[i]);
        integer += (bit * Math.pow(2, i));
        i++;
    }

    return integer;
}