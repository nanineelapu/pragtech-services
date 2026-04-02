import React from 'react';
import ServicesPage from './servicespage';
import DetailsPage from './deatilspage';
import FeaturedServices from './featuredservices';
import Cards from './cards';
import ReviewSection from '../home/reviewsection';
import Technologies from '../home/technologies';

export const metadata = {
    title: "Engineering Services",
    description: "Comprehensive steel detailing, BIM modeling, and structural engineering services. We provide high-accuracy technical documentation for industrial and commercial sectors.",
};

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center gap-[10vw] lg:gap-[5vw] pb-[15vw] lg:pb-[8vw]">
            <ServicesPage />
            <DetailsPage />
            <Cards />
            {/* <Technologies /> */}
            <FeaturedServices />
            {/* <ReviewSection /> */}
        </div>
    )
}

export default Page;
