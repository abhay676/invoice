import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { Company } from 'src/company/entities/company.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Exclude()
  @Column({ nullable: false, unique: true })
  clientId: string; // chowkidar key

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

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

  @Column({ nullable: false, enum: ['active', 'inactive'] })
  status: string;

  @Exclude()
  @OneToMany(() => Invoice, (invc) => invc.id)
  invoices: Invoice[];

  @Exclude()
  @ManyToOne(() => Company, (cmp) => cmp.id)
  company: Company;

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
