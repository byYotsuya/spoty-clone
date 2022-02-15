const agregarCeroSiEsNecesario = valor => {
  if (valor < 10) {
    return '0' + valor
  } else {
    return '' + valor
  }
}
export const milisegundosAMinutosYSegundos = (milisegundos) => {
  const minutos = parseInt(milisegundos / 1000 / 60)
  milisegundos -= minutos * 60 * 1000
  const segundos = (milisegundos / 1000)
  return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(0))}`
}
