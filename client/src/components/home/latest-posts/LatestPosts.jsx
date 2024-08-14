import { Link } from "react-router-dom";

export default function LatestPosts({
    _id,
    title,
    shortDescription,
    imageUrl
}) {


    return (
        <div className="post-item">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            {/*<div className="description">
                <h2>{shortDescription}</h2>
            </div>*/}
            <div className="data-buttons">
                <Link to={`/products/${_id}/details`} className="btn details-btn">READ MORE</Link>
            </div>
        </div>
    )
}