import { closeExec, findAndUpdateById, readFile, writeFile } from "./utils";

export default (id:number) => {
    if(!id || !Number(id)) closeExec("error", `Wrong id. (ID: ${id})`) 
    const rawFile = readFile()
    const parsedFile = JSON.parse(rawFile);
    findAndUpdateById(id, parsedFile, { status: "in progress" })
}