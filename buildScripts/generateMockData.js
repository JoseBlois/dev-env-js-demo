import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

//jsf(schema) GENERATES RANDOM DATA THAT WHY WE HAVE TO STRINGIFY IT
const json = JSON.stringify(jsf(schema));

//we pass json to fs.writeFile and create a json file and after that we get a messsage
fs.writeFile('./src/api/db.json',json,(err)=>{
    if(err){
        return console.log(chalk.red(err))
    }else{
        console.log(chalk.green('Mock data generated'))
    }

})