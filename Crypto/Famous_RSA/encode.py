import sympy
import gmpy2
# p = ?
# q = ?
n = p*q
e = 65537
l = (p-1)*(q-1)
d = gmpy2.invert(e,l)
message = b'ipfctf{XXXXXXXXXXXXXXXX}'
m = int.from_bytes(message, "little")
c = pow(m,e,n)
print('n:', n)
print('c:', c)
print('e:', e)