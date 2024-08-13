import { Categories, Container, PopupModel, Title, TopBar } from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-5">
                <Title size="lg" text="All Pizzas" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        Фильтрация
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">Список товаров</div>
                    </div>
                </div>
            </Container>
        </>
    );
}
