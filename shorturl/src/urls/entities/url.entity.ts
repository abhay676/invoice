import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity({ name: 'urls' })
export class Url {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  longUrl: string;

  @Column({ nullable: false, unique: true })
  shortUrl: string;

  @Column({ default: false })
  isExpirable: boolean;

  @Column({ nullable: true })
  expireAt: Date;

  @Column({ nullable: false })
  requestedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
