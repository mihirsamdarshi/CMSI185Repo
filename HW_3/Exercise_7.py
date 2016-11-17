import math

Q1 = float(input("Enter Q1 "))
Q2 = float(input("Enter Q2 "))
r = float(input("Enter distance in meters "))

def coulombs():
    f = (Q1 * Q2) / (4 * math.pi * math.e * (r ** 2))
    print(f)

coulombs()
