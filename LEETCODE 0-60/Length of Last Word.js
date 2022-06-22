function lengthOfLastWord(s) {
    let ara = s.split(" ");
    let newAra = [];
    
    for (let i = 0; i < ara.length; i++) {
        if (ara[i] !== '') {
            newAra.push(ara[i]);
        }
    }

    return newAra[newAra.length - 1].length;
}