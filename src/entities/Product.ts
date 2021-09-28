import { v4 as uuid } from "uuid";
import {
  Entity,
  PrimaryColumn,
  Column,
  JoinColumn,
  OneToOne,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity("products")
class Product {
  @PrimaryColumn()
  readonly id: string;

  @ManyToOne(() => User, (user) => user.products)
  registered_by: User;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Product };
