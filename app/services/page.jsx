import React from 'react';
import ServicesPage from './servicespage';
import DetailsPage from './deatilspage';
import FeaturedServices from './featuredservices';
import Cards from './cards';

const Page = () => {
    return (
        <main className="w-full flex flex-col min-h-screen">
            <ServicesPage />
            <DetailsPage />
            <Cards />
            <FeaturedServices />
        </main>
    )
}

export default Page;
