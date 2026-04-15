import React from 'react';
import Image from "next/image";
import ServicesPage from './servicespage';
import DetailsPage from './deatilspage';
import FeaturedServices from './featuredservices';


export const metadata = {
    title: "Structural Engineering & Steel Detailing Services",
    description: "Comprehensive BIM modeling, Tekla steel detailing, and structural analysis. We provide industry-leading technical documentation for industrial, commercial, and infra sectors.",
    keywords: ["pragtech", "pragtech uk", "steel uk", "BIM modeling services", "Tekla detailing", "connection design", "structural analysis UK", "steel fabrication drawings"],
};

const Page = () => {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Page-Specific Background */}
            <div className="absolute top-0 left-0 right-0 h-full z-0 overflow-hidden pointer-events-none">
                <Image
                    src="https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_y1h0mny1h0mny1h0%20%281%29.webp"
                    alt="Services Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-b from-blue-400/5 via-transparent to-white/90" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-[10vw] lg:gap-[5vw] pb-[15vw] lg:pb-[8vw]">
                <h2 className="sr-only">
                    Pragtech Services provides world-class structural steel detailing and engineering solutions. Specializing in SDS/2 and Tekla structures, our expert team delivers high-precision BIM modelling, connection design, and shop drawings. We serve global clients in the UK, UAE, Canada, and Australia, ensuring excellence in industrial, commercial, and residential steel detailing projects.
                </h2>
                <ServicesPage />
                {/* <DetailsPage /> */}
                <FeaturedServices />
            </div>
        </div>
    )
}

export default Page;
