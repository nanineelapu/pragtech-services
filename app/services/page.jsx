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
        <main className="w-full flex flex-col min-h-screen overflow-x-hidden">
            <ServicesPage />
            <DetailsPage />
            <Cards />
            <FeaturedServices />
        </main>
    )
}

export default Page;
