let darkMode = localStorage.getItem("darkMode");
const modeToggle = document.getElementById('darkModeToggle');

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    rosesText.innerHTML = `Rosas vêm em diferentes formatos e cores, e cada uma delas possuem seus próprios significados. Rosas rosadas simbolizam admiração... Laranjas simbolizam paixão... Amarelas amizade... E a lista continua.`;
    gladiolusText.innerHTML = `Este é um tipo de flor chamada de gladiana, também conhecidas como “flor de espada”.<br>Como você já pode imaginar, Elas representam força de carácter. Alguém que é honesto e com fortes valores morais... Alguém que se ergue as suas convicções...`;
    cactusText.innerHTML = `Cactos são bem fortes e resilientes por natureza. Eles não precisam de muito cuidado e podem sobreviver a situações quase impossíveis.`;
    tulipsText.innerHTML = `Estas... Estas são tulipas brancas. Tulipas não são plantas muito chamativas. Elas não são grandes de mais ou muito pequenas, não muito arranjadas ou extravagantes.<br>Se eu pudesse deixar de outra maneira... Eu acho que eu posso dizer que... Elas são confortantes. Simples, modestas, e perfeitas.`;
    localStorage.setItem('darkMode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    rosesText.innerHTML = `Estats São rosas!<br>Rosas vêm em diferentes formatos e cores, e cada uma delas possuem seus próprios significados. Rosas rosadas simbolizam admiração... Laranjas simbolizam paixão... Amarelas amizade... E a lista continua!`;
    gladiolusText.innerHTML = `Este é um tipo de flor chamada de gladiana!<br>Também conhecidas como “flor de espada”.<br>Como você já pode imaginar, Elas representam força de carácter. Alguém que é honesto e com fortes valores morais... Alguém que se ergue as suas convicções...`;
    cactusText.innerHTML = `Isso é um cacto!<br>Cactos são bem fortes e resilientes por natureza.<br>Eles não precisam de muito cuidado e podem sobreviver a situações quase impossíveis!`;
    tulipsText.innerHTML = `Essas são tulipas brancas.<br>Modestas, simples, e bulbosas...<br> Sei lá... Eu so acho fofo.`;
    localStorage.setItem('darkMode', null);
}

if(darkMode === "active") enableDarkMode();

modeToggle.addEventListener("click", ()=> {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})