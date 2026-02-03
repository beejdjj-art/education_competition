import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
  } from "typeorm";
  import { User } from "./User";
  
  @Entity()
  export class Teacher {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @OneToOne(() => User, (user) => user.teacher)
    @JoinColumn()
    user!: User;
  
    @Column()
    salaryPercent!: number;
  
    @CreateDateColumn()
    createdAt!: Date;
  }
  