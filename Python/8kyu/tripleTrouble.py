def triple_trouble(one, two, three):
    ans = ''
    for iteration in range(len(one)):
        ans += one[iteration] + two[iteration] + three[iteration]
    return ans