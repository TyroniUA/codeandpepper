import {Column, DataType, Sequelize} from 'sequelize-typescript'

export default function UUIDColumn(options?: any) {
  return Column(Object.assign({}, options, {
    defaultValue: (options && options.noDefault) ? undefined : Sequelize.literal('uuid_generate_v4()'),
    type: DataType.UUID,
  }));
}