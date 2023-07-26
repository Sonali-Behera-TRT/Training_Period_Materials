def power_plant_distribution(n, k, arr):
    power_plants = 0
    i = 0

    while i < n:
        planted = False
        for j in range(i + k - 1, i - k, -1):
            if j >= 0 and j < n and arr[j] == 1:
                power_plants += 1
                planted = True
                i = j + k
                break
        if not planted:
            return -1

    return power_plants

n = 6
k = 2
arr = [0, 1, 1, 1, 1, 0]

result = power_plant_distribution(n, k, arr)

print("Number of power plants needed:", result)
