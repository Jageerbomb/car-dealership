import { Controller } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    getAllCars() {
        return ['Toyota', 'Honda', 'Jeep', 'Kia']
    }
}
