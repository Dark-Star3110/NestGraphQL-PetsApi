import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[];
}
