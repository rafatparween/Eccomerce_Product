import JivoChat from "../JivoChat";
import PageFooter from "./pages/PageFooter";
import PageHeader from "./pages/PageHeader";
import PageNavbar from "./pages/PageNavbar";
import SupportTabs from "./pages/SupportTabs";
import Troubleshoot from "./pages/Troubleshoot";


export default function Home() {
    return (
      <>
      {/* <PageNavbar/>
      <PageHeader/>
      <Troubleshoot/>
      <SupportTabs/>
      
     
      <JivoChat/> */}
      <PageNavbar/>
      <PageHeader/>
      <Troubleshoot/>
      <SupportTabs/>
      <PageFooter/>
      <div className=" mt-[30px]">
        <JivoChat/>


      </div>
      
       
      </>
    );
  }
  