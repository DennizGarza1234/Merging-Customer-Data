const mergeCustomerData = require('../src/mergeCustomerData');

describe('mergeCustomerData', () => {
    // Normal Cases
    test('merges two equal-length arrays', () => {
        const arr1 = [101,104,107,0,0,0];
        mergeCustomerData(arr1, 3, [102,105,108], 3);
        expect(arr1).toEqual([101,102,104,105,107,108]);
    });

    test('merges when second array elements are smaller', () => {
        const arr1 = [105,106,107,0,0,0];
        mergeCustomerData(arr1, 3, [101,102,103], 3);
        expect(arr1).toEqual([101,102,103,105,106,107]);
    });

    test('merges interleaved values', () => {
        const arr1 = [101,103,105,0,0,0];
        mergeCustomerData(arr1, 3, [102,104,106], 3);
        expect(arr1).toEqual([101,102,103,104,105,106]);
    });

    // Edge Cases
    test('customerData2 empty', () => {
        const arr1 = [103];
        mergeCustomerData(arr1, 1, [], 0);
        expect(arr1).toEqual([103]);
    });

    test('customerData1 initially empty', () => {
        const arr1 = [0,0,0];
        mergeCustomerData(arr1, 0, [101,102,103], 3);
        expect(arr1).toEqual([101,102,103]);
    });

    test('both arrays empty', () => {
        const arr1 = [];
        mergeCustomerData(arr1, 0, [], 0);
        expect(arr1).toEqual([]);
    });
});
