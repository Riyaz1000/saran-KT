import { useState } from "react";
import subMenuAction from "../Action/SubMenuAction";

function Menu(props) {

  const [localVariable] = useState({
    isButtonVisible: false,
    isSubMenuVisible: false,
  });
  const [refreshCount, refreshComponent] = useState(0);
  const refresh = () => {
    refreshComponent((prev) => prev + 1);
  };

  const handleClickEvent = () => {
    localVariable.isButtonVisible = true;
    refresh();
  };

  const handleSubMenuClickEvent = () => {
    localVariable.isSubMenuVisible = true;
    refresh();
  };

  const handleBlurEvent = () => {
    localVariable.isButtonVisible = false;
    localVariable.isSubMenuVisible = false;
    refresh();
  };

  const getStyle = () => {
    const style = localVariable.isButtonVisible
      ? {
          backgroundColor: "black",
          borderRadius: "2px",
          border: "none",
          marginTop: "5px",
          padding: "5px",
          color: "white",
          marginLeft: "730px",
        }
      : { display: "none" };
    return style;
  };

  const getSubMenuStyle = () => {
    const style = localVariable.isSubMenuVisible
      ? {
          backgroundColor: "black",
          borderRadius: "2px",
          border: "none",
          marginTop: "5px",
          padding: "5px",
          color: "white",
          marginLeft: "730px",
        }
      : { display: "none" };
    return style;
  };
  const getProperty = () => {
    const property = {
      style: getStyle(),
    };
    return property;
  };

  const getSubMenuProperty = () => {
    const property = {
      style: getSubMenuStyle(),
    };
    return property;
  };

  const payload = {
    props,
    handleClickEvent,
    handleSubMenuClickEvent,
    handleBlurEvent,
    refresh,
  };

  return <>
  <button>{payload.props.metadata.label}</button>
  {subMenuAction.getSubMenu(payload)}
  </>;
}

export default Menu;
