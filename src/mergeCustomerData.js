function mergeCustomerData(customerData1, m, customerData2, n) {
    // Initialize pointers
    let i = m - 1;           // Last valid element in customerData1
    let j = n - 1;           // Last element in customerData2
    let k = m + n - 1;       // Last index of customerData1

    // Merge from the back
    while (j >= 0) {
        if (i >= 0 && customerData1[i] > customerData2[j]) {
            customerData1[k] = customerData1[i];
            i--;
        } else {
            customerData1[k] = customerData2[j];
            j--;
        }
        k--;
    }

    return customerData1;
}

// Export the function for testing
module.exports = mergeCustomerData;
