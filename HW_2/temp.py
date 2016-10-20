#temp.py
x = int(input("Enter a temperature in Fahrenheit: "))
def conversion(x):
    celsius = (x - 32) * (5/9)
    print(celsius)

conversion()
