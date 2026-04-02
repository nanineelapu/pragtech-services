import AboutPage from "./aboutpage";
import Details from "./details";
import GlobalPresence from "./globalpresence";
import CustomerFocus from "./customerfocus";
import Technologies from "../home/technologies";
import ReviewSection from "../home/reviewsection";

export const metadata = {
    title: "About Our Expertise",
    description: "Learn about Pragtech Ltd's legacy of structural precision. We specialize in complex steel detailing and industrial engineering solutions with a global perspective.",
};

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center gap-[10vw] lg:gap-[5vw] pb-[15vw] lg:pb-[8vw]">
            <AboutPage />
            <Details />
            <GlobalPresence />
            <CustomerFocus />
            <ReviewSection />
        </div>
    );
};

export default Page;
