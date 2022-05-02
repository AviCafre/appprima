

const products = [
    {
        id: "2876",
        name: 'collar fenix',
        price:'19000',
        description:'The jungle power',
        img:'../../../public/images/collarfeniix.jpg'
    },
    {
        id: "2984",
        name:'collar corazon',
        price:14000,
        description:'Lovely feel',
        img:'../../../public/images/ccorazon.jpg'
    },
    {
        id: "4948",
        name: 'collar castle',
        price: 18000,
        description: 'The most beautifull scene',
        img: '../../../public/images/ccastle.jpg'
    }
]

export const getProductsById = (categoryId) => {
    return new Promise (resolve => {
        setTimeout (()=> {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout (()=> {
            resolve (products)
        }, 2000)
    })
}
export default products;