const cliente = {
nome: "Alana",
idade: 16,
email: "Alana@firma.com",
telefone: ["4255555444", "42999885544"],
};

/*
cliente.endereco = [
{
rua: "R. Osvaldo Aranha",
numero: 611,
apartamento: true,
complemento: "casa",
},
];
*/


const ChavesDoObjeto = Object.keys(cliente);
console.log(ChavesDoObjeto);

if (!ChavesDoObjeto.includes("endereco")){
console.log("Erro, é necessário ter um endereço cadastrado");
}