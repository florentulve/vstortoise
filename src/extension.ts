
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, commands, window } from 'vscode';
import { getActiveFilename } from './Utils'
import {sync as cmdExists} from 'command-exists';
import TortoiseCommandBuilder from './TortoiseCommandBuilder';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('"tortoise-svn" is now active');

    const commandBuilder = new TortoiseCommandBuilder(cmdExists('TortoiseProc.exe'));

    let svnLogCommand = commands.registerCommand('vstortoise.svnLog', (commandContext :any) => {
        commandBuilder.build('log', getActiveFilename(commandContext)).exec()
    });

    let svnCommitCommand = commands.registerCommand('vstortoise.svnCommit', (commandContext :any) => {
        commandBuilder.build('commit',getActiveFilename(commandContext)).exec()

    });

    let svnCommitBlame = commands.registerCommand('vstortoise.svnBlame', (commandContext :any) => {
        commandBuilder.build('blame', getActiveFilename(commandContext)).exec()

    });

    let svnCommitDiff = commands.registerCommand('vstortoise.svnDiff', (commandContext :any) => {
        commandBuilder.build('diff', getActiveFilename(commandContext)).exec()

    });

    let svnCommitRevert = commands.registerCommand('vstortoise.svnRevert', (commandContext :any) => {
        //Force save changes befor revert until find a way to reload the vscode.window.activeTextEditor.document
        window.activeTextEditor?.document.save().then(()=>{
            commandBuilder.build('revert', getActiveFilename(commandContext)).exec();
        })
    });

    let svnUpdateCommand = commands.registerCommand('vstortoise.svnUpdate', (commandContext :any) => {
        commandBuilder.build('update', getActiveFilename(commandContext)).exec()

    });

    context.subscriptions.push(svnLogCommand);
    context.subscriptions.push(svnCommitCommand);
    context.subscriptions.push(svnCommitBlame);
    context.subscriptions.push(svnCommitDiff);
    context.subscriptions.push(svnCommitRevert);
    context.subscriptions.push(svnUpdateCommand);

}

// this method is called when your extension is deactivated
export function deactivate(){
    return null;
}