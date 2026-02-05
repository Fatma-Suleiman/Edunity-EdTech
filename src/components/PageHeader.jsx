import "./PageHeader.css";
import { PageBanner } from "./PageBanner";
import PageNavigation from "./Navbar/PageNavigation";

export const PageHeader = () => {
  return (
    <header className="header">
      <PageBanner />
      <PageNavigation />
    </header>
  );
};
