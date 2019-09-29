import { Table, Column, Model, HasMany, DataType} from "sequelize-typescript";
console.log("__dirname", __dirname);

@Table({
  timestamps: true
})
export class BlockInfo extends Model<BlockInfo> {

  @Column
  size: number;

  @Column
  blockindex: number;

  @Column
  prevblock: string;

  @Column
  numoftxns: number;

  @Column(DataType.JSON)
  txns: any;

}
