#compound.py

p = float(input("Enter principal: "))
r = float(input("Enter interest rate in decimal: "))

def compound():
    balance1 = p * (1 + (r / 12)) ** (1)
    print(balance1)
    balance2 = p * (1 + (r / 12)) ** (2)
    print(balance2)
    balance3 = p * (1 + (r / 12)) ** (3)
    print(balance3)

compound()
