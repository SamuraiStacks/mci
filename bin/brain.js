#! /usr/bin/env node
let args = process.argv.slice(2)

try {
    const cmd = require(`./commands/${args[0]}`)
    cmd.run(args)
} catch(err) {
    if(err.code === "MODULE_NOT_FOUND") {
        const cmd = require(`./commands/help.js`)
        cmd.run(args)
    } else {
        console.log(`Error: ${err.message}`)
    }
}