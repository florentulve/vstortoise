import TortoiseCommand from './TortoiseCommand';
import {getConf} from './Utils';
import * as fs from 'fs';

export default class TortoiseCommandBuilder {

    private static CONF_PATH = "TortoiseSVN.path";
    private static EXE :string = "TortoiseProc.exe";
    private static COMMAND :string =  "\"{exepath}\" /command:{command} /path:\"{filename}\"";
    private isTortoiseInPath :boolean = false;
    
    constructor(isTortoiseInPath: boolean) { 
        this.isTortoiseInPath = isTortoiseInPath;
    }

    public build(command :string, filepath :string) :TortoiseCommand{        
        let basecmd;
        const tortoiseConfPath = getConf<string>(TortoiseCommandBuilder.CONF_PATH);
        if(!this.isTortoiseInPath && tortoiseConfPath && fs.existsSync(tortoiseConfPath)){
            basecmd = `${tortoiseConfPath}\\bin\\${TortoiseCommandBuilder.EXE}`;
        }else{
            basecmd = `${TortoiseCommandBuilder.EXE}`;
        }
        const finalcmd = TortoiseCommandBuilder.COMMAND
            .replace('{exepath}', basecmd)
            .replace('{command}', command)
            .replace('{filename}', filepath);
        console.log(finalcmd);
        return new TortoiseCommand(finalcmd);
    }   
}