

const Item  = ({ name, img}) => {
    return(
        <section className="pic">
            <picture >
                <img  className="targ" src={"/images/ccastle.jpg" } alt={name}/>
            </picture>
            <h2>{name}</h2>
            <button>Ver detalle</button>
        </section>
    )
}

export default Item;