import { v4 as uuid } from "uuid";
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("transactions")
class Transaction {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  product: string;

  @Column()
  buyer: string;

  @Column()
  amount: number;

  @Column()
  total_price: number;

  @Column()
  observation: string;

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

export { Transaction };
