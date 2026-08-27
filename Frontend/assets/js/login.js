const preencher_conta = document.getElementById('preencher_conta');
let estado_preencher = 1;

preencher_conta.addEventListener('click', (e) => {
    const botaoAlternar = e.target.closest('#alternar_criar');

    if (!botaoAlternar) return;
    e.preventDefault();

    if (estado_preencher === 1) {
        preencher_conta.innerHTML = `
            <div class="preencher justify-content-center align-items-center">
                <div class="m-1 d-flex align-items-center justify-content-center p-2">
                    <div class="roxo-escuro d-flex container mh-auto w-100 py-5 m-1 justify-content-center">
                        <form action="">
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
                        <form action="">
                            <div class="d-flex flex-column justify-content-center w-auto align-items-center">
                                <div class="cinza m-2 container mw-auto rounded-5">
                                    <input type="text" id="log_1" placeholder="X">
                                </div>
                                <div class="cinza m-2 container mw-auto">
                                    <input type="text" id="log_2" placeholder="X">
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