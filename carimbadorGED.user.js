// ==UserScript==
// @name         Carimbador GED
// @namespace    http://tampermonkey.net/
// @version      3.2
// @description  try to take over the world!
// @author       Lucas Monteiro
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @match        http://sigeduca.seduc.mt.gov.br/ged/hwgedteladocumento.aspx?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/lksoumon/carimbadorGED/raw/main/carimbadorGED.user.js
// @downloadURL  https://github.com/lksoumon/carimbadorGED/raw/main/carimbadorGED.user.js
// ==/UserScript==

var tecs = [
    'EDIVALDO ALVES DA SILVA JUNIOR',
    'MARIA CAMILA SOUZA OLIVEIRA',
    'SILVANIA LOPES DE ARAUJO',
    'VERA LUCIA VIEIRA DA SILVA',
    'WENDEL VIEIRA DE OLIVEIRA'
];

(function() {
    'use strict';
    //var xpath = "//span[text()='Secretário(a)']";
    //var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    //console.log(matchingElement);
    //matchingElement.textContent = "New Span content";


        // Função para simular a função de carimbar
    function carimbar(TAE) {
        var escolaridade = "ATESTADO DE ESCOLARIDADE";
        var transferencia = "ATESTADO DE TRANSFERÊNCIA";
        var vaga = "ATESTADO DE VAGA";
        var frequencia = "ATESTADO DE FREQUÊNCIA";
        console.log('Carimbado!');
        var aTags = document.getElementsByTagName("span");
        var searchText1 = "Secretário(a)";
        var searchText2 = "Diretor(a)";
        var secretario = " LUCAS DE SOUZA MONTEIRO \r\n Secretário Escolar \r\n Portaria nº1.677/2023/GS/SEDUC/MT ";
        var diretor = " RODRIGO LEANDRO LEMES GONÇALVES \r\n Diretor Escolar \r\n Portaria nº1.678/2023/GS/SEDUC/MT ";
        var tecnico = TAE+" \r\n Téc. Administrativo Escolar \r\n E.E. Major Otávio Pitaluga ";
        var found;
        var modo;

        if(document.getElementById('MAINFORM').action == "http://sigeduca.seduc.mt.gov.br/ged/hwgedteladocumento.aspx?0,25"){
                modo = 'fichaInd';console.log('fichaInd');
        }

        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].textContent.trim() == escolaridade || aTags[i].textContent.trim() == transferencia || aTags[i].textContent.trim() == vaga || aTags[i].textContent.trim() == frequencia) {
                console.log('atestados');
                //aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                //aTags[i].textContent = secretario;
                modo = 'escolaridade';
            }

            if(modo == 'fichaInd'){
                if (aTags[i].textContent.trim() == 'Secretário(a) Escolar' || aTags[i].textContent.trim() == 'Secretário(a)') {
                    //console.log(aTags[i]);
                    aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                    aTags[i].textContent = secretario;
                }

                if (aTags[i].textContent.trim() == searchText2) {
                    //console.log(aTags[i]);
                    aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                    aTags[i].textContent = diretor;
                }

                if (aTags[i].textContent.trim() == 'Funcionário(a) Responsável') {
                    //console.log(aTags[i]);
                    aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                    aTags[i].textContent = tecnico;
                }
            }

            if(modo == 'escolaridade'){
                if (aTags[i].textContent.trim() == 'Secretário(a) Escolar' || aTags[i].textContent.trim() == 'Secretário(a)') {
                    //console.log(aTags[i]);
                    aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                    aTags[i].textContent = tecnico;
                }

                if (aTags[i].textContent.trim() == searchText2) {
                    //console.log(aTags[i]);
                    aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                    aTags[i].textContent = '';
                }
            }else{
                if (aTags[i].textContent.trim() == searchText1) {
                    //console.log(aTags[i]);
                    aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                    aTags[i].textContent = secretario;
                }

                if (aTags[i].textContent.trim() == searchText2) {
                    //console.log(aTags[i]);
                    aTags[i].setAttribute('style', 'white-space: pre;font-size: 12px');
                    aTags[i].textContent = diretor;
                }
            }

    }




    // Cria uma div para o carimbo
    var carimbo = document.createElement('div');
    carimbo.style.position = 'fixed';
    carimbo.style.top = '20px'; // Ajuste conforme necessário
    carimbo.style.right = '20px'; // Ajuste conforme necessário
    carimbo.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
    carimbo.style.border = '2px solid #000'; // Cor da borda do carimbo
    carimbo.style.padding = '5px';
    carimbo.style.fontFamily = 'Arial, sans-serif'; // Ajuste conforme necessário
    carimbo.style.zIndex = '99999';
    carimbo.style.textAlign = 'center'; // Centraliza o texto horizontalmente

    // Adiciona as informações ao carimbo
    carimbo.innerHTML = 'ESTADO DE MATO GROSSO<br>Secretaria de Estado de Educação<br><strong>Escola Estadual de Ensino Médio<br>"MAJOR OTÁVIO PITALUGA"</strong><br>Email: escola.10995@edu.mt.gov.br<br>Avenida Amazonas, 789 - Fone:66 3022-2196<br>Rondonópolis - Mato Grosso'; // Atualize com as informações desejadas

    // Adiciona o carimbo à página
    document.body.appendChild(carimbo);



}







    // Cria um elemento div para o menu flutuante
    var floatingMenu = document.createElement('div');
    floatingMenu.style.position = 'fixed';
    floatingMenu.style.bottom = '50%';
    floatingMenu.style.right = '0';
    floatingMenu.style.transform = 'translateY(50%)';
    floatingMenu.style.backgroundColor = '#fff';
    floatingMenu.style.padding = '10px';
    floatingMenu.style.border = '1px solid #ccc';
    floatingMenu.style.borderRadius = '5px';
    floatingMenu.style.zIndex = '9999';
    floatingMenu.setAttribute('id', 'floating-menu'); // Adiciona um ID ao menu

    // Cria o botão principal "Carimbo Digital"
    var mainButton = document.createElement('button');
    mainButton.textContent = 'Carimbo Digital';
    mainButton.addEventListener('click', toggleSubMenu);
    floatingMenu.appendChild(mainButton);

    // Cria o submenu
    var subMenu = document.createElement('div');
    subMenu.style.display = 'none';
    subMenu.style.position = 'absolute';
    subMenu.style.top = '100%';
    subMenu.style.right = '0';
    subMenu.style.backgroundColor = '#fff';
    subMenu.style.border = '1px solid #ccc';
    subMenu.style.borderRadius = '5px';
    subMenu.style.padding = '5px';
    subMenu.style.zIndex = '9999';

    // Cria os cinco botões do submenu
    for (var i = 1; i <= 5; i++) {
        (function(nome) {
            nome = tecs[i-1];
        var subButton = document.createElement('button');
        subButton.textContent = nome;
        subButton.addEventListener('click', function() {
            carimbar(nome);
        });
        subMenu.appendChild(subButton);
    })(i);
    }

    // Adiciona o submenu ao menu flutuante
    floatingMenu.appendChild(subMenu);

    // Adiciona o menu flutuante à página
    document.body.appendChild(floatingMenu);

    // Estilo para ocultar o menu durante a impressão
    var style = document.createElement('style');
    style.innerHTML = '@media print { #floating-menu { display: none !important; } }';
    document.head.appendChild(style);

    // Função para alternar a exibição do submenu
    function toggleSubMenu() {
        if (subMenu.style.display === 'none') {
            subMenu.style.display = 'block';
        } else {
            subMenu.style.display = 'none';
        }
    }





})();
