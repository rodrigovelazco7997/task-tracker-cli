import fs from "fs";
import { closeExec, readFile } from "./src/utils";
import add from "./src/add";
import drop from "./src/delete";
const createTaskFile = () => fs.writeFileSync("task-file.json", JSON.stringify({}));


(()=>{
    try {
        const taskFile = readFile()
    } catch (error:any) {
        if(error.code === 'ENOENT') createTaskFile();
    }
    const cliData = process.argv.slice(2)
    if (!cliData.length) closeExec("info", "Empty command")
    const [action, secondParam] = cliData
    switch (action) {
        case "add": add(secondParam)
        case "delete": drop(secondParam)
        default: closeExec("error", `Wrong command. (Command: ${action})`)
    }
    console.log("cliData", cliData);
})();