# arr = [1,2,3,5,4,6,7, 8]
arr = [4,1,2,3]

count = 0
num = arr[0]
for i in range(len(arr) - 1):
  if arr[i] > arr[i + 1]:
    count += 1

    if(count > 2):
      num = arr[i]

    temp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = temp


print("Count is: ", count)
if(count > 2):
  print('Number is: ', num)