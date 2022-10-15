import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';
import { Car } from './interfaces/cars.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },{
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },{
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },{
            id: uuid(),
            brand: 'Kia',
            model: 'Morning'
        }
    ];

    findAll(){
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException('Auto con el id '+id+' no encontrado');

        return car;
    }

    create(createCarDTO: CreateCarDTO) {
        const newCar : Car = {
            id: uuid(),
            ...createCarDTO
        }
        this.cars.push(newCar);
        return newCar;
    }

    update(id: string, updateCarDTO: UpdateCarDTO) {
        let carDB = this.findById(id);
        if(updateCarDTO.id && updateCarDTO.id !== id) throw new BadRequestException("Id de Car invalido")
        this.cars = this.cars.map( car => {
            if(car.id == id) {
                carDB = {
                    ...carDB,
                    ...updateCarDTO,
                    id
                }
                return carDB;
            }
        })
        return carDB;
    }

    delete(id: string) {
        let car = this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
}
