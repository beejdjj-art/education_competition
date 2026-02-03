import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
  } from "typeorm";
  import { Subject } from "./Subject";
  import { Teacher } from "./Teacher";
  
  @Entity()
  export class Group {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Subject)
    subject!: Subject;
  
    @ManyToOne(() => Teacher)
    teacher!: Teacher;
  
    @CreateDateColumn()
    createdAt!: Date;
  }
  