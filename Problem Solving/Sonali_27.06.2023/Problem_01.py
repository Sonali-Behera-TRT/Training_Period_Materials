# arr = [5, 6, 8, 11]
arr = [1, 2, 3, 3]

left = 0 # store the sum of elements present in LHS
right = 0 # store the sum of elements present in RHS
flag = False

for val in arr:
  right += val

for val in arr:
  right -= val
  if(right == left):
    print(f"The element is {val} which is present at index {arr.index(val)}")
    flag = True
  left += val

if(not flag):
  print('No such element found')