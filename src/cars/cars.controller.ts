import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['Toyota', 'Honda', 'Jeep', 'Kia'];

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: number){
        return {
            id: id,
            car: this.cars[id]
        };
    }
}
