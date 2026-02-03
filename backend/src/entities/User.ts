import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Teacher } from "./Teacher";
import { UserRole } from "./UserRole";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.TEACHER,
  })
  role!: UserRole;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToOne(() => Teacher, (teacher) => teacher.user)
  @JoinColumn()
  teacher!: Teacher;
}

