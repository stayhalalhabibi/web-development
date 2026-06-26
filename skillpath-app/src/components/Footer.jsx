import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <hr />
      <p>© 2026 SkillPath</p>

      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link>
    </footer>
  );
}

export default Footer;