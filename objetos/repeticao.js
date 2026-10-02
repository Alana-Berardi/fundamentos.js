const cliente = {
    nome: "Alana",
    idade: 16,
    email: "alana@firma.com",
    telefone: ["4255555444", "42999885544"],
};

cliente.endereco = [
{
    rua: "R. Osvaldo Aranha",
    numero: 611,
    apartamento: true,
    complemento: "casa",
},
];

for (let chave in cliente){
    console.log(cliente[chave]);
}