import { Link } from "react-router-dom"

export default function PostListItem(
    {
        _id,
        title,
        shortDescription,
        description,
        imageUrl,
    }
) {

    return (
        <div className="allGames">
            <div className="product-box">
                <div className="product">
                    <div className="product-info">
                        <h2>{title}</h2>
                        <p>{shortDescription}</p>
                    </div>
                    <div className="product-image"><img src={imageUrl} /></div>
                </div>
                <Link to={`/posts/${_id}/details`} className="details-button">See more</Link>
            </div>
        </div>

    )
}