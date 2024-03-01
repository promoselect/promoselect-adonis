import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
// Modelos
import ProductModel from '#models/product'

export default class ProductAttribute extends BaseModel {
  static table = 'oc_product_attribute'

  @column({ isPrimary: true })
  declare id: number
  @hasOne(() => ProductModel)
  declare product: HasOne<typeof ProductModel>
}
