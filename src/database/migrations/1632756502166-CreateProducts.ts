import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1632756502166 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "registered_by",
            type: "uuid",
            isPrimary: false,
            isUnique: false,
          },
          {
            name: "name",
            type: "varchar",
            isPrimary: false,
          },
          {
            name: "price",
            type: "number",
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
        foreignKeys: [
          {
            name: "FKProductUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["registered_by"],
            onUpdate: "SET NULL",
            onDelete: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
