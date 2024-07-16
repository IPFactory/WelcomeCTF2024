import sympy
import gmpy2
p = sympy.randprime(10 ** 1999, 10 ** 2000)
q = sympy.randprime(10 ** 1999, 10 ** 2000)
n = p*q
e = 29
l = (p-1)*(q-1)
d = gmpy2.invert(e,l)
message = b'ipfctf{XXXXXXXXXXXXXXXX}'
m = int.from_bytes(message, "little")
c = pow(m,e,n)
print('n:', n)
print('c:', c)
print('e:', e)