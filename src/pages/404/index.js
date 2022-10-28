import { Button } from "react-bootstrap";
import "./style.scss";

const NotFoundPage = () => (
  <div className="container not-found-page">
    <h2>
      Page Not Found{" "}
      <span role="img" aria-label="shrugs emoji">
        🤷🏾‍♂️
      </span>
    </h2>

    <Button
      // type="button"
      variant="outline-dark"
      onClick={() => window.location.replace("/all-posts")}
    >
      Go Back Home
    </Button>
  </div>
);

export default NotFoundPage;
