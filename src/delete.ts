import { closeExec, readFile, writeFile } from "./utils"

export default (id:string) => {
    if(!id || !Number(id)) closeExec("error", `Wrong id. (ID: ${id})`) 
    const rawFile = readFile()
    const parsedFile = JSON.parse(rawFile);
    if(!parsedFile[id]) closeExec("info", `Task non-existent. (ID: ${id})`)
    delete parsedFile[id]
    writeFile(JSON.stringify(parsedFile)) 
    closeExec("info", `Task ${id} succesfully deleted`)
}