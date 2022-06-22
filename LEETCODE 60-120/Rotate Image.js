function rotate(matrix) {
    let matLen = matrix.length;
    let rotateMatrix = [];
    let subMatrix = [];
    
    for(let i = 0; i < matLen; i ++){
        for(let j = matLen - 1; j >= 0; j --){
            subMatrix.push(matrix[j][i]);
        }
        rotateMatrix.push(subMatrix);
        subMatrix = [];
    }

    for(let i = 0; i < matLen; i ++){
        matrix[i] = rotateMatrix[i];
    }
    
}