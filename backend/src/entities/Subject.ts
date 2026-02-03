import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class Subject {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    name!: string;
  
    @Column()
    price!: number;
  
    @CreateDateColumn()
    createdAt!: Date;
  }
  