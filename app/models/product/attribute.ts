import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProductAttribute extends BaseModel {
  static table = 'oc_product_attribute'

  @column({ isPrimary: true, columnName: 'product_id' })
  declare productId: number

  @column()
  declare text: string
}
