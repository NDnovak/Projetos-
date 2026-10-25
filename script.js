
"use strict";

// =========================
// 1. ELEMENTOS DA PÁGINA
// =========================

const coracao = document.getElementById("coracao");
const instrucao = document.getElementById("instrucao");
const fundoParticulas = document.getElementById("fundo-particulas");
const mensagemFlutuante = document.getElementById("mensagem-flutuante");

// Mensagens exibidas ao clicar no coração
const mensagens = [
    "Você é especial ❤️",
    "Nunca se esqueça disso ✨",
    "Você merece coisas lindas 💗",
    "O mundo fica melhor com você 🌷",
    "Espalhe amor por onde passar 💕"
];

const cores = ["#ff4f87", "#ffc1d7", "#ff80ab", "#ffffff"];

// =========================
// 2. CRIAR UMA PARTÍCULA
// =========================

function criarParticula(opcoes = {}) {
    const particula = document.createElement("span");

    particula.classList.add("particula");
    particula.textContent = Math.random() > 0.5 ? "♥" : "♡";

    particula.style.setProperty(
        "--x",
        `${Math.random() * 100}vw`
    );

    particula.style.setProperty(
        "--tamanho",
        `${Math.random() * 18 + 12}px`
    );

    particula.style.setProperty(
        "--duracao",
        `${Math.random() * 3 + 4}s`
    );

    particula.style.setProperty(
        "--desvio",
        `${Math.random() * 120 - 60}px`
    );

    particula.style.setProperty(
        "--cor",
        cores[Math.floor(Math.random() * cores.length)]
    );

    fundoParticulas.appendChild(particula);

    particula.addEventListener("animationend", () => {
        particula.remove();
    }, { once: true });
}

// =========================
// 3. PARTÍCULAS NO FUNDO
// =========================

const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (!movimentoReduzido.matches) {
    // Cria alguns corações ao abrir a página
    for (let i = 0; i < 12; i++) {
        const particula = document.createElement("span");

        particula.classList.add("particula");
        particula.textContent = "♡";

        particula.style.setProperty(
            "--x",
            `${Math.random() * 100}vw`
        );

        particula.style.setProperty(
            "--tamanho",
            `${Math.random() * 15 + 12}px`
        );

        particula.style.setProperty(
            "--duracao",
            `${Math.random() * 5 + 5}s`
        );

        particula.style.setProperty(
            "--desvio",
            `${Math.random() * 100 - 50}px`
        );

        particula.style.setProperty(
            "--cor",
            cores[Math.floor(Math.random() * cores.length)]
        );

        // Faz cada coração começar em uma altura diferente
        particula.style.bottom = `${Math.random() * 100}vh`;
        particula.style.animationDelay = `${Math.random() * -8}s`;

        fundoParticulas.appendChild(particula);
    }

    // Mantém uma quantidade moderada de corações no fundo
    setInterval(() => {
        if (fundoParticulas.childElementCount < 30) {
            criarParticula();
        }
    }, 650);
}

// =========================
// 4. ANIMAÇÃO AO CLICAR
// =========================

coracao.addEventListener("click", () => {
    // Reinicia a animação de explosão
    coracao.classList.remove("explodir");

    // Permite que a animação seja reproduzida novamente
    void coracao.offsetWidth;

    coracao.classList.add("explodir");

    // Cria uma explosão de pequenos corações
    for (let i = 0; i < 18; i++) {
        const particula = document.createElement("span");

        particula.classList.add("particula");
        particula.textContent = Math.random() > 0.3 ? "♥" : "♡";

        particula.style.left = `${Math.random() * 100}vw`;
        particula.style.bottom = `${Math.random() * 30}vh`;

        particula.style.setProperty(
            "--x",
            `${Math.random() * 100}vw`
        );

        particula.style.setProperty(
            "--tamanho",
            `${Math.random() * 22 + 14}px`
        );

        particula.style.setProperty(
            "--duracao",
            `${Math.random() * 2 + 2}s`
        );

        particula.style.setProperty(
            "--desvio",
            `${Math.random() * 200 - 100}px`
        );

        particula.style.setProperty(
            "--cor",
            cores[Math.floor(Math.random() * cores.length)]
        );

        document.body.appendChild(particula);

        particula.addEventListener("animationend", () => {
            particula.remove();
        }, { once: true });
    }

    // Escolhe uma mensagem aleatória
    const indice = Math.floor(Math.random() * mensagens.length);

    instrucao.textContent = mensagens[indice];

    // Mostra uma mensagem flutuante
    mensagemFlutuante.textContent = mensagens[indice];
    mensagemFlutuante.classList.remove("mostrar");

    void mensagemFlutuante.offsetWidth;

    mensagemFlutuante.classList.add("mostrar");
});
