import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { UpdateAnimalDto } from '../dto/update-animal.dto';
import { AnimalService } from '../animal.service';

@Injectable()
export class DogService implements AnimalService {
  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
