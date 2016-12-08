speed = float(input('Enter a rotation speed: '))
if ((2 * (speed**2))/ 3) > 60:
    print('Rope will snap')
else:
    print('Rope will not snap')
