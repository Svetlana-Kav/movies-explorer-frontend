import "./NavTab.css";

function NavTab(props) {
  return <nav className="navigation">{props.children}</nav>;
}

export default NavTab;
