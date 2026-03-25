import ProjectHero from './projectpage';

export const metadata = {
  title: "Our Projects",
  description: "Explore our portfolio of complex engineering projects, including heavy industrial frameworks, commercial steel structures, and BIM detailing success stories.",
};

const Page = () => {
    return (
        <main className="min-h-screen bg-[#faf9f6] w-full flex flex-col items-center">
            <ProjectHero />
        </main>
    );
};

export default Page;
