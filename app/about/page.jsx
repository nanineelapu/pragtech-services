import AboutPage from "./aboutpage";
import Details from "./details";
import CustomerFocus from "./customerfocus";

const Page = () => {
    return (
        <main className="min-h-screen bg-[#faf9f6] w-full flex flex-col items-center">
            <AboutPage />
            <Details />
            <CustomerFocus />
        </main>
    );
};

export default Page;
