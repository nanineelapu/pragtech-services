import CarrerPage from "./carrerpage";
import WhyWorkWithUs from "./whyworkwithus";
import OpenPostitions from "./openpostitions";

export const metadata = {
  title: "Careers",
  description: "Join the Pragtech Ltd team. We're looking for passionate structural engineers and steel detailers to work on high-impact projects worldwide.",
};

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <CarrerPage />
            <WhyWorkWithUs />
            <OpenPostitions />
        </div>
    );
};

export default Page;
