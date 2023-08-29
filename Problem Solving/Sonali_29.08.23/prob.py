def minDays(bloomDay, m, k):
    def can_make_bouquets(mid):
        bouquets = 0
        flowers = 0

        for day in bloomDay:
            if day <= mid:
                flowers += 1
                if flowers == k:
                    bouquets += 1
                    flowers = 0
            else:
                flowers = 0

        return bouquets >= m

    if (len(bloomDay) < (m * k)):
        return -1

    left = 1
    right = max(bloomDay)

    while left < right:
        mid = (left + right) // 2
        if can_make_bouquets(mid):
            right = mid
        else:
            left = mid + 1

    return left


# Test Case 1
bloomDay1 = [1, 10, 3, 10, 2]
m1, k1 = 3, 1
print(minDays(bloomDay1, m1, k1))  # Output: 3

# Test Case 2
bloomDay2 = [1, 10, 3, 10, 2]
m2, k2 = 3, 2
print(minDays(bloomDay2, m2, k2))  # Output: -1

# Test Case 3
bloomDay3 = [7, 7, 7, 7, 12, 7, 7]
m3, k3 = 2, 3
print(minDays(bloomDay3, m3, k3))  # Output: 12
