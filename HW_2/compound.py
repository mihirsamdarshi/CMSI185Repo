#compound.py

p = float(input("Enter principal: "))
r = float(input("Enter interest rate in decimal: "))
t = float(input("Enter number of years to be compounded: "))
n = float(input("Enter number of times to be compounded per year: "))

def compound():
    balance = p * (1 + (r / n)) ** (n * t)
    print(balance)

compound()
