let darkMode = localStorage.getItem("darkMode");
const modeToggle = document.getElementById('darkModeToggle');

const tulipsText = document.getElementById('tulipsText');

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    rosesText.innerHTML = `Roses come in many different colors and have their own unique meanings.<br>Pink roses symbolize admiration... Orange roses symbolize passion... Yellow roses symbolize friendship... and the list goes on.`;
    gladiolusText.innerHTML = `These are a type of flower called the gladiolus, also known as the “sword flower”.<br>As you might guess, they represent strength of character. Someone who is honest, with strong moral values... Someone who stands by their convictions...`;
    cactusText.innerHTML = `Cacti are very sturdy and resilient plants by nature. They don't need much care and can survive even in seemingly impossible conditions.`;
    tulipsText.innerHTML = `And thesse... These are white tulips. Tulips aren't very flashy plants. They're not too big or small, not too elaborate or flamboyant.<br>If I could put it in another way... I guess I would say that... they're comfortable. Simple, modest, and perfect.`;
    localStorage.setItem('darkMode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    rosesText.innerHTML = `These are roses!<br>Roses come in many different colors and have their own unique meanings.<br>Pink roses symbolize admiration... Orange roses symbolize passion... Yellow roses symbolize friendship... and the list goes on!`;
    gladiolusText.innerHTML = `These are a type of flower called the gladiolus!<br>also known as the “sword flower”!<br>As you might guess, they represent strength of character. Someone who is honest, with strong moral values... Someone who stands by their convictions...`;
    cactusText.innerHTML = `This is a cactus!<br>Cacti are very sturdy and resilient plants by nature.<br>They don't need much care and can survive even in seemingly impossible conditions!`;
    tulipsText.innerHTML = `These are white tulips.<br>Plain, and simple, and bulbous...<br>I don't know... I just think it's cute.`;
    localStorage.setItem('darkMode', null);
}

if(darkMode === "active") enableDarkMode();

modeToggle.addEventListener("click", ()=> {
    darkMode = localStorage.getItem('darkMode');
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})
