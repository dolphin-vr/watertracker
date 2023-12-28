import { Calendar } from "../../components/Calendar/Calendar";
// import { Today } from "../../components/Today/Today";
import { Toaster } from "react-hot-toast";

const MainHomepage = () => {
  return (
    <div>
      <Toaster />
      {/* <Today /> */}
      <Calendar />
    </div>
  );
};
export default MainHomepage;
