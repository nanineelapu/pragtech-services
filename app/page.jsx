import Image from "next/image";
import PragtechHome from "./home/pragtech";

export const metadata = {
  title: "Precision Steel Detailing & Structural Engineering | Global BIM Solutions",
  description: "Pragtech Ltd offers premium steel detailing and structural engineering services. Delivering precise fabrication drawings, BIM modeling, and technical expertise for global industrial projects.",
  keywords: ["precision steel detailing", "structural engineering London", "BIM modeling solutions", "industrial steel frameworks", "steel fabrication drawings"],
};

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Home-Exclusive Background */}
      <div className="absolute top-0 left-0 right-0 h-[170vw] md:h-[95vw] z-0 pointer-events-none overflow-hidden">
        <Image
          src="https://ni6f1bnmnusal1wh.public.blob.vercel-storage.com/Gemini_Generated_Image_czcteyczcteyczct.webp"
          alt="Home Page Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle top-to-bottom blend for the sky image theme */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-400/5 via-transparent to-white" />
      </div>

      <div className="relative z-10">
        <PragtechHome />
      </div>
    </div>
  );
}
