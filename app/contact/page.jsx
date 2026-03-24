import ContctPage from "./contctpage";
import SubDetails from "./subdetails";
import MainContactContent from "./maincontactcontent";

const Page = () => {
    return (
        <main className="min-h-screen bg-[#273A4D] w-full flex flex-col items-center">
            <ContctPage />
            <SubDetails />
            <MainContactContent />
        </main>
    );
};

export default Page;
