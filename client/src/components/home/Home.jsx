import { useEffect, useState } from "react";
import productsAPI from "../../api/products-api";
{/*import gamesAPI from "../../api/games-api";
import LatestGame from "./latest-game/LatestGame";*/}
import LatestProducts from "./latest-products/latestProducts";


export default function Home() {

    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        (async () => {
            //TODO - 3 latest games
            const result = await productsAPI.getAll();
            setLatestProducts(result.reverse().slice(0,3));
        })();
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {latestProducts.length > 0
                    ? latestProducts.map(product => <LatestProducts key={product._id} {...product}/>)
                    :<p className="no-articles">No products yet</p>
                }


                
            </div>
        </section>

    );
}