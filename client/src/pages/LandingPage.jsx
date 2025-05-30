import LeftFlex from "../components/LandingPage/LeftFlex";
import RightFlex from "../components/LandingPage/RightFlex";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="full-landing-page">
      <div className="flex-section">
        <div className="mdl">
          <div className="circles">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`circle circle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="box">
          <div className="flex-box left">
            <LeftFlex />
          </div>
          <div className="flex-box right">
            <RightFlex />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
