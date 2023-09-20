function formatName(nome, sobrenome) {
//   nome.toUpperCase();
//   sobrenome.toUpperCase();

  return `${nome.toUpperCase()} ${sobrenome.toUpperCase()}`;
}
module.exports = formatName;

function VerificarIdade(idade) {
  if (idade >= 18) {
    return idade;
  }
  return idade;
}

module.exports = VerificarIdade;

function getUser(nome, idade, email) {
  return {
    nome,
    idade,
    email,
  };
}
module.exports = getUser;
