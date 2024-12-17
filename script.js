document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});

// Criar o elemento do cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Função para criar o rastro de luz
function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    trail.style.left = `${x - 7}px`; // Ajuste da posição
    trail.style.top = `${y - 7}px`; // Ajuste da posição
    document.body.appendChild(trail);

    // Remover o rastro após a animação
    setTimeout(() => {
        trail.remove();
    }, 20); // Tempo da animação (500ms)
}

// Movimentar o cursor com o mouse
document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    // Posicionar o cursor
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    // Criar o rastro de luz
    createTrail(x, y);
});