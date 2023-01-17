const products = [
    { 
        id: '1', 
        name: 'Vela Tonel', 
        price: 3000, 
        category: 'vela', 
        img:'https://bohemiavelas.com.ar/wp-content/uploads/2020/05/Vela-Tonel-Bohemia-Velas-Aromas-01.jpg', 
        stock: 25, 
        description:'Vela de SojaVela Natural® de 100gr. Calidez por su fragancias dulces y florales, simpleza por su presentación en envases reciclados a partir de botellas color caramelo. Vela natural® ecoblend vegetal formulada a base de aceites vegetales con fragancias de notas dulces y flores. Volcada a mano en envase reciclado a partir de botellas recicladas color caramelo, con pabilo 100% algodón. Vela de 100gr. Duración aproximada 20hs. Incluye bolsa de tela.'
    },
    {   id: '2', 
        name: 'Vela Ámbar', 
        price: 3000, 
        category: 'vela', 
        img:'https://bohemiavelas.com.ar/wp-content/uploads/2021/06/Vela-Ambar-Bohemia-Velas-Aromas-2021-5-500px.jpg', stock: 16, 
        description:'Vela de SojaVela Natural® de 100gr. Calidez por su fragancias dulces y florales, simpleza por su presentación en envases reciclados a partir de botellas color caramelo. Vela natural® ecoblend vegetal formulada a base de aceites vegetales con fragancias de notas dulces y flores. Volcada a mano en envase reciclado a partir de botellas recicladas color caramelo, con pabilo 100% algodón. Vela de 100gr. Duración aproximada 20hs. Incluye bolsa de tela.'
    },
    {   id: '3', 
        name: 'Difusor Ambiental', 
        price: 6500, 
        category: 'difusor', 
        img:'https://bohemiavelas.com.ar/wp-content/uploads/2020/05/Difusor-Ambiental-Ambar-Bohemia-Velas-Aromas-09.jpg', 
        stock: 10, 
        description:'Difusor de 250ml. Frascos tipo boticario con fragancias intensas inspiradas en paisajes y lugares que alguna vez visitamos con el cuerpo o con el alma. Frasco de vidrio color caramelo con tapón de corcho precintado.       Incluye varillas de rattán. Contenido Neto 250ml.Duración estimada 4/8 meses según el lugar donde se ubique el frasco.'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod=>prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=>prod.id === id))
        }, 500)
    })
}