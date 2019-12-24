var maxArea = function (height) {
    let w = height.length - 1;
    let l = 0
    let r = w
    let maxA
    while (l < r) {
        let tmp = Math.min(height[l], height[r]) * (r - l)
        if (tmp > maxA) {
            maxA = tmp
        }
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return maxA
}
