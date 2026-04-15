import Image from "next/image";
import AboutPage from "./aboutpage";
import Details from "./details";
import GlobalPresence from "./globalpresence";
import CustomerFocus from "./customerfocus";
import ReviewSection from "../home/reviewsection";

export const metadata = {
    title: "About Pragtech Ltd | UK-Based Precision Engineering Experts",
    description: "Learn more about Pragtech Ltd, your trusted UK partner for high-precision steel detailing, fabrication-ready models, and comprehensive structural engineering services worldwide.",
    keywords: ["pragtech", "pragtech uk", "steel uk", "About Pragtech", "UK steel detailing history", "precision engineering team", "global engineering presence", "Tekla detailing company"],
};

const Page = () => {
    return (
        <div className="relative w-full">
            {/* Page-Specific Background */}
            <div className="absolute top-0 left-0 right-0 h-full z-0 overflow-hidden pointer-events-none">
                <Image
                    src="https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_y1h0mny1h0mny1h0%20%281%29.webp"
                    alt="About Page Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Readable blending overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-blue-400/5 via-transparent to-white/90" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-[5vw] lg:gap-[3vw] pb-[10vw] lg:pb-[5vw]">
                <h2 className="sr-only">
                    Pragtech Services provides world-class structural steel detailing and engineering solutions. Specializing in SDS/2 and Tekla structures, our expert team delivers high-precision BIM modelling, connection design, and shop drawings. We serve global clients in the UK, UAE, Canada, and Australia, ensuring excellence in industrial, commercial, and residential steel detailing projects.
                </h2>
                <AboutPage />
                <Details />
                <GlobalPresence />
                <CustomerFocus />
            </div>
        </div>
    );
};

export default Page;
