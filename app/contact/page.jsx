import ContctPage from "./contctpage";
import SubDetails from "./subdetails";
import MainContactContent from "./maincontactcontent";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Pragtech Ltd for your steel detailing and structural engineering projects. Our global team is ready to provide precise technical solutions.",
};

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <ContctPage />
            <SubDetails />
            <MainContactContent />
        </div>
    );
};

export default Page;
