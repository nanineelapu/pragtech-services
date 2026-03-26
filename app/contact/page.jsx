import ContctPage from "./contctpage";
import SubDetails from "./subdetails";
import MainContactContent from "./maincontactcontent";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Pragtech Ltd for your steel detailing and structural engineering projects. Our global team is ready to provide precise technical solutions.",
};

const Page = () => {
    return (
        <main className="min-h-screen bg-[#faf9f6] w-full flex flex-col items-center">
            <ContctPage />
            <SubDetails />
            <MainContactContent />
        </main>
    );
};

export default Page;
