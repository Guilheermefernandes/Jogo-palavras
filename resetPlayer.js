document.querySelector('#resetPlayer').addEventListener('click', () => {
    localStorage.clear();
    restartGame();
})
