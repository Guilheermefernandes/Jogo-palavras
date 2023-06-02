let elementAttempts = document.querySelector('.attempts')
setInterval(() => {
    elementAttempts.innerHTML = `Tentativas restantes: <strong style="text-decoration: underline;">" ${life} "</strong>`
}, 100);
