//your code here
function majorityElement(arr) {
    let candidate = null;
    let count = 0;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

module.exports = majorityElement;



/*
function majorityElementChecker(arr)
{
	let map = new Map();

	for(let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
				let count = map.get(arr[i]) +1;
				if (count > arr.length /2) {
					return arr[i];
				} else
					map.set(arr[i], count);

		}
		else
			map.set(arr[i],1);
		}
		return 1;
}
*/