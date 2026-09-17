const preencher_conta = document.getElementById('preencher_conta');
let estado_preencher = 2;

preencher_conta.addEventListener('click', (e) => {
    const botaoAlternar = e.target.closest('#alternar_criar');

    if (!botaoAlternar) return;
    e.preventDefault();

    if (estado_preencher === 1) {
        preencher_conta.innerHTML = `
            <div class="preencher justify-content-center align-items-center">
                <div class="m-1 d-flex align-items-center justify-content-center p-2">
                    <div class="roxo-escuro d-flex container mh-auto w-100 py-5 m-1 justify-content-center">
                        <form id="form-cadastro">
                            <div class="d-flex flex-column justify-content-center w-auto align-items-center">
                                <div class="cinza m-2 container mw-auto rounded-5">
                                    <input type="text" id="cad_1" placeholder="X">
                                </div>
                                <div class="cinza m-2 container mw-auto">
                                    <input type="text" id="cad_2" placeholder="X">
                                </div>
                                <div class="cinza m-2 container mw-auto">
                                    <input type="text" id="cad_3" placeholder="X">
                                </div>
                                <div class="cinza m-2 container mw-auto">
                                    <input type="text" id="cad_4" placeholder="X">
                                </div>
                                <div class="cinza m-2 container mw-auto">
                                    <input type="text" id="cad_5" placeholder="X">
                                </div>
                            </div>
                            <div class="justify-content-center d-flex align-items-center">
                                <button class="botao justify-content-center align-items-center d-flex w-50 rounded-3" type="submit">
                                    <p>Cadastrar</p>
                                </button>
                            </div>
                            <p class="text-white pointer d-flex justify-content-center align-items-center" id="alternar_criar">Já possui uma conta?</p>
                        </form>
                    </div>
                </div>
            </div>`;
        estado_preencher = 2;
    } else {
        preencher_conta.innerHTML = `
            <div class="preencher justify-content-center align-items-center">
                <div class="m-1 d-flex align-items-center justify-content-center p-2">
                    <div class="roxo-escuro d-flex container mh-auto w-100 py-5 m-1 justify-content-center">
                        <form id="form-login">
                            <div class="d-flex flex-column justify-content-center w-auto align-items-center">
                                <div class="cinza m-2 container mw-auto rounded-5">
                                     <label for="log_1" class="text-white mb-1">Email</label>
                                    <input type="text" id="log_1" placeholder="X" name="log_1">
                                </div>
                                <div class="cinza m-2 container mw-auto">
                                     <label for="log_2" class="text-white mb-1">Senha</label>
                                    <input type="text" id="log_2" placeholder="X" name="log_2">
                                </div>
                            </div>
                            <div class="justify-content-center d-flex align-items-center">
                                <button class="botao justify-content-center align-items-center d-flex w-50 rounded-3" type="submit">
                                    <p>Logar</p>
                                </button>
                            </div>
                            <p class="text-white pointer d-flex justify-content-center align-items-center" id="alternar_criar">Não possui uma conta?</p>
                        </form>
                    </div>
                </div>
            </div>`;
        estado_preencher = 1;
    }
});


document.addEventListener('submit', async (e) => {
    if (e.target && e.target.id === 'form-cadastro') {
        e.preventDefault();

        const dadosFormulario = {
            nome: document.getElementById('cad_1').value,
            email: document.getElementById('cad_2').value,
            cpf: document.getElementById('cad_3').value,
            senha: document.getElementById('cad_4').value,
            confirmarSenha: document.getElementById('cad_5').value
        };

        if (dadosFormulario.senha !== dadosFormulario.confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }


        const conexaoCpf = await fetch('/PRI/Backend/src/routes/api.php?classe=verificarCpf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cpf: dadosFormulario.cpf })
        });

        const respostaCpf = await conexaoCpf.json();

        if (respostaCpf.exists) {
            alert('CPF já cadastrado!');
            return;
        } 


        const conexaoInsert = await fetch('/PRI/Backend/src/routes/api.php?classe=inserirUsuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosFormulario)
        });

        const respostaInsert = await conexaoInsert.json();

        if (respostaInsert.success) {
            alert('Cadastro realizado com sucesso!');
            localStorage.setItem('usuario_nome', respostaInsert.nome);
            window.location.href = '/PRI/Frontend/index.html';
        } else {
            alert('Erro ao realizar o cadastro.');
        }
    }

    if(e.target && e.target.id === 'form-login'){
        e.preventDefault()

        const DadosLogin = {
            email : document.getElementById('log_1').value,
            senha : document.getElementById('log_2').value
        }

        const fazerLogin = await fetch('/PRI/Backend/src/routes/api.php?classe=fazerLogin', {
            method : 'POST',
            headers : { 'Content-Type' : 'application/json' },
            body : JSON.stringify(DadosLogin)
        })

        const respostaLogin = await fazerLogin.json()

        if(respostaLogin.success){
            alert("Login realziado com sucesso!")
            localStorage.setItem('usuario_nome', respostaLogin.nome)
            window.location.href = '/PRI/Frontend/index.html'
        } else {
            alert('Erro ao realizar o login.')
            alert(respostaLogin.mensagem)
            alert(respostaLogin.erro_bd)
        }
    }
});