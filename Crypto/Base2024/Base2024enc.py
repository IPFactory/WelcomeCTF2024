def encode_base2024(input_str):
    base = 2024
    encoded_value = 0

    for char in input_str:
        encoded_value = encoded_value * 256 + ord(char)

    encoded_string = ""
    while encoded_value > 0:
        encoded_string = chr(encoded_value % base) + encoded_string
        encoded_value //= base

    return encoded_string

input_str = "ipfctf{XXXXXX}"
encoded_str = encode_base2024(input_str)
print(encoded_str)

with open('encoded.txt', 'w', encoding='utf-8') as file:
    file.write(encoded_str)