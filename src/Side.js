import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import PropTypes from "prop-types";

function Side(props) {
  const { nav, onHello } = props;
  const [activeItemId, setActiveItemId] = React.useState("#primary");
  return (
    <Navigation
      items={props.nav}
      activeItemId={activeItemId}
      onChange={({ item }) => {
        setActiveItemId(item.itemId);
        onHello("New nav is set: " + item.itemId);
      }}
    />
  );
}

Side.propTypes = {
  nav: PropTypes.array.isRequired,
  onHello: PropTypes.func
};
export default Side;
