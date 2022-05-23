import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Exclude, Expose } from 'class-transformer';
@Entity({ name: 'company' })
export class Company {
  @Exclude()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, enum: ['₹', '$', '€'] })
  currency: string;

    @Exclude()
  @Column({ nullable: false })
  address: string;

  @Exclude()
  @Column({ nullable: false })
  state: string;

  @Exclude()
  @Column({ nullable: false })
  country: string;

  @Exclude()
  @Column({ nullable: false })
  pincode: number;

  @Exclude()
  @OneToMany(() => User, (user) => user.id)
  users: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Expose()
  get addr(): string {
    return `${this.address}, ${this.state}, ${this.pincode}`;
  }

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
