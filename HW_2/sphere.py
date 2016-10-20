#sphere.py
#calculates surface area and volume of a sphere

from math import pi
radius = int(input("Enter the radius: "))
surface_area = (4) * (pi) * (radius ** 2)
volume = (4/3) * (pi) * (radius ** 3)

print(surface_area)
print(volume)
