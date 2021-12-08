import { Column, IsUUID, Model, PrimaryKey, Table} from "sequelize-typescript";
import UUIDColumn from "./decorators";

@Table({tableName: 'starShips'})
export class StarShip extends Model<StarShip> {
  @PrimaryKey
  @IsUUID(4)
  @UUIDColumn()
  @Column({})
  id: string;

  @Column
  name: string

  @Column
  weapon: number

  @Column
  defense: number
  
  @Column
  crew: string

}