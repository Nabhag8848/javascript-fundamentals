/**
 * SLIDING WINDOW TECHNIQUE
 *
 * What is it?
 * - A technique where you maintain a "window" (subarray) that slides across the data
 * - The window can expand or contract based on certain conditions
 * - Very efficient for problems involving contiguous subarrays/substrings
 *
 * When to use:
 * - Finding subarray/substring with specific properties
 * - Maximum/minimum in subarrays of fixed size
 * - Problems with "contiguous" elements
 * - Keywords: "subarray", "substring", "consecutive", "window"
 *
 * Time Complexity: Usually O(n) instead of O(n²)
 */

// ============================================================================
// PATTERN 1: FIXED SIZE WINDOW
// ============================================================================

/**
 * Example 1: Maximum sum of subarray of size k
 * Problem: Find the maximum sum of any contiguous subarray of size k
 */
function maxSumSubarray(arr: number[], k: number): number {
  if (arr.length < k) return -1;

  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window: remove leftmost, add rightmost
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Test
console.log("=== Fixed Size Window Examples ===");
console.log(
  "Max sum of subarray size 3 in [2, 1, 5, 1, 3, 2]:",
  maxSumSubarray([2, 1, 5, 1, 3, 2], 3)
); // Expected: 9 (5+1+3)

/**
 * Example 2: Average of all subarrays of size k
 */
function averageOfSubarrays(arr: number[], k: number): number[] {
  const result: number[] = [];
  let windowSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  result.push(windowSum / k);

  // Sliding window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    result.push(windowSum / k);
  }

  return result;
}

console.log(
  "Averages of subarrays size 3:",
  averageOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 3)
);

// ============================================================================
// PATTERN 2: VARIABLE SIZE WINDOW
// ============================================================================

/**
 * Example 3: Smallest subarray with sum >= target
 * Problem: Find the length of smallest contiguous subarray with sum >= target
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    // Shrink window while condition is met
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log("\n=== Variable Size Window Examples ===");
console.log(
  "Smallest subarray with sum >= 7 in [2,1,2,4,3,1]:",
  minSubArrayLen(7, [2, 1, 2, 4, 3, 1])
); // Expected: 2 ([4,3])

/**
 * Example 4: Longest substring without repeating characters
 */
function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicates
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(
  "Longest substring without repeating chars in 'abcabcbb':",
  lengthOfLongestSubstring("abcabcbb")
); // Expected: 3 ("abc")

/**
 * Example 5: Maximum number of vowels in substring of length k
 */
function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let vowelCount = 0;

  // Count vowels in first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) vowelCount++;
  }

  let maxVowelCount = vowelCount;

  // Slide the window
  for (let i = k; i < s.length; i++) {
    // Remove left character, add right character
    if (vowels.has(s[i - k])) vowelCount--;
    if (vowels.has(s[i])) vowelCount++;

    maxVowelCount = Math.max(maxVowelCount, vowelCount);
  }

  return maxVowelCount;
}

console.log(
  "Max vowels in substring of length 3 in 'abciiidef':",
  maxVowels("abciiidef", 3)
); // Expected: 3

// ============================================================================
// HOW TO IDENTIFY SLIDING WINDOW PROBLEMS
// ============================================================================

/**
 * SLIDING WINDOW PROBLEM PATTERNS:
 *
 * 1. FIXED WINDOW SIZE:
 *    - "Find maximum/minimum in all subarrays of size k"
 *    - "Average of all subarrays of size k"
 *    - Template: Calculate first window, then slide one position at a time
 *
 * 2. VARIABLE WINDOW SIZE:
 *    - "Smallest/Longest subarray with condition X"
 *    - "Maximum/Minimum window satisfying constraint"
 *    - Template: Expand right, shrink left when needed
 *
 * KEYWORDS TO LOOK FOR:
 * - "subarray", "substring", "contiguous"
 * - "window", "consecutive elements"
 * - "maximum sum of size k"
 * - "smallest/longest satisfying condition"
 * - "all subarrays of size k"
 *
 * COMMON MISTAKES:
 * - Forgetting to update window sum when sliding
 * - Not handling edge cases (empty array, k > array length)
 * - Using nested loops instead of sliding window (O(n²) vs O(n))
 */

export {
  maxSumSubarray,
  averageOfSubarrays,
  minSubArrayLen,
  lengthOfLongestSubstring,
  maxVowels,
};
