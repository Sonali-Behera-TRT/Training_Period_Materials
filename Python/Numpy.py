import numpy as np

# arr = np.array([1,2,3,4,5])
# print(arr)
# print(np.__version__)

# arr2 = np.array([6, 7, 8, 9], ndmin=6)
# print(arr2)
# print(arr2.ndim)
# print(type(arr2))

# print(arr[::2])

arr1 = np.array([1, 2, 3, 4, 5, 6, 7])

# Slice elements from index 1 to index 5 from the following array:
print(arr1[1:6])

# Slice elements from index 4 to the end of the array:

print(arr1[4:])

# Slice elements from the beginning to index 4 (not included):
print(arr1[:4])

# Slice from the index 3 from the end to index 1 from the end:
print(arr1[-3:])

# Return every other element from index 1 to index 5:
print(arr1[1:6:2])

# Return every other element from the entire array:
print(arr1[::2])

arr2 = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

# From the second element, slice elements from index 1 to index 4 (not included):
print(arr2[1, 1:4])

# From both elements, return index 2:
print(arr2[0:2, 2])

# From both elements, slice index 1 to index 4 (not included), this will return a 2-D array:
print(arr2[0:2, 1:4])