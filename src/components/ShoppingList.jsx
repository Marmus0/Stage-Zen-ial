import { plantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import "../styles/Cart.css";
import "../styles/ShoppingList.css"; 

const ShoppingList = () => {
    // Extraction des catégories uniques
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    return (
        <div>
            {/* Liste des catégories */}
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>

            {/* Liste des plantes utilisant PlantItem et les props */}
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, isSpecialOffer }) => (
                    <div key={id}>
                        <PlantItem
                            key={id} 
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        {/* Affichage conditionnel des soldes */}
                        {isSpecialOffer && <span className='lmj-sales'>Soldes !</span>}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;