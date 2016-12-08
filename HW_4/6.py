import math
import sys
userInput = float(input('Enter a value'))
unit = input('Enter unit (Pa or dB)')
if unit == 'dB':
    number = userInput
elif unit == 'Pa':
    number = 20.0 * math.log(float(userInput) / .0000006 ,10)
else:
    print('unit not recognized')
    sys.exit()

if number >= 130:
    print('Threshold of pain')
elif number >= 120:
    print('Possible hearing damamge')
elif number >= 100:
    print('Jackhammer at 1 meter distance')
elif number >= 90:
    print('Traffic on a busy roadway at 10 meters distance')
elif number >= 60:
    print('Normal conversation')
elif number >= 30:
    print('Calm library')
elif number >= 0:
    print('Light leaf rustling sound')
