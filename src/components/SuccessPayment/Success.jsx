import "./Success.scss";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <div className="section-card">
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          Fully Received Your Bill Payment &
          <br /> We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
        <button onClick={() => navigate("/")}>GO BACK TO HOME PAGE</button>
      </div>
    </>
  );
};

export default Success;
