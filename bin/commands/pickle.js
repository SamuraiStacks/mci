exports.run = (args) => {
    if(!args[1]) {
        console.log(`Your pickle is:\n8${"=".repeat(Math.floor(Math.random() * 18))}D`)
    } else {
        console.log(`${args.slice(1).join(" ")}'s pickle is:\n8${"=".repeat(Math.floor(Math.random() * 18))}D`)
    }
}