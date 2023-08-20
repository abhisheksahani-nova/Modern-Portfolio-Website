import React from "react";
import "./LandingPage.scss";
import Navbar from "../../components/Navbar/Navbar";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Navbar />

      <div className="banner-section">
        <div className="container">
          <div className="box">
            <div className="title">
              <span className="block"></span>

              <div className="content-wrapper">
                <div>
                  <h1 className="bannner-title anime">H</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">i.&nbsp;</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">I'</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">m&nbsp;</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">A</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">b</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">h</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">i</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">s</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">h</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">e</h1>
                </div>

                <div>
                  <h1 className="bannner-title anime">k</h1>
                </div>
                <span></span>
              </div>
            </div>

            <div className="role">
              <div className="block"></div>
              <div className="description">
                <div className="flip">
                  <div>
                    <div className="field-1">Web Developer</div>
                  </div>
                  <div>
                    <div className="field-2">Stand-up comedian</div>
                  </div>
                  <div>
                    <div className="field-3">Traveller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
