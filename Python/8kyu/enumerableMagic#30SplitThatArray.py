def partition(arr, cla):
    a = []
    b = []
    for el in arr:  
        if cla(el):
            a.append(el)
        else:
            b.append(el)
    return (a,b)