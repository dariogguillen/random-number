const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const boton = document.querySelector('#boton')
const noValido = document.querySelector('#noValido')

const ruta = () => {
  window.location.host + '/hola'
}

boton.addEventListener('click', e => {
  e.preventDefault()

  numero1.addEventListener('keyup', () => {
    if (Number(numero1.value) > 0) {
      noValido.style.display = 'none'
    } else {
      noValido.style.display = 'block'
    }
  })
  numero2.addEventListener('keyup', () => {
    if (Number(numero2.value) > 0) {
      noValido.style.display = 'none'
    } else {
      noValido.style.display = 'block'
    }
  })

  boton.href = 'hola'
  if (parseInt(numero1.value) > 0 && parseInt(numero2.value) > 0) {
    window.location.pathname = `random/${parseInt(numero1.value)}/${parseInt(numero2.value)}`
    noValido.style.display = 'none'
  } else {
    noValido.style.display = 'block'
  }
})
