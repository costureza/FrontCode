document.querySelector('.btn_enviar').addEventListener('click', (e)=>{
    e.preventDefault();

    //dados formulario
    const nome = document.querySelector('.input_nome').value;
    const email = document.querySelector('.input_email').value;

    //formatação da janela modal

    const statusRegister = 'sucesso';

    if(statusRegister === 'sucesso'){
        document.querySelector('.msg_erro').style.display = 'none';
        document.querySelector('.btn_fechar').classList.add('bg_sucesso');
    }
    if(statusRegister === 'erro'){
        document.querySelector('.msg_sucesso').style.display = 'none';
        document.querySelector('.btn_fechar').classList.add('bg_erro');
    }

    document.querySelector('.modal_enviar').showModal();
});

document.querySelector('.btn_fechar').addEventListener('click', ()=>{
    document.querySelector('.modal_enviar').close();
});

