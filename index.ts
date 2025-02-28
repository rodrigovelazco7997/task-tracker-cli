import fs from "fs";
import { closeExec, readFile } from "./src/utils";
import add from "./src/add";
import drop from "./src/delete";
import update from "./src/update";
import markInProgress from "./src/mark-in-progress";
import markDone from "./src/mark-done";
import list from "./src/list";
const createTaskFile = () => fs.writeFileSync("task-file.json", JSON.stringify([]));


(() => {
    try {
        const taskFile = readFile()
    } catch (error: any) {
        if (error.code === 'ENOENT') createTaskFile();
    }
    const cliData = process.argv.slice(2)
    if (!cliData.length) closeExec("info", "Empty command")
    const [action, secondParam, thirdParam] = cliData
    switch (action) {
        case "add": add(secondParam)
        case "delete": drop(Number(secondParam))
        case "update": update(Number(secondParam), thirdParam)
        case "mark-in-progress": markInProgress(Number(secondParam))
        case "mark-done": markDone(Number(secondParam))
        case "list": list(secondParam)
        default: closeExec("error", `Wrong command. (Command: ${action})`)
    }
    console.log("cliData", cliData);
})();