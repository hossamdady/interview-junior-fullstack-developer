import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';


@Injectable()
export class CitiesService {

    private cities = [];

    constructor(){
        this.loadCities();
    }

    private async loadCities() {
        try {
            const rawData = await fs.readFile('./../cities.json', 'utf-8');
            this.cities = JSON.parse(rawData);
        }catch(err){
            console.log(err);
        }
    }

    getCities(){
        return this.cities;
    }
}
