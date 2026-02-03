import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
  } from "typeorm";
  import { Student } from "./Student";
  import { Group } from "./Group";
  
  @Entity()
  export class Payment {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Student)
    student!: Student;
  
    @ManyToOne(() => Group)
    group!: Group;
  
    @Column()
    amount!: number;
  
    @Column()
    month!: string;
  
    @Column()
    status!: "PAID" | "UNPAID";
  
    @CreateDateColumn()
    paidAt!: Date;
  }
  