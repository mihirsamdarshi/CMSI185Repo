import math

T = float(input("Enter your temperature "))
RH = float(input("Enter the relative humidity here "))

def tempequation():
    function = (17.27 * T) / (237.7 + T) + math.log(RH)
    TD = math.floor((237.7 * function) / (17.27 - function))
    print(TD)

tempequation()
