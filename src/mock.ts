export interface IProduct {
    id: number,
    title: string,
    description: string,
    image : IProductImg
}

export interface IProductImg {
    src : string, 
    alt : string
}

export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        title: "pizza",
        description: "blabla",
        image : {
            src : "/peperonni.png",
            alt : ""
        }
    },
    {
        id: 2,
        title: "BURGER",
        description: "blabla",
        image : {
            src : "/burger.png",
            alt : ""
        }
    },
    {
        id: 3,
        title: "dessert",
        description: "blabla",
        image : {
            src : "/milkshake.png",
            alt : ""
        }
    },
];