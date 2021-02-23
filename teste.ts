// // UUID => Universally Unique Identifier

//Modo JS
// function enviarEmail(para, id, assunto, texto){
//     //Biblioteca de envio de e-mail

//     console.log(para, id , assunto, texto);
// }

// class EnviarEmailParaUsuario{
//     send(){
//         enviarEmail("victorsmello93@gmail.com", 9899, "Olá!", "Tudo bem?")
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------	

// Modo TS
interface DadosEnvioEmail{
    para: string;
    id: string;
    assunto: string;
    texto: string
}


function enviarEmail({para, id, assunto, texto} : DadosEnvioEmail){
    console.log(para, id , assunto, texto)
}

class EnviarEmailParaUsuario{
    send(){
        enviarEmail({
            para: "victorsmello93@gmail.com",
            id: "9899",
            assunto: "Olá",
            texto: "Tudo bem?"
        })
    }
}