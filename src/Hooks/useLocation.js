import Division from "../Resources/bd-divisions.json";
import District from "../Resources/bd-districts.json";
import UpZilla from "../Resources/bd-upazilas.json";
const useLocation = () => {
  const location = {
    Division,
    District,
    UpZilla,
  };
  return location;
};

export default useLocation;
