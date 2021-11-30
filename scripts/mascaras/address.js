import data from "../constants";

const {rua: rua_initial, bairro: bairro_initial, cidade: cidade_initial} = data

const rua_method = rua_initial.split(" ");
for (var i = 0; i < rua_method.length; i++) {
    rua_method[i] = rua_method[i].charAt(0).toUpperCase() + rua_method[i].slice(1);

}

const bairro_method = bairro_initial.split(" ");
for (var i = 0; i < bairro_method.length; i++) {
    bairro_method[i] = bairro_method[i].charAt(0).toUpperCase() + bairro_method[i].slice(1);

}

const cidade_method = cidade_initial.split(" ");
for (var i = 0; i < cidade_method.length; i++) {
    cidade_method[i] = cidade_method[i].charAt(0).toUpperCase() + cidade_method[i].slice(1);

}

const rua = rua_method.join(" ");
const bairro = bairro_method.join(" ");
const cidade = cidade_method.join(" ");

export const address = {
  rua,
  bairro,
  cidade
}
