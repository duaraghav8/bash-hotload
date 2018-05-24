// Fill in the below details - the file to watch & the command to run every time there's a change in the file.

const FILE = "", COMMAND = ""

const { exec } = require("child_process"), { watchFile } = require("fs")

function div() {
        console.log("-".repeat(60))
}

console.log("Watching...")
watchFile(FILE, () => {
        exec(COMMAND, (err, stdout, stderr) => {
                if (err) { console.log(err); div() }
                if (stdout) { console.log(stdout); div() }
                if (stderr) { console.log(stderr); div() }
                console.log("\n")
        })
})
