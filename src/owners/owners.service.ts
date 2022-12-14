import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(newOwner);
  }

  findAll() {
    return this.ownerRepository.find({
      relations: {
        pets: true,
      },
    });
  }

  findOne(id: number) {
    return this.ownerRepository.findOne({
      where: { id: id },
      relations: { pets: true },
    });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner: ${updateOwnerInput}`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
