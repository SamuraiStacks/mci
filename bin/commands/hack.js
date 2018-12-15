let i = 0;

exports.run = (args, utils) => {
    const hacks = [`Hacking ${args[1]}'s computer...`, "Getting their IP", `IP Address found! ${utils.getIP()}`, "Tracing their location..", "Location found: 69 Coke Street, Meme Town", "Dicking Girls..", "Hot Stuff has come!"]
    if(!args[1]) return console.log("Who to hacc?")
    setTimeout(useHacks, 3000);
    function useHacks() {
        utils.write(hacks[i++])
        if (i < hacks.length) setTimeout(useHacks, 3000);
    }
}