import { Link } from "react-router-dom";

export default function LatestProducts({
    _id,
    title,
    price,
    imageUrl
}) {


    return (
        <div className="game">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <h2>{price} €</h2>
            </div>
            <div className="data-buttons">
                <Link to={`/products/${_id}/details`} className="btn details-btn">Details</Link>
            </div>
        </div>
    )
}