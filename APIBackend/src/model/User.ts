import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: User.NOTE_TABLE_NAME,
})
export class User extends Model {
  public static NOTE_TABLE_NAME = "userApp" as string;
  public static NOTE_ID = "id" as string;
  public static NOTE_NAME = "name" as string;
  public static NOTE_PASSWORD = "passWord" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: User.NOTE_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: User.NOTE_NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    field: User.NOTE_PASSWORD,
  })
  passWord!: string;
}