const evenLast = (nums) => {
    let last = nums[nums.length - 1] || 0
    return nums.reduce((sum, el, idx) => sum + (idx % 2 ? 0 : el * last), 0)
  }