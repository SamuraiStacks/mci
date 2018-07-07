exports.run = () => {
    const clear = require("clear")
    clear()
    console.log("Rob > Im going to sneeze!")
    setTimeout(() => {
        console.log("Rob > Aaaaaah..")
    }, 2000)
    setTimeout(() => {
        console.log("Chooooooooooo")
        for (let i = 0; i < 1024; i++) {
            console.log(`${"o".repeat("101")}`)
        }
    }, 3000)
}