import { ActionFunctionArgs, useLoaderData } from "react-router-dom"
import { getProduct } from "../service/ProductService";
import { IProduct } from "../mock";
import GoBackButton from "../component/GoBackButton";
import QuantityPicker from "component/QuantityPicker";
import style from "./ProductDetails.module.css"
import { Fragment } from "react";

export const productLoader = (args: ActionFunctionArgs) => {
    const { params } = args;
    const { id } = params;
    const productId = Number(id);

    const product = getProduct(productId);
    console.log(product)
    if (!product) {
        throw new Response("", {
            status: 404,
            statusText: "Produit indisponible"
        })
    };
    return product;
}
const ProductDetails = () => {
    const product = useLoaderData() as IProduct;
    return (
        <Fragment >
            <GoBackButton />

            <div className={style.wrapper}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <img className={style.img} src={product.image.src} alt={product.image.alt} />
                <QuantityPicker />
            </div>
        </Fragment>



    )
}
export default ProductDetails;