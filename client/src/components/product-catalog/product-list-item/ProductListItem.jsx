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
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/products/${_id}/details`} className="details-button">Details</Link>
            </div>

        </div>
    )
}