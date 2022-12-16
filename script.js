//calback function

function sayMyName(name) {
  console.log(`Antes de executar a funçao Callback`)

  name()

  console.log(`Depois de executar a cllback`)
}

sayMyName(
  () => {
    console.log(`Estou em uma callback`)
  }
)