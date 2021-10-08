import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { UpdateAnimalDto } from '../dto/update-animal.dto';
import { AnimalService } from '../animal.service';

@Injectable()
export class CatService implements AnimalService {
  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
