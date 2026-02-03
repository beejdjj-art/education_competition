import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
  } from "typeorm";
  import { Group } from "./Group";
  import { Student } from "./Student";
  
  @Entity()
  export class GroupStudent {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Group)
    group!: Group;
  
    @ManyToOne(() => Student)
    student!: Student;
  
    @CreateDateColumn()
    joinedAt!: Date;
  }

  