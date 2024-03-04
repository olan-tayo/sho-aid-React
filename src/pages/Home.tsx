import Toast from "../components/Toast/Toast";
import ButtonPage from "./Button/Button";
import DropDownPage from "./DropDown/DropDown";

const Home = () => {
  return (
    <div className="m-4">
      <DropDownPage />
      <ButtonPage />
      <Toast position="top-right" time={20000} type="success" />
    </div>
  );
};

export default Home;
