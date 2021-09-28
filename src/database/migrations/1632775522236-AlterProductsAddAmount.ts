import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProductsAddAmount1632775522236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "products",
      new TableColumn({
        name: "amount",
        type: "integer",
        default: 1,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("products", "amount");
  }
}
