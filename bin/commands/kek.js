const cc = require("cancercase")
exports.run = (args) => {
    const cancercase = new cc(args[1] ? args.join(" ") : "kek doesnt put what to kek so u get kekd nub")
    console.log(cancercase.cancerify())
}