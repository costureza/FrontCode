const btnFechar = document.querySelector(".btn_fechar");
const msgErro = document.querySelector(".msg_erro");
const msgSucesso = document.querySelector(".msg_sucesso");
const modalEnviar = document.querySelector(".modal_enviar");
const btnEnviar = document.querySelector(".btn_enviar");

const validadarDados = ({ nome, email }) => {
    //validar dados
    const nomeValido = nome && nome.length >= 3;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValido = email && emailRegex.test(email);

    return{
        nomeValido,
        emailValido
    }

};
const pegarDados = () => {
    //dados formulario
    const dados = {
        nome: document.querySelector(".input_nome").value,
        email: document.querySelector(".input_email").value,
    };

    const {nomeValido, emailValido} = validadarDados(dados);

    const resultado = nomeValido && emailValido ? 'sucesso' : 'erro';
    document.querySelector('form').reset();

    return resultado;
};

const formatarModal = (statusRegister) => {
    msgSucesso.style.display = (statusRegister === "sucesso") ? 'block' : 'none';
    msgErro.style.display = (statusRegister === "erro") ? 'block' : 'none';
    
    // Correção da manipulação de classes
    if (statusRegister === "sucesso") {
        btnFechar.classList.add('bg_sucesso');
        btnFechar.classList.remove('bg_erro');
    } else {
        btnFechar.classList.add('bg_erro');
        btnFechar.classList.remove('bg_sucesso');
    }
};
const mostrarModal = (statusRegister) => {
    //formatação da janela modal
    formatarModal(statusRegister);
    modalEnviar.showModal();
};

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarModal(pegarDados());
});

btnFechar.addEventListener("click", () => {
    modalEnviar.close();
});
