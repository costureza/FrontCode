const btnFechar = document.querySelector(".btn_fechar");
const msgErro = document.querySelector(".msg_erro");
const msgSucesso = document.querySelector(".msg_sucesso");
const modalEnviar = document.querySelector(".modal_enviar");
const btnEnviar = document.querySelector(".btn_enviar");

const pegarDados = () => {
    //dados formulario
    const nome = document.querySelector(".input_nome").value;
    const email = document.querySelector(".input_email").value;
    console.log(nome, email);
    let nomeValido = false;
    let emailValido = false;

    //validar dados
    if(nome === "" || nome === nul || nome.length <3 ){
        document.querySelector('.erro_nome').textContent = "O nome é obrigatório e precisa ter no mínimo 3 caracteres";
    }else{
        nomeValido = true;
        document.querySelector('.erro_nome').textContent = "";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(email)){
        document.querySelector('.erro_email').textContent = "O e-mail é obrigatório e precisar ser um e-mail válido.";
    }else{
        emailValido = true;
        document.querySelector('.erro_email').textContent = "";
    }

    if(nomeValido && emailValido){
        const cadastro = {
            nome,
            email
        }
        console.log(cadastro);
        document.querySelector('form').reset();
        return 'sucesso';
    }else{
        return 'erro';
    }
};

const mostrarModal = (statusRegister) => {
    //formatação da janela modal


    if (statusRegister === 'sucesso') {
        msgErro.style.display = 'none';
        msgSucesso.style.display = 'block';
        btnFechar.classList.add('bg_sucesso');
        btnFechar.classList.remove('bg_erro');
    }
    if (statusRegister === 'erro') {
        msgSucesso.style.display = 'none';
        msgErro.style.display = 'block';
        btnFechar.classList.add('bg_erro');
        btnFechar.classList.remove('bg_sucesso');
    }

    modalEnviar.showModal();
};

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarModal(pegarDados());
});

btnFechar.addEventListener("click", () => {
    modalEnviar.close();
});
