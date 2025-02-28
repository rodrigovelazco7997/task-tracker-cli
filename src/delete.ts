import { isJsxClosingFragment } from 'typescript';
import { closeExec, readFile, writeFile, ITask } from './utils';

export default (id: number) => {
    if (!id || !Number(id)) closeExec("error", `Wrong id. (ID: ${id})`)
    const rawFile = readFile()
    const parsedFile = JSON.parse(rawFile);
    const findedTaskIndex = parsedFile.findIndex((task: ITask) => task.id === id)
    if (findedTaskIndex < 0) closeExec("info", `Task non-existent. (ID: ${id})`)
    parsedFile.splice(findedTaskIndex, 1);
    writeFile(JSON.stringify(parsedFile))
    closeExec("info", `Task ${id} succesfully deleted`)
}