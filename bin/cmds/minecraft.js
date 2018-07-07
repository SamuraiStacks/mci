exports.run = () => {
    let prompt = require("prompt")
    console.log("so i need your username, so type it in")
    prompt.message = '';
    prompt.start()

    const mcname = {
        properties: {
          mcname: {
            message: 'put you crap name',
            required: true
          }
        }
      };

    prompt.get(mcname, function(err, res) {
        console.log(`Ok "${res.mcname}" you see a creeper what do you want to do?`)
        console.log("1.> run away liek a baby\n2.> attacc\n3.> nothing")
        prompt.message = '';
        prompt.start()

        const choiceThing = {
            properties: {
              choice: {
                pattern: /^[0-3]/,
                message: 'choose a number, 1, 2 or 3 oml',
                required: true
              }
            }
          };
        prompt.get(choiceThing, function(err, res) {
            switch (res.choice) {
                case "1":
                    console.log("You ran away like a baby. go cry to yo mama")
                    break;
                case "2":
                    console.log("you attacc but you no protecc so you get bent. you a ded boi")
                    break;
                case "3":
                    console.log("well you did nothing so you ded")
                    break;
                default:
                    break;
            }
        })
    })
}