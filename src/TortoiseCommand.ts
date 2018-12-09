import {exec as child_exec} from 'child_process';

export default class TortoiseCommand {

    private command :string = "";
    
    constructor(command :string) { 
        if(command)
            this.command = command;
        else{
            throw new Error(`Command is empty`);
        }
    }

    /**
     * Exec the command
     */
    public exec(callback?: (error: Error | null, stdout: string, stderr: string) => void){
        let callb = callback || ((error :Error | null, stdout :string, stderr :string)=>{
            console.log(error);
            console.log(stdout);
            console.error(stderr);
            return;
        });
        child_exec(this.command, callb);
    }
}