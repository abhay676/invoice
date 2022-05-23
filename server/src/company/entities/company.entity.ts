import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Entity({ name: 'company' })
export class Company {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  pincode: number;

  @OneToMany(() => User, (user) => user.id)
  users: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
