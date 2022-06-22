function sortAra(a, b) {
    return a - b;
}

function threeSum(nums) {
    let i, j, k;
    let flag = false;
    let len = nums.length;
    let res = [];
    let subAra = [];

    let set = new Set(nums);

    let count = 0;

    if (len < 3) {
        return [];
    }

    if (nums[0] === 0 && set.size === 1 && len >= 3) {
        return [
            [0, 0, 0]
        ];
    }

    for (i = 0; i < len; i++) {
        if (nums[i] === 0) {
            count++;
        }
        if (count >= 3) {
            break;
        }
    }

    if (set.size === 3) {
        res = [...set];
        res.sort(sortAra);

        if (res[0] + res[1] + res[2] === 0) {
            if (count >= 3) {
                return [res, [0, 0, 0]];
            } else {
                return [res];
            }
        } else {
            return [];
        }
    }

    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            flag = false;
            for (k = j + 1; k < len; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    flag = true;
                    subAra.push(nums[i]);
                    subAra.push(nums[j]);
                    subAra.push(nums[k]);
                    break;
                }
            }
            if (flag) {
                subAra.sort(sortAra);
                res.push(subAra);
                subAra = [];
            }
        }
    }

    return res.filter((obj = {}, a => !(obj[a] = a in obj)));
}