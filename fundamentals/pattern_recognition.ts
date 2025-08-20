/**
 * PATTERN RECOGNITION GUIDE
 * How to identify when to use Sliding Window vs Two Pointer techniques
 */

// ============================================================================
// SLIDING WINDOW vs TWO POINTER: DECISION TREE
// ============================================================================

/**
 * STEP 1: ANALYZE THE PROBLEM
 *
 * Ask yourself these questions:
 * 1. Does the problem involve CONTIGUOUS elements? → Sliding Window
 * 2. Does the problem involve finding PAIRS/RELATIONSHIPS? → Two Pointer
 * 3. Is the array/string SORTED? → Likely Two Pointer
 * 4. Do you need to process ALL subarrays of size K? → Sliding Window
 * 5. Are you looking for OPTIMAL subarray/substring? → Sliding Window
 * 6. Do you need to MODIFY array in-place? → Two Pointer
 */

// ============================================================================
// SLIDING WINDOW INDICATORS
// ============================================================================

/**
 * USE SLIDING WINDOW WHEN:
 *
 * KEYWORDS IN PROBLEM:
 * - "subarray", "substring"
 * - "contiguous", "consecutive"
 * - "window of size k"
 * - "maximum/minimum sum of size k"
 * - "longest/shortest satisfying condition"
 * - "all subarrays of length k"
 *
 * PROBLEM TYPES:
 * - Find max/min in all windows of size k
 * - Longest substring without repeating characters
 * - Minimum window substring
 * - Subarray with target sum
 * - Maximum consecutive ones
 * - Fruits into baskets
 *
 * CHARACTERISTICS:
 * - Elements must be ADJACENT/CONTIGUOUS
 * - Window slides across the data
 * - Often involves maintaining window state (sum, count, etc.)
 * - Reduces O(n²) brute force to O(n)
 */

// Examples that scream "SLIDING WINDOW":
const slidingWindowExamples = [
  "Find the maximum sum of any subarray of length k",
  "Longest substring with at most 2 distinct characters",
  "Minimum window that contains all characters of string t",
  "Maximum number of consecutive 1s after flipping at most k 0s",
  "Find all anagrams of string p in string s",
];

// ============================================================================
// TWO POINTER INDICATORS
// ============================================================================

/**
 * USE TWO POINTER WHEN:
 *
 * KEYWORDS IN PROBLEM:
 * - "two sum", "pair", "triplet"
 * - "sorted array"
 * - "remove duplicates"
 * - "reverse", "palindrome"
 * - "merge", "intersection"
 * - "in-place", "constant space"
 *
 * PROBLEM TYPES:
 * - Two sum in sorted array
 * - Remove duplicates from sorted array
 * - Valid palindrome
 * - Container with most water
 * - 3Sum, 4Sum problems
 * - Merge sorted arrays
 * - Cycle detection in linked list
 *
 * CHARACTERISTICS:
 * - Often involves SORTED data
 * - Looking for RELATIONSHIPS between elements
 * - Elements don't need to be contiguous
 * - In-place modifications
 * - Reduces space complexity
 */

// Examples that scream "TWO POINTER":
const twoPointerExamples = [
  "Find two numbers in sorted array that sum to target",
  "Remove all duplicates from sorted array in-place",
  "Check if a string is a valid palindrome",
  "Merge two sorted arrays",
  "Detect cycle in linked list",
  "Move all zeros to end of array",
];

// ============================================================================
// DECISION FLOWCHART
// ============================================================================

/**
 * DECISION FLOWCHART:
 *
 * START: Read the problem
 *   ↓
 * Q1: Does it mention "subarray", "substring", or "contiguous"?
 *   ↓ YES → SLIDING WINDOW
 *   ↓ NO
 *   ↓
 * Q2: Is the array/list sorted?
 *   ↓ YES → TWO POINTER (likely)
 *   ↓ NO
 *   ↓
 * Q3: Looking for pairs/relationships between elements?
 *   ↓ YES → TWO POINTER
 *   ↓ NO
 *   ↓
 * Q4: Need to modify array in-place with constant space?
 *   ↓ YES → TWO POINTER
 *   ↓ NO
 *   ↓
 * Q5: Finding optimal window/substring with certain property?
 *   ↓ YES → SLIDING WINDOW
 *   ↓ NO
 *   ↓
 * Consider other techniques (hash map, binary search, etc.)
 */

// ============================================================================
// PRACTICE PROBLEMS BY PATTERN
// ============================================================================

/**
 * SLIDING WINDOW PRACTICE PROBLEMS:
 *
 * BEGINNER:
 * - Maximum sum subarray of size k
 * - Average of subarrays of size k
 * - Maximum number of vowels in substring of length k
 *
 * INTERMEDIATE:
 * - Longest substring without repeating characters
 * - Minimum window substring
 * - Longest substring with at most k distinct characters
 * - Subarray product less than k
 *
 * ADVANCED:
 * - Sliding window maximum
 * - Minimum window that contains all characters
 * - Longest substring with at most 2 distinct characters
 * - Fruits into baskets
 */

/**
 * TWO POINTER PRACTICE PROBLEMS:
 *
 * BEGINNER:
 * - Two sum in sorted array
 * - Valid palindrome
 * - Remove duplicates from sorted array
 * - Move zeros to end
 *
 * INTERMEDIATE:
 * - Container with most water
 * - 3Sum problem
 * - Remove element in-place
 * - Merge sorted arrays
 *
 * ADVANCED:
 * - Trapping rain water
 * - 4Sum problem
 * - Linked list cycle detection
 * - Intersection of two arrays
 */

// ============================================================================
// COMMON PITFALLS AND TIPS
// ============================================================================

/**
 * SLIDING WINDOW PITFALLS:
 *
 * 1. FORGETTING TO UPDATE WINDOW STATE
 *    ❌ windowSum += nums[right]; // forgot to remove left element
 *    ✅ windowSum = windowSum - nums[left] + nums[right];
 *
 * 2. WRONG WINDOW SIZE CALCULATION
 *    ❌ windowSize = right - left; // off by one
 *    ✅ windowSize = right - left + 1;
 *
 * 3. NOT HANDLING VARIABLE WINDOW CORRECTLY
 *    ❌ if (condition) left++; // should use while loop
 *    ✅ while (condition) left++;
 */

/**
 * TWO POINTER PITFALLS:
 *
 * 1. MOVING WRONG POINTER
 *    ❌ if (sum < target) right--; // should move left
 *    ✅ if (sum < target) left++;
 *
 * 2. BOUNDARY CONDITIONS
 *    ❌ while (left <= right) // can cause infinite loop
 *    ✅ while (left < right)
 *
 * 3. FORGETTING TO SWAP IN-PLACE
 *    ❌ nums[slow] = nums[fast]; slow++; // doesn't preserve order
 *    ✅ if (nums[fast] !== target) { nums[slow] = nums[fast]; slow++; }
 */

// ============================================================================
// QUICK REFERENCE
// ============================================================================

/**
 * QUICK REFERENCE CHEAT SHEET:
 *
 * SLIDING WINDOW:
 * - Contiguous elements ✓
 * - Substring/subarray problems ✓
 * - Fixed or variable window size ✓
 * - Maintains window state ✓
 * - Time: O(n), Space: O(1) typically ✓
 *
 * TWO POINTER:
 * - Sorted arrays (often) ✓
 * - Pair/relationship problems ✓
 * - In-place modifications ✓
 * - Opposite or same direction ✓
 * - Time: O(n), Space: O(1) ✓
 *
 * WHEN IN DOUBT:
 * - Try sliding window for subarray/substring problems
 * - Try two pointer for sorted array problems
 * - Consider the time complexity you need
 * - Think about whether elements need to be contiguous
 */

export { slidingWindowExamples, twoPointerExamples };
