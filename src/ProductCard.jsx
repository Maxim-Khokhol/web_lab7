export default function ProductCard({product}) {

    return <>
    <div className="product-card">
        <div className="product-img">
            <img src={product.image} alt=""/>
        </div>
        <h3>{product.name}</h3>
        <p>{product.price} грн</p>
    </div>
    </>
}