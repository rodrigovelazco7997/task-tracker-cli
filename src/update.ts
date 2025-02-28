import { closeExec, findAndUpdateById, readFile } from "./utils";

export default (id: number, description: string) => {
    if (!id || !Number(id)) closeExec("error", `Wrong id. (ID: ${id})`)
    const rawFile = readFile()
    const parsedFile = JSON.parse(rawFile);
    findAndUpdateById(id, parsedFile, { description })
}