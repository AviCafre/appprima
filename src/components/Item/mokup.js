import './item.css'

const products = [
    {
        id: 2876,
        name: 'collar fenix',
        img:'../../../public/images/collarfeniix.jpg'
    },
    {
        id: 2984,
        name:'collar corazon',
        img:'../../../public/images/ccorazon.jpg'
    },
    {
        id: 4948,
        name: 'collar castle',
        img: '../../../public/images/ccastle.jpg'
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout (()=> {
            resolve (products)
        }, 2000)
    })
}
export default products;