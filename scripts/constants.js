const data = document.getElementById("botao").addEventListener('click', (event) => {
  event.preventDefault()
  
  const rua = document.querySelector("#endereco").value
  const bairro = document.querySelector("#bairro").value
  const numeroEndereco = document.querySelector("#numeroEndereco").value
  const cidade = document.querySelector("#cidade").value

  const dddTelefone = document.querySelector("#dddTelefone").value
  const numeroTelefone = document.querySelector("#numeroTelefone").value

  const image = document.querySelector("#image").value
  const cardapio = document.querySelector("#cardapio").value
  const site = document.querySelector("#site").value
  const facebook = document.querySelector("#facebook").value
  const instagram = document.querySelector("#instagram").value
  const email = document.querySelector("#email").value
  const IframeMaps = document.querySelector("#IframeMaps").value

  const data = {
    rua,
    bairro,
    numeroEndereco,
    cidade,
    dddTelefone,
    numeroTelefone,
    image,
    cardapio,
    site,
    facebook,
    instagram,
    email,
    iframe: IframeMaps
  }

  return data
});

export default data;