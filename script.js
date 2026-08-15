// ==========================
// MENU RESPONSIVO
// ==========================

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


// Fechar o menu ao clicar em um link

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


// ==========================
// CALCULADORA DE IMPACTO
// ==========================

function calcularImpacto() {

    const arvores =
        Number(document.getElementById("arvores").value);

    const resultado =
        document.getElementById("resultado");


    if (arvores <= 0 || isNaN(arvores)) {

        resultado.innerHTML =
            "Digite uma quantidade válida de árvores.";

        resultado.style.color = "red";

        return;

    }


    /*
        Esta é uma estimativa educativa.
        A absorção de CO₂ varia de acordo com espécie,
        idade, clima, solo e condições de crescimento.

        Para evitar apresentar uma estimativa como
        dado científico exato, utilizamos uma faixa.
    */

    const minimo = arvores * 10;
    const maximo = arvores * 25;


    resultado.innerHTML =

        `Como estimativa educativa, ${arvores} árvores podem
        representar aproximadamente entre
        <strong>${minimo} kg</strong> e
        <strong>${maximo} kg</strong> de CO₂ absorvido
        por ano, dependendo das condições de crescimento.`;


    resultado.style.color = "#2e7d32";

}


// ==========================
// QUIZ
// ==========================

function quiz(resposta) {

    const resultado =
        document.getElementById("quizResultado");


    if (resposta) {

        resultado.innerHTML =
            "✅ Correto! O plantio direto mantém a cobertura do solo e pode ajudar a reduzir a erosão.";

        resultado.style.color = "#2e7d32";

    } else {

        resultado.innerHTML =
            "❌ Incorreto. As queimadas podem causar impactos ambientais e prejudicar a qualidade do solo.";

        resultado.style.color = "#c62828";

    }

}


// ==========================
// GRÁFICO COM DADOS REAIS
// ==========================

const canvas =
    document.getElementById("grafico");


if (canvas && typeof Chart !== "undefined") {

    const ctx =
        canvas.getContext("2d");


    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Total de estabelecimentos",
                "Agricultura familiar"
            ],

            datasets: [{

                label:
                    "Estabelecimentos agropecuários - Brasil (Censo 2017)",

                data: [
                    5073324,
                    3897408
                ],

                backgroundColor: [
                    "#43a047",
                    "#81c784"
                ],

                borderColor: "#2e7d32",

                borderWidth: 2

            }]

        },

        options: {

            responsive:true,

            plugins: {

                legend:{
                    display:true
                },

                tooltip: {

                    callbacks: {

                        label:function(context){

                            return context.dataset.label +
                                ": " +
                                context.raw.toLocaleString("pt-BR");

                        }

                    }

                }

            },

            scales: {

                y: {

                    beginAtZero:true,

                    ticks: {

                        callback:function(value){

                            return value.toLocaleString("pt-BR");

                        }

                    }

                }

            }

        }

    });

}


// ==========================
// FORMULÁRIO
// ==========================

const formulario =
    document.querySelector(".contato form");


if (formulario) {

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
            "Mensagem enviada com sucesso! Obrigado pelo contato."
        );

        formulario.reset();

    });

}


// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

const cards =
    document.querySelectorAll(".card");


cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.03)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});


// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const botaoTopo =
    document.createElement("button");


botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

botaoTopo.setAttribute(
    "aria-label",
    "Voltar ao topo"
);


document.body.appendChild(botaoTopo);


// Mostrar botão ao rolar

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});


// Voltar ao topo

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
