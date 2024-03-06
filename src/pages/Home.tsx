import Button from "../components/Button/Button";
import Tab from "../components/Tabs/Tab";
import Toast from "../components/Toast/Toast";
import ButtonPage from "./Button/Button";
import DropDownPage from "./DropDown/DropDown";

const Home = () => {
  // const [tab, setTab] = useState<any>({ key: null, value: "" });
  const data = [
    { key: 1, value: "One" },
    { key: 2, value: "Two" },
    { key: 3, value: "Three" },
  ];
  const handleShowToast = () => {
    return Toast({
      position: "top-right",
      time: 20000,
      type: "success",
      showIcon: true,
    });
  };

  const handleSelectedTab = (tab: any) => {
    console.log(tab);
  };

  return (
    <div className="m-4">
      <DropDownPage />
      <ButtonPage />

      <Button
        onClick={handleShowToast}
        className="border-[1px] border-black p-2 rounded-lg mt-4 transition-all"
      >
        Show Toast
      </Button>
      <div className="mt-4">
        <Tab
          tabText=""
          tabContainer=""
          onSelectedTab={handleSelectedTab}
          data={data}
        >
          <div>Yes one</div>
          <div>Yes two</div>
          <div>Yes three</div>
        </Tab>
      </div>
    </div>
  );
};

export default Home;
