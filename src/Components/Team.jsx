import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CoreTeamData, domainLeadsData } from "../constants/team";

const getRandomColor = () => {
  const colors = ["blue", "red", "yellow", "green"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Card = ({ data }) => {
  const randomBorderColor = getRandomColor();
  const randomBgColor = getRandomColor();

  return (
    <div className="col-xl-3 col-sm-4 my-3">
      <div
        className={`bg-white rounded shadow-sm py-5 px-4 border border-4 border-${randomBorderColor}`}
      >
        <img
          src={data.img}
          alt=""
          width="100"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0 fs-4 fw-bold color-dark">{data.name}</h5>
        <span className="small fw-light text-uppercase text-muted">
          {data.domain}
        </span>
        <ul
          className={`social mb-0 list-inline mt-2 mx-auto rounded rounded-5 p-1 bg-${randomBgColor}`}
          style={{ width: "fit-content" }}
        >
          <li className="list-inline-item mx-2 ">
            <a href={data.twitter} className="social-link">
              <i className="fa fa-twitter" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href={data.insta} className="social-link">
              <i className="fa fa-instagram" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href={data.linkedin} className="social-link">
              <i className="fa fa-linkedin" style={{ color: "#fff" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CardList = ({ teamData }) => {
  return (
    <div className="row text-center justify-content-center my-5">
      {teamData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default function Team() {
  return (
    <>
      <Navbar />
      <div id="endcontain" className="container-fluid text-center my-3">
        <strong>
          <font className="fw-bold fs-1 text-uppercase">
            <font color="#4285F4">GDSC </font>
            <font color="#EA4335">SMIT </font>
            <font color="#F4B400">Team </font>
            <font color="#34A853">2023 </font>
          </font>
        </strong>
      </div>
      <div className="container ">
        <div className="row text-center justify-content-center my-5">
          <div className="col-xl-3 col-sm-4 my-3">
            <div className="bg-white rounded shadow-sm py-5 px-4 border border-4 border-blue">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0 fs-4 fw-bold color-dark">Aryan Lohia</h5>
              <span className="small fw-light text-uppercase text-muted">
                Lead
              </span>
              <ul
                className="social mb-0 list-inline mt-2 mx-auto rounded rounded-5 p-1 bg-blue"
                style={{ width: "fit-content" }}
              >
                <li className="list-inline-item mx-2 ">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" style={{ color: "#fff" }}></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="social-link">
                    <i
                      className="fa fa-instagram"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" style={{ color: "#fff" }}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center my-3">
          <strong>
            <font className="fw-bold fs-1 text-uppercase">
              <font color="#000">Domain leads</font>
            </font>
          </strong>
        </div>
        <CardList teamData={domainLeadsData}></CardList>

        <div className="container-fluid text-center my-3">
          <strong>
            <font className="fw-bold fs-1 text-uppercase">
              <font color="#000">Core Team Members</font>
            </font>
          </strong>
        </div>
        <CardList teamData={CoreTeamData}></CardList>
      </div>
      <Footer />
    </>
  );
}
