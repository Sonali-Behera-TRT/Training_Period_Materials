mat = [
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34],
    [41, 42, 43, 44]
]

print('After')
for i in mat:
    print(i)
print()

n = len(mat)

i = 0
while(i < n):
    j = i + 1
    while(j < n):
        temp = mat[i][j]
        mat[i][j] = mat[j][i]
        mat[j][i] = temp
        j += 1
    i += 1


i = 0
while(i < n):
    j = 0
    while(j < n // 2):
      temp = mat[i][j]
      mat[i][j] = mat[i][n - j - 1]
      mat[i][n - j - 1] = temp
      j += 1
    i += 1

print('After')
for i in mat:
    print(i)