import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsAPI from "../../api/products-api";
import LatestProducts from "./latest-products/latestProducts";
import postsAPI from "../../api/posts-api";
import LatestPosts from "./latest-posts/LatestPosts";


export default function Home() {

    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await productsAPI.getAll();
            setLatestProducts(result.reverse().slice(0, 3));
        })();
    }, []);

    const [latestPosts, setLatestPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await postsAPI.getAll();
            setLatestPosts(result.reverse().slice(0, 3));
        })();
    }, []);


    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Your place to sell radios and upload news</h2>

                <img src="./images/yaesu-ft-dx10.png" alt="hero" />
            </div>

            <div id="home-page">
                <div className="home-products home-block">
                    <h1 className="title-h1">Latest Products</h1>
                    <div className="products">
                        {latestProducts.length > 0
                            ? latestProducts.map(product => <LatestProducts key={product._id} {...product} />)
                            : <p className="no-articles">No products yet</p>
                        }
                    </div>
                    <Link to={"/products"} className="btn all-btn">SEE ALL</Link>
                </div>
                <div className="home-posts home-block">
                    <h1 className="title-h1">News</h1>
                    <div className="posts">
                        {latestPosts.length > 0
                            ? latestPosts.map(post => <LatestPosts key={post._id} {...post} />)
                            : <p className="no-articles">No posts yet</p>
                        }
                    </div>
                    <Link to={"/posts"} className="btn all-btn">SEE ALL</Link>
                </div>

            </div>
        </section >

    );
}