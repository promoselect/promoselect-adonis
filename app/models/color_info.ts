import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ColorInfo extends BaseModel {
  static table = 'oc_color_info'

  @column({ isPrimary: true, columnName: 'color_info_id' })
  declare id: number

  @column()
  declare name: string

  @column()
  declare hex: string

  @column()
  declare image: string
}
