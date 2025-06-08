function twoNum(nums, target) {
    const map = new Map()
    for (let i = 0; i< nums.length; i++) {
        const complement = target - nums[i]
        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i],i)
    }
    return []
}


const num = twoNum([1,2,3,4,5,6,7],8);
console.log(num)

