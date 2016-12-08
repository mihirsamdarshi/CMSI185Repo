bill = float (input('Enter the bill total: '))
rank = float(input('Enter your satisfaction level 1 - 3 (1 satisfied, 3 dissatisfied)'))
if rank == 1:
    tip = .2 * bill
elif rank == 2:
    tip = .15 * bill
elif rank == 3:
    tip = .1 * bill
print('The tip is ' + str(tip) + '. The total is ' + str(tip + bill))
