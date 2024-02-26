const numA = document.getElementById('first-number')
const numB = document.getElementById('second-number')
const message = document.getElementById('response')
const form = document.getElementById('form-nums')

form.addEventListener('submit', function (e) {
  let formEvalido = false
  e.preventDefault()

  formEvalido = Number(numB.value) > Number(numA.value)

  if (formEvalido) {
    message.innerText =
      'Campo B é maior que campo A, formulário enviado com sucesso !'

    numA.value = ''
    numB.value = ''

    message.style.backgroundColor = 'Green'
    message.style.color = 'white'
    message.style.padding = '3px'
  } else {
    message.innerText =
      'Campo A é maior ou igual ao campo B, revise esse dado e tente novamente'

    message.style.backgroundColor = 'red'
    message.style.color = 'white'
    message.style.padding = '3px'
  }
})
