import Image from "next/image";
import ProjectHero from './projectpage';

export const metadata = {
  title: "Engineering & Steel Detailing Portfolio | Global Projects",
  description: "Showcasing our precision engineering and steel detailing excellence. Explore our portfolio of heavy industrial frameworks and complex commercial BIM projects.",
  keywords: ["pragtech", "pragtech uk", "steel uk", "engineering portfolio", "steel detailing projects", "industrial design cases", "BIM success stories", "Pragtech projects"],
};

const Page = () => {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Page-Specific Background */}
            <div className="absolute top-0 left-0 right-0 h-full z-0 overflow-hidden pointer-events-none">
                <Image
                    src="https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_y1h0mny1h0mny1h0%20%281%29.webp"
                    alt="Projects Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-b from-blue-400/5 via-transparent to-white/90" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <ProjectHero />
            </div>
        </div>
    );
};

export default Page;
