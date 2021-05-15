import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import { selectSections } from "../../redux/directory/directory-selectors";
import "./directory.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";

// const Directory = ({ sections }) => {
//   console.log("rendering directory");
//   return (
//     <div className="directory-menu">
//       {sections.map((section) => (
//         <MenuItem key={section.id} {...section} />
//       ))}
//     </div>
//   );
// };

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foo: "bar" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.isCartHidden, "nextProps should ? ");
    console.log(this.props.isCartHidden, "nextState should ? ");
    return true;
  }
  componentDidMount() {
    console.log("mounting");
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    console.log("rendering directory");
    return (
      <div className="directory-menu">
        {this.props.sections.map((section) => (
          <MenuItem key={section.id} {...section} />
        ))}
        <CartIcon />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector(
//     {
//         sections: selectSections
//     }
// )

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections,
    items: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(Directory);
