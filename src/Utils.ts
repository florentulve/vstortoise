import { window } from 'vscode';
import {workspace as vsworkspace} from 'vscode';

export function getActiveFilename(context: any): string {
    return (context && context.fsPath) ? context.fsPath : window.activeTextEditor.document.fileName;
}

export function getConf<T>(key:string){
    return vsworkspace.getConfiguration().get<string>(key);
}

