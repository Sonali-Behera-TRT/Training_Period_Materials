def util(num):
  num = int(num) # To handle floating point numbers
  sum = 0 
  count = 0
  while(num):
    sum += num % 10
    num = int(num / 10)
    count += 1
  return count, sum

def find_super_digit(num):
  count, sum = util(num)
  if(count == 1):
     return sum
  return find_super_digit(sum)

print(find_super_digit(9875))
print(find_super_digit(9875987598759875))