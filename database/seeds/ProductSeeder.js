'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Product = use('App/Models/Product')
const Type = use('App/Models/Type')
const Size = use('App/Models/Size')

class ProductSeeder {
  async run () {
    const listProducts = [
      {
        name: 'Pizzas',
        thumbnail: 'pizzas.jpg',
        description:
          'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.'
      },
      {
        name: 'Massas',
        thumbnail: 'massas.jpg',
        description:
          '10 tipos de massas com diferentes molhos para te satisfazer.'
      },
      {
        name: 'Calzones',
        thumbnail: 'calzones.jpg',
        description:
          'Calzones super recheados com mais de 50 sabores diferentes.'
      },
      {
        name: 'Bebidadas não-alcóolicas',
        thumbnail: 'bebidadas-nao-alcoolicas.jpg',
        description: 'Refrigerantes, sucos, chá gelado, energéticos e água.'
      },
      {
        name: 'Bebidadas alcóolicas',
        thumbnail: 'bebidadas-alcoolicas.jpg',
        description: 'Cervejas artesanais, vinhos e destilados.'
      }
    ]
    const product = await Product.createMany(listProducts)
    const productId = product[0].id
    const listPizzas = [
      {
        product_id: productId,
        name: 'Portuguesa',
        thumbnail: 'portuguesa.jpg'
      },
      {
        product_id: productId,
        name: 'Calabresa',
        thumbnail: 'calabresa.jpg'
      },
      {
        product_id: productId,
        name: 'Frango Frito',
        thumbnail: 'frango_frito.jpg'
      },
      {
        product_id: productId,
        name: 'Marguerita',
        thumbnail: 'marguerita.jpg'
      }
    ]
    await Type.createMany(listPizzas)
    const listSizes = [
      {
        name: 'Gigante',
        thumbnail: 'gigante.jpg'
      },
      {
        name: 'Grande',
        thumbnail: 'grande.jpg'
      },
      {
        name: 'Média',
        thumbnail: 'media.jpg'
      },
      {
        name: 'Pequena',
        thumbnail: 'pequena.jpg'
      },
      {
        name: '2L',
        thumbnail: '2l.jpg'
      },
      {
        name: '350ml',
        thumbnail: '350ml.jpg'
      },
      {
        name: '335ml',
        thumbnail: '335ml.jpg'
      },
      {
        name: '500ml',
        thumbnail: '500ml.jpg'
      }
    ]
    await Size.createMany(listSizes)
  }
}

module.exports = ProductSeeder
