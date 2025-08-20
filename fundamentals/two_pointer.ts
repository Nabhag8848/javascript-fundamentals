/**
 * TWO POINTER TECHNIQUE
 *
 * What is it?
 * - Uses two pointers/indices to traverse data structure
 * - Pointers can move towards each other, same direction, or independently
 * - Reduces time complexity from O(n²) to O(n) in many cases
 *
 * When to use:
 * - Searching pairs in sorted arrays
 * - Reversing/palindrome problems
 * - Removing duplicates
 * - Partitioning arrays
 * - Keywords: "two sum", "pair", "opposite ends", "sorted array"
 *
 * Time Complexity: Usually O(n) instead of O(n²)
 */

// ============================================================================
// PATTERN 1: OPPOSITE DIRECTION (LEFT & RIGHT POINTERS)
// ============================================================================

/**
 * Example 1: Two Sum in Sorted Array
 * Problem: Find two numbers that add up to target in a sorted array
 */
function twoSumSorted(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left, right]; // or [left + 1, right + 1] for 1-indexed
    } else if (sum < target) {
      left++; // Need larger sum
    } else {
      right--; // Need smaller sum
    }
  }

  return []; // Not found
}

console.log("=== Opposite Direction Examples ===");
console.log(
  "Two sum in [2,7,11,15] target 9:",
  twoSumSorted([2, 7, 11, 15], 9)
); // Expected: [0, 1]

/**
 * Example 2: Valid Palindrome
 * Problem: Check if string is a palindrome (ignoring non-alphanumeric)
 */
function isPalindrome(s: string): boolean {
  // Clean string: only alphanumeric, lowercase
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(
  "Is 'A man, a plan, a canal: Panama' a palindrome?",
  isPalindrome("A man, a plan, a canal: Panama")
); // Expected: true

/**
 * Example 3: Reverse Array
 * Problem: Reverse array in-place using two pointers
 */
function reverseArray<T>(arr: T[]): T[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log("Reverse [1,2,3,4,5]:", reverseArray([1, 2, 3, 4, 5])); // Expected: [5,4,3,2,1]

// ============================================================================
// PATTERN 2: SAME DIRECTION (SLOW & FAST POINTERS)
// ============================================================================

/**
 * Example 4: Remove Duplicates from Sorted Array
 * Problem: Remove duplicates in-place, return new length
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let slow = 0; // Position for next unique element

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1; // Length of unique elements
}

console.log("\n=== Same Direction Examples ===");
const duplicateArray = [1, 1, 2, 2, 3, 4, 4];
const newLength = removeDuplicates(duplicateArray);
console.log(`Remove duplicates from [1,1,2,2,3,4,4], new length: ${newLength}`);
console.log("Array after removal:", duplicateArray.slice(0, newLength));

/**
 * Example 5: Move Zeros to End
 * Problem: Move all zeros to end while maintaining relative order
 */
function moveZeroes(nums: number[]): void {
  let slow = 0; // Position for next non-zero element

  // Move all non-zero elements to the front
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  // Fill remaining positions with zeros
  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }
}

console.log("Move zeros example:");
const zeroArray = [0, 1, 0, 3, 12];
moveZeroes(zeroArray);
console.log("After moving zeros:", zeroArray); // Expected: [1,3,12,0,0]

/**
 * Example 6: Remove Element
 * Problem: Remove all instances of val in-place, return new length
 */
function removeElement(nums: number[], val: number): number {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}

console.log("Remove element example:");
const removeArray = [3, 2, 2, 3];
const lengthAfterRemoval = removeElement(removeArray, 3);
console.log(`After removing 3, length: ${lengthAfterRemoval}`);
console.log("Array:", removeArray.slice(0, lengthAfterRemoval));

// ============================================================================
// PATTERN 3: DIFFERENT SPEEDS (FLOYD'S CYCLE DETECTION)
// ============================================================================

/**
 * Example 7: Linked List Cycle Detection (concept with array)
 * Problem: Detect if there's a cycle using slow/fast pointers
 */
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false;
}

// ============================================================================
// PATTERN 4: MULTIPLE ARRAYS/STRINGS
// ============================================================================

/**
 * Example 8: Merge Two Sorted Arrays
 * Problem: Merge two sorted arrays into one sorted array
 */
function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }

  return result;
}

console.log("\n=== Multiple Arrays Examples ===");
console.log(
  "Merge [1,3,5] and [2,4,6]:",
  mergeSortedArrays([1, 3, 5], [2, 4, 6])
); // Expected: [1,2,3,4,5,6]

/**
 * Example 9: Is Subsequence
 * Problem: Check if s is subsequence of t
 */
function isSubsequence(s: string, t: string): boolean {
  let i = 0; // Pointer for s
  let j = 0; // Pointer for t

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++; // Found match, move s pointer
    }
    j++; // Always move t pointer
  }

  return i === s.length; // All characters of s found
}

console.log("Is 'ace' subsequence of 'abcde'?", isSubsequence("ace", "abcde")); // Expected: true

// ============================================================================
// HOW TO IDENTIFY TWO POINTER PROBLEMS
// ============================================================================

/**
 * TWO POINTER PROBLEM PATTERNS:
 *
 * 1. OPPOSITE DIRECTION (LEFT + RIGHT):
 *    - Array is sorted
 *    - Looking for pairs that sum to target
 *    - Palindrome checking
 *    - Reversing
 *    Template: left = 0, right = length - 1, move based on comparison
 *
 * 2. SAME DIRECTION (SLOW + FAST):
 *    - Removing duplicates/elements in-place
 *    - Partitioning arrays
 *    - Fast pointer explores, slow pointer builds result
 *    Template: slow = 0, fast iterates, slow advances conditionally
 *
 * 3. DIFFERENT SPEEDS:
 *    - Cycle detection (Floyd's algorithm)
 *    - Finding middle element
 *    - Template: slow moves 1 step, fast moves 2 steps
 *
 * 4. MULTIPLE ARRAYS:
 *    - Merging sorted arrays
 *    - Subsequence problems
 *    - Template: One pointer per array/string
 *
 * KEYWORDS TO LOOK FOR:
 * - "two sum", "pair", "target sum"
 * - "sorted array", "opposite ends"
 * - "remove duplicates", "in-place"
 * - "palindrome", "reverse"
 * - "merge", "subsequence"
 * - "cycle detection"
 *
 * COMMON MISTAKES:
 * - Forgetting to handle edge cases (empty arrays)
 * - Moving wrong pointer or both pointers incorrectly
 * - Not considering when pointers should stop
 * - Boundary errors (off-by-one)
 */

export {
  twoSumSorted,
  isPalindrome,
  reverseArray,
  removeDuplicates,
  moveZeroes,
  removeElement,
  hasCycle,
  mergeSortedArrays,
  isSubsequence,
  ListNode,
};
