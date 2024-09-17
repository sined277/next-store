import React from "react";

interface ProductPageProps {
    params: {
        id: string
    };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    return <div>page product {params.id}</div>;
};

export default ProductPage;
