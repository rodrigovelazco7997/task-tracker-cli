import { closeExec, readFile, writeFile } from "./utils"

export default (description: string) => {
    if (!description || typeof description !== "string")
        closeExec("error", `Invalid description. (input: ${description})`);
    const rawfileContent = readFile()
    const parsedContent = JSON.parse(rawfileContent);
    const lastTask = parsedContent[parsedContent.length -1];
    const newId = lastTask ? Number(lastTask.id) + 1 : 1
    const newTask = {
        id: newId,
        description,
        status: "todo"
    }
    writeFile(JSON.stringify([...parsedContent, newTask]))
    closeExec("info", `Task added successfully (ID: ${newId})`)
}

