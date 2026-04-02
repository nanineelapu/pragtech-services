import AboutPage from "./aboutpage";
import Details from "./details";
import CustomerFocus from "./customerfocus";

export const metadata = {
  title: "About Our Expertise",
  description: "Learn about Pragtech Ltd's legacy of structural precision. We specialize in complex steel detailing and industrial engineering solutions with a global perspective.",
};

const Page = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <AboutPage />
            <Details />
            <CustomerFocus />
        </div>
    );
};

export default Page;
