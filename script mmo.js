let player = {
    name: "Игрок",
    level: 1,
    experience: 0
};

function explore() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber > 5) {
        document.getElementById("game-message").innerText = "Вы нашли сокровище и получили опыт!";
        player.experience += 10;
    } else {
        document.getElementById("game-message").innerText = "Вы наткнулись на монстра и потеряли здоровье!";
        player.experience -= 5;
    }
    checkLevel();
}

function checkLevel() {
    if (player.experience >= 50) {
        player.level++;
        document.getElementById("game-message").innerText += "\nПоздравляем, вы достигли нового уровня!";
        player.experience = 0;
    }
}
