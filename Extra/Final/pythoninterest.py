import math

initBalance = input("Enter initial balance ")
interestRate = input("Enter interest rate here ")

def main():
    print("Month 1's balance is", initBalance + (interestRate/12 * initBalance))

main()
