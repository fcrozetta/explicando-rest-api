import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';
import {Request } from 'express'
var fs = require('fs');

@Controller('values')
export class ValuesController {
    nameFile = "/home/fcrozetta/projetos/beta/nomes.txt"
    @Get()
    getValues(): string {
        let names = fs.readFileSync(this.nameFile).toString().split('\n')
        return names
    }
    
    @Post()
    postValue(@Body() req ): string{
        fs.appendFile(this.nameFile,req['name']+"\n",(err)=>{
            if (err) {
                console.log("ERRO ao gravar arquivo de nomes")
                throw err;
            }
        })
        return req.name
    }

    
}
