// Paquetes
import type { HttpContext } from '@adonisjs/core/http'
// Modelos
import ColorModel from '#models/color_info'
import ProductModel from '#models/product'

export default class ReplicateController {
  async index({}: HttpContext) {
    const colors = await ColorModel.all()
    const products = await ProductModel.all()
    const productsWithAttributes = []
    for (const product of products) {
      if (product.productAttributes && product.productAttributes.length > 0) {
        productsWithAttributes.push(product)
      }
    }
    return {
      products: productsWithAttributes,
      colors,
    }
  }
}
