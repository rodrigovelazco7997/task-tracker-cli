import fs from "fs";

const fileName = "task-file.json"

export const closeExec = (logType: "error" | "log" | "info", message: string) => {
    console[logType](message)
    process.exit(0)
}

export const readFile = () => fs.readFileSync(fileName, "utf-8")

export const writeFile = (content: string) => fs.writeFileSync(fileName, content)