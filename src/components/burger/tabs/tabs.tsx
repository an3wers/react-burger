import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

interface IProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const Tabs = ({ currentTab, setCurrentTab }: IProps) => {
  return (
    <>
      <Tab value='buns' active={currentTab === "buns"} onClick={setCurrentTab}>
        Булки
      </Tab>
      <Tab
        value='sauces'
        active={currentTab === "sauces"}
        onClick={setCurrentTab}
      >
        Соусы
      </Tab>
      <Tab value='main' active={currentTab === "main"} onClick={setCurrentTab}>
        Начинки
      </Tab>
    </>
  );
};

export default Tabs;
