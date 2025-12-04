import math

pessoas = []

maiorAltura = 0
menorAltura = math.inf
alturas = []
pessoasFeminino = 0
pessoasMasculinoAlturas = []
generosAceitaveis = ["M", "F"]

def fazerMedia(lista):
    total = 0

    for item in lista:
        total += item
    
    media = total / len(lista)

    return media

x = 0
while x != 15:
    x += 1

    try:
        pessoa = {}
        genero = str(input("Gênero (M/F): ")).upper()

        if genero not in generosAceitaveis:
            raise

        altura = float(input("Altura (em m): "))

        pessoa["genero"] = genero
        pessoa["altura"] = altura

        pessoas.append(pessoa)

        if altura > maiorAltura:
            maiorAltura = altura
        
        if altura < menorAltura:
            menorAltura = altura
        
        if genero == "F":
            pessoasFeminino += 1
        
        if genero == "M":
            pessoasMasculinoAlturas.append(altura)
        
        alturas.append(altura)


    except:
        raise Exception("Dados inválidos")

mediaAlturasMasculino = fazerMedia(pessoasMasculinoAlturas)

print(f"=========\nRESULTADOS\n\nMaior altura: {maiorAltura}\nMenor altura: {menorAltura}\n\nMédia das alturas dos homens: {mediaAlturasMasculino:.2f}\n\nNúmero de mulheres: {pessoasFeminino}")
