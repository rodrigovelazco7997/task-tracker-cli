import fs from "fs";

const fileName = "task-file.json"

export const closeExec = (logType: "error" | "log" | "info", message: string) => {
    console[logType](message)
    process.exit(0)
}

export const readFile = () => fs.readFileSync(fileName, "utf-8")

export const writeFile = (content: string) => fs.writeFileSync(fileName, content)

export interface ITask {
    id: number;
    description?: string;
    status?: "done" | "todo" | "in progress";
}

export const findAndUpdateById = (id: number, taskList: ITask[], payload: Omit<ITask, "id">) => {
    const findedTaskIndex = taskList.findIndex((task) => task.id === id)

    if (findedTaskIndex < 0) closeExec("info", `Task non-existent. (ID: ${id})`)

    taskList[findedTaskIndex] = { ...taskList[findedTaskIndex], ...payload };
    writeFile(JSON.stringify(taskList))
    closeExec("info", `Task ${id} succesfully updated`)
}