import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsList } from "@/components/shared/products-list";

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Title size="lg" text="All Products" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="pb-14 mt-10">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsList
                                title="Pizzas"
                                categoryId={0}
                                items={[
                                    {
                                        id: 1,
                                        name: "Маргарита",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                        price: 390,
                                        items: [{ price: 390 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Маргарита",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                        price: 390,
                                        items: [{ price: 390 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Маргарита",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                        price: 390,
                                        items: [{ price: 390 }],
                                    },
                                ]}
                            />
                            <ProductsList
                                title="Combos"
                                categoryId={1}
                                items={[
                                    {
                                        id: 1,
                                        name: "Маргарита",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                        price: 390,
                                        items: [{ price: 390 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Маргарита",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                        price: 390,
                                        items: [{ price: 390 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Маргарита",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                                        price: 390,
                                        items: [{ price: 390 }],
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
