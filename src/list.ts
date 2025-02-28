import { closeExec, readFile, writeFile } from "./utils";

export default (filter:string) => {
    const rawFile = readFile()
    const parsedFile = JSON.parse(rawFile);
    if(!parsedFile.length) closeExec("info", "Task list empty")
    if(filter) {
        if(!["done", "in progress", "todo"].includes(filter)) closeExec("error", "Invalid status filter")
        const filtered = parsedFile.filter(({ status }: { status: string, description: string }) => status === filter);
        
        closeExec("info", JSON.stringify(filtered))
    }
    closeExec("info", rawFile)
}