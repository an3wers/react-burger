import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Tabs = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <Tab value="buns" active={currentTab === "buns"} onClick={setCurrentTab}>
        Булки
      </Tab>
      <Tab
        value="sauces"
        active={currentTab === "sauces"}
        onClick={setCurrentTab}
      >
        Соусы
      </Tab>
      <Tab value="main" active={currentTab === "main"} onClick={setCurrentTab}>
        Начинки
      </Tab>
    </>
  );
};

Tabs.propTypes = {
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default Tabs;
