function soletrandor(palavra: string): string {
    const resultado = palavra.split("").join("-")
    return resultado
}
console.log(soletrandor("programador"));
