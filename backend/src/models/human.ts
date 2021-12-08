import { Column, IsUUID, Model, PrimaryKey, Table} from "sequelize-typescript";
import UUIDColumn from "./decorators";

@Table({tableName: 'humans'})
export class Human extends Model<Human> {
  @PrimaryKey
  @IsUUID(4)
  @UUIDColumn()
  @Column
  id: string;

  @Column
  name: string

  @Column
  age: string
  
  @Column
  mass: string
}