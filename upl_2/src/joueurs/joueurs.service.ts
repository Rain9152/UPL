import { Injectable } from '@nestjs/common';

@Injectable()
export class JoueursService {


    async createPlayers(pseudos: string[]){
        const test = pseudos;
        return {test};
    }
}
