import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Product, (product) => product.registered_by)
  products: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
