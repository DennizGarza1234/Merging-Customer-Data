Start

1. Initialize three pointers:
   - i = m - 1 (last valid element in customerData1)
   - j = n - 1 (last element in customerData2)
   - k = m + n - 1 (last index of customerData1)

2. While j >= 0:
   - If i >= 0 AND customerData1[i] > customerData2[j]:
       - Set customerData1[k] = customerData1[i]
       - Decrement i
   - Else:
       - Set customerData1[k] = customerData2[j]
       - Decrement j
   - Decrement k

3. End loop

4. `customerData1` now contains all elements merged and sorte