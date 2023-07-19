import { Link, useLoaderData } from "react-router-dom";
import { IProduct } from "../mock";
import { getProducts } from "../service/ProductService";


// Fonction pour charger les produits
export const productsLoader = (): IProduct[] => {
    const products = getProducts(); // Appel de la fonction getProducts pour obtenir les produits
    return products; // Retourne les produits chargés
};

// Composant Products pour afficher la liste des produits
 const Products = () => {
    const products = useLoaderData() as IProduct[]; // Récupère les données des produits à partir du loader
    return (
        <div>
            <h1>Tous les produits</h1> {/* Titre de la liste des produits */}
            <ul>
                {products.map((product : IProduct) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        {product.title}
                    </Link> /* Affiche chaque produit dans un élément li */
                ))}
            </ul>
        </div>
    );
};



export default Products;

