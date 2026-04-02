import ProjectHero from './projectpage';

export const metadata = {
  title: "Our Projects",
  description: "Explore our portfolio of complex engineering projects, including heavy industrial frameworks, commercial steel structures, and BIM detailing success stories.",
};

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <ProjectHero />
        </div>
    );
};

export default Page;
