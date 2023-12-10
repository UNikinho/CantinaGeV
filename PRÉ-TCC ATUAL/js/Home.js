var typed = new Typed(".Textos", {
    strings: ["Encomende.", "Faça seu Pedido já.", "O que você está esperando?"],
    typeSeed: 100,
    backSeed: 100,
    backDeplay: 1000,
    loop: true
})
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');

    // Muda o ícone do menu entre barras e "X"
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('ativo');
    });
});
