import { closeExec, readFile, writeFile } from "./utils"

export default (description: string) => {
    if (!description || typeof description !== "string")
        closeExec("error", `Invalid description. (input: ${description})`);
    const rawfileContent = readFile()
    const parsedContent = JSON.parse(rawfileContent);
    const lastKey = Object.keys(parsedContent).pop();
    const newId = lastKey ? Number(lastKey) + 1 : 1
    const newTask = {
        [newId]: {
            description,
            status: "todo"
        },
    };
    writeFile(JSON.stringify({ ...parsedContent, ...newTask }))
    closeExec("info", `Task added successfully (ID: ${newId})`)
}

