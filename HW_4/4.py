import math

x1 = float (input('Enter x coordinate of first circle: '))
y1 = float (input('Enter y coordinate of first circle: '))
r1 = float (input('Enter radius of first circle: '))
x2 = float (input('Enter x coordinate of second circle: '))
y2 = float (input('Enter y coordinate of second circle: '))
r2 = float (input('Enter radius of second circle: '))

main = math.sqrt((x1-x2)**2 + (y1-y2)**2)
less = (math.fabs(r1-r2))
greater = (r1+r2)

print(main)
print(less)
print(greater)

if main > less and main < greater
    print("There are 2 intersections")

elif main < less or main > greater
    print("There are no intersections")

elif main = less or main = greater
    print("There is 1 intersection")
