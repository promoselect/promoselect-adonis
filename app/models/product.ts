import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
// Modelos
import ProductAttributeModel from '#models/product/attribute'

export default class Product extends BaseModel {
  static table = 'oc_product'

  @column({ isPrimary: true, columnName: 'product_id' })
  declare id: number
  @column()
  declare model: string

  @column({ columnName: 'price' })
  declare cost: number

  @column()
  declare image: string

  @column()
  declare status: boolean

  @hasMany(() => ProductAttributeModel, { foreignKey: 'product_id' })
  declare productAttributes: HasMany<typeof ProductAttributeModel>
}
