import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
// Modelos
import ProductAttributeModel from '#models/product/attribute'

export default class Attribute extends BaseModel {
  static table = 'oc_attribute'

  @column({ isPrimary: true, columnName: 'attribute_id' })
  declare id: number

  @hasMany(() => ProductAttributeModel)
  declare productAttributes: HasMany<typeof ProductAttributeModel>
}
