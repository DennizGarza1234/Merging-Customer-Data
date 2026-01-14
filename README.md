# Merging-Customer-Data

## Clarifying Questions

1. Are both customer data arrays already sorted?
   - Yes, both arrays are sorted in non-decreasing order.

2. Should the merge be done in-place?
   - Yes, the merged result must be stored inside customerData1.

3. Does customerData1 have enough space to store all records?
   - Yes, customerData1 has a total length of m + n.

4. What should happen if customerData2 is empty?
   - customerData1 should remain unchanged.

5. What if customerData1 has no initial elements (m = 0)?
   - All elements from customerData2 should be copied into customerData1.

6. Are customer IDs always integers?
   - Yes, all customer IDs are integers.

---

## Complexity Analysis
**Time Complexity:**
- We loop through all elements of customerData1 and customerData2 once
- Each comparison or assignment is O(1)
- Total time: O(m + n), where m and n are the number of elements in customerData1 and customerData2.

**Space Complexity:**
- We merge in-place inside customerData1
- No extra arrays are created
- Total space: O(1) (constant space)
