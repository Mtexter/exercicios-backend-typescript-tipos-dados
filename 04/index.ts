const inforLote = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

function impressorEtiquetas(infor: { produto: string, lote: number, ano: number, qtd: number }): string[] {
    let resultado: string[] = [];
    for (let i = 0; i < infor.qtd; i++) {
        resultado.push(`${infor.lote}-${infor.ano}-${(i + 1).toFixed().padStart(3, "0")}`);
    }
    return resultado
}
console.log(impressorEtiquetas(inforLote));