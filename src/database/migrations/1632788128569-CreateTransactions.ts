import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1632788128569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "product",
            type: "varchar",
            isPrimary: false,
          },
          {
            name: "buyer",
            type: "varchar",
            isPrimary: false,
          },
          {
            name: "amount",
            type: "integer",
            isPrimary: false,
          },
          {
            name: "total_price",
            type: "number",
            isPrimary: false,
          },
          {
            name: "observation",
            type: "varchar",
            isPrimary: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
