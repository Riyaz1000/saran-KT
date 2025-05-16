import Menu from "../View/Menu";

const getMenu = (payload) => {
  return payload.map((val) => {
    return <Menu metadata={val} />;
  });
};

const sectionAction = {
  getMenu,
};

export default sectionAction;
