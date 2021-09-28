import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1632755989845 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isPrimary: false,
            isUnique: false,
          },
          {
            name: "email",
            type: "varchar",
            isPrimary: false,
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            isPrimary: false,
            isUnique: false,
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
    await queryRunner.dropTable("users");
  }
}
