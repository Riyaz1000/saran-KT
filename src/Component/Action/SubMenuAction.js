import arrayUtil from "../../Util/ArrayUtil";

const getSubMenu = (payload) => {
  if (
    payload.props.metadata.subMenus &&
    arrayUtil.isArray(payload.props.metadata.subMenus)
  ) {
    return payload.props.metadata.subMenus.map((val) => {

    });
  }
};

const subMenuAction = {
  getSubMenu,
};

export default subMenuAction;
