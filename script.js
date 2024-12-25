//your code here
function majorityElement(arr) {
    let candidate = null;
    let count = 0;

    // First pass: find the candidate element
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

    // Second pass: (Optional) Verify that candidate is the majority element
    // We don't need this because the problem guarantees the majority element exists.
    return candidate;
}

// Test the function
const input = [2, 1, 2];
console.log(majorityElement(input)); // Output: 2
