function task(nums) {
	const maxMoney = { 0: 0 };

	for (let i = 0; i < nums.length; i++) {
		maxMoney[i + 1] = Math.max(maxMoney[i + 1] ?? 0, maxMoney[i]);
		maxMoney[i + 2] = Math.max(maxMoney[i + 2] ?? 0, maxMoney[i] + nums[i]);
	}

	return Math.max(maxMoney[nums.length], maxMoney[nums.length + 1]);
}

console.log(task([1, 2, 3, 1]));
console.log(task([3, 9, 8, 2, 1]));
