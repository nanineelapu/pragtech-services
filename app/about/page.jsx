import Image from "next/image";
import AboutPage from "./aboutpage";
import Details from "./details";
import GlobalPresence from "./globalpresence";
import CustomerFocus from "./customerfocus";
import ReviewSection from "../home/reviewsection";

export const metadata = {
    title: "About Pragtech Ltd | UK-Based Steel Detailing Experts",
    description: "Pragtech Ltd delivers precise, fabrication-ready models and drawings for structural steel, miscellaneous metalwork, cold-rolled SFS, and cladding systems worldwide.",
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
                <AboutPage />
                <Details />
                <GlobalPresence />
                <CustomerFocus />
            </div>
        </div>
    );
};

export default Page;
