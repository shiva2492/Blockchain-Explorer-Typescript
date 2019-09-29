import { Table, Column, Model, HasMany } from "sequelize-typescript";
console.log("__dirname", __dirname);

@Table({
  timestamps: true
})
export class Block extends Model<Block> {

  @Column
  height: number;

  @Column
  hash: String;

  @Column
  time: number;

  @Column
  mainchain: boolean;
  defaultValue: true;


}
