import { window, workspace } from 'vscode';

export function getActiveFilename(context: any): string {
    return (context && context.fsPath) ? context.fsPath : window.activeTextEditor?.document.fileName;
}

export function getConf(key: string){
    return workspace.getConfiguration().get<string>(key);
}

