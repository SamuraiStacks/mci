module.exports = {
    write: (str = '') => {
        process.stdout.cursorTo(0);
        process.stdout.clearLine(1);
        process.stdout.write(str);
    },
    getIP: () => {
        let ipparts = []
        for (let i = 0; i < 4; i++) {
            ipparts.push(Math.floor(Math.random() * 255))
        }
        return ipparts.join(".")
    }
}