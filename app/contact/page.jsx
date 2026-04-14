import ContctPage from "./contctpage";
import SubDetails from "./subdetails";
import MainContactContent from "./maincontactcontent";

export const metadata = {
  title: "Contact Pragtech Ltd | Technical Engineering Inquiry",
  description: "Get in touch with Pragtech Ltd for your steel detailing and structural engineering requirements. Request a quote or technical consultation from our global experts.",
  keywords: ["contact engineering firm", "steel detailing quote", "precision engineering UK", "structural design consultation"],
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
