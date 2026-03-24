import CarrerPage from "./carrerpage";
import WhyWorkWithUs from "./whyworkwithus";
import OpenPostitions from "./openpostitions";

const Page = () => {
    return (
        <main className="min-h-screen bg-[#faf9f6] w-full flex flex-col items-center">
            <CarrerPage />
            <WhyWorkWithUs />
            <OpenPostitions />
        </main>
    );
};

export default Page;
