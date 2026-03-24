import CarrerPage from "./carrerpage";
import WhyWorkWithUs from "./whyworkwithus";
import OpenPostitions from "./openpostitions";

const Page = () => {
    return (
        <main className="min-h-screen bg-[#273A4D] w-full flex flex-col items-center">
            <CarrerPage />
            <WhyWorkWithUs />
            <OpenPostitions />
        </main>
    );
};

export default Page;
