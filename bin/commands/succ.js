const prompt = require("prompt")
prompt.message = " "
prompt.delimiter = " "
exports.run = (args) => {
    console.log("Do you want free succ?")
    ask()
}

function ask() {
    prompt.start()
    prompt.get("Answer", (err, res) => {
        const answer = res.Answer.toLowerCase()
        if(answer === "yes") {
            for (let i = 0; i < 8000; i++) {
                console.log("WELL TOO BAD GET A FUCKING GIRLFRIEND OR BOYFRIEND")
            }
        } else if(answer === "no") {
            console.log("then why the fuck did you run this command lmao")
            process.exit()
        } else {
            console.log("can u say \"yes\" or \"no\"")
            ask()
        }
    })
}