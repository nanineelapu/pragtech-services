import React from 'react';
import ServicesPage from './servicespage';
import DetailsPage from './deatilspage';
import FeaturedServices from './featuredservices';
import Cards from './cards';

export const metadata = {
  title: "Engineering Services",
  description: "Comprehensive steel detailing, BIM modeling, and structural engineering services. We provide high-accuracy technical documentation for industrial and commercial sectors.",
};

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <ServicesPage />
            <DetailsPage />
            <Cards />
            <FeaturedServices />
        </div>
    )
}

export default Page;
