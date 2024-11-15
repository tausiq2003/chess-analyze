import BoardContainer from "./components/boardcontainer";
import Input from "./components/inputs";

export default function Home() {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 py-4 sm:py-8">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 justify-center items-start">
                    <BoardContainer />
                    <div className=" max-lg:w-full lg:w-[35%]">
                        <Input />
                    </div>
                </div>
            </main>
        </div>
    );
}
