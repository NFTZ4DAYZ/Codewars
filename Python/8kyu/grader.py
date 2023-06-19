def grader(score):
    print(score)
    if .9 <= score <= 1 :
        return "A"
    elif .8<= score < .9 :
        return "B"
    elif .7 <= score < .8 :
        return "C"
    elif .6 <= score <.7 :
        return "D"
    else: return "F"
