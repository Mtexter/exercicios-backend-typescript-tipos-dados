function tabuada(lista: number[]): string {
    let tabuadaPronta: string = "";
    for (const numero of lista) {
        for (let i = 0; i <= 10; i++) {
            tabuadaPronta += `${numero} x ${i} = ${numero * i} \n`
        }
        tabuadaPronta += '--------------- \n';
    }
    return tabuadaPronta
};

console.log(tabuada([1, 3]));
