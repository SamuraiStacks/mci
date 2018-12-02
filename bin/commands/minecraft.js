exports.run = () => {
    const player = new list({
        name: "Main Menu",
        message: "You see a minecraft crEEper. WHat do you DO??",
        choices: [
            "run away liek a baby",
            "attacc",
            "nothing"
        ]
    })
    player.ask((choice) => {
        if(choice.startsWith("run")) {
            console.log("You ran away like a baby. go cry to yo mama")
        } else if(choice === "attacc") {
            console.log("you attacc but you no protecc so you get bent. you a ded boi")
        } else {
            console.log("well you did nothing so you ded")
        }
    })
}
