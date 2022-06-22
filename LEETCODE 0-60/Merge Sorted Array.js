function sortAra(a, b) {
    return a - b;
}

function merge(nums1, m, nums2, n) {
    for (let i = m, j = 0; i < m + n; i++, j++) {
        nums1[i] = nums2[j];
    }
    
    return nums1.sort(sortAra);
}