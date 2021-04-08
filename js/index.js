function ExibeConhecimentos(){
    let template = `
    <div class="row" style="margin: 12px;">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Formação:</h5>
                    <p class="card-text">
                        Granduação em Ciência da Computação - Em Andamento. <br>
                        Certificado Nível C1 ou Superior em Inglês pela Cambridge – 2020. <br>
                        Certificado em Gamificação pela Funifier – 2018. <br>
                        Participação em Treinamento de Scrum Ministrado pela K21 – 2017. <br> <br> <br> <br> <br>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Conhecimentos Técnicos:</h5>
                    <p class="card-text">
                        Cobol - Intermediário.<br>
                        SyncSort - Intermediário.<br>
                        JCL - Intermediário.<br>
                        SQL - Intermediário.<br>
                        Python – Intermediário.<br>
                        HTML – Iniciante.<br>
                        CSS – Iniciante.<br>
                        JavaScript – Iniciante.
                    </p>
                </div>
            </div>
        </div>
    </div>`;

    document.getElementById("descricao").innerHTML = template;
    window.scrollTo(0,document.body.scrollHeight);
}

function ExibeExperiencia(){
    let template = `
    <div class="card" style="margin: 25px;">
        <div class="card-body">
            <h5 class="card-title">Experiência Profissional:</h5>
            <p class="card-text">
                Abertura de Conca Corrente - 2021 a Atual. <br>
                Play, Gamificação (PLY) - 2018 a 2021. <br>
                Acordo de Trabalho (ATB) - 2017 a 2018. <br>
                Resultado Gerêncial (RST) – 2015 a 2017.
            </p>
        </div>
    </div>`;

    document.getElementById("descricao").innerHTML = template;
    window.scrollTo(0,document.body.scrollHeight);
}

function ExibeConquistas(){
    let template = `
    <div class="card" style="margin: 25px;">
        <div class="card-body">
            <h5 class="card-title">Conquistas:</h5>
            <p class="card-text">
                Desenvolvimento de Módulos de Abertura de Conta Corrente PJ Digital 2021 a Atual. <br>
                Elaboração, Construção e Manutenção do Planeta BB – 2019 a 2021.<br>
                Realização de 9 Workshops sobre Gamificação – 2018 a 2019.<br>
                Convidado das edições 10 e 14 do Café com UX - 2018 e 2019.<br>
                Elaboração e Manutenção do Talentos em Conexão – 2018 e 2019.<br>
                Coorganizador do Hackaton do Uxgame – 2018.<br>
                Elaboração e Construção do Game “UX Game” – 2018.<br>
                Elaboração e Construção do Extrato Individual de Premiações – 2018.<br>
                Ganhador do Pensa Gecap 5 em Parceria com Sudamar Cerqueira Albino – 2018.<br>
                Premiado do Programa “Eu Faço a Diferença na T.I.” pela participação no Módulo Mobilização - 2018.<br>
                Guru de Testes Automatizado para Mainframe – 2018.<br>
                Elaboração e Construção Módulo Mobilização do Conexão – 2017.<br>
                Elaboração e Construção Receita Interna de Atendimento e Transacional – 2016.<br>
                Construção Receita Interna de Vendas – 2015.
            </p>
        </div>
    </div>`;

    document.getElementById("descricao").innerHTML = template;
    window.scrollTo(0,document.body.scrollHeight);
}