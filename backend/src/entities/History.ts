import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class History {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    adminId!: number;
  
    @Column()
    action!: string;
  
    @Column()
    entity!: string;
  
    @Column()
    entityId!: number;
  
    @CreateDateColumn()
    createdAt!: Date;
  }
  