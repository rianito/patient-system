import { Link } from "react-router-dom";
import "./style.css";

export default function PageNotFound() {
  return (
    <>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to={"/"}>
          <a target="_blank" className="more-link">
            Vá para a pagina de <b>listagem</b>
          </a>
        </Link>
      </div>
    </>
  );
}
