import { Link } from "react-router-dom"

export default function ProductListItem(
    {
        _id,
        title,
        manufacturer,
        category,
        shortDescription,
        description,
        price,
        imageUrl,
    }
) {

    return (
        <div className="allGames">
            <div className="product-box">
                <div className="product">
                    <div className="product-info">
                        <h2>{title}</h2>
                        <h4>Category: {category}</h4>
                        <p>{shortDescription}</p>
                    </div>
                    <div className="product-image"><img src={imageUrl} /></div>
                </div>
                <Link to={`/products/${_id}/details`} className="details-button">BUY PRODUCT</Link>
            </div>
        </div>

    )
}