import React, { useMemo } from "react";
import cx from "classnames";

import { PROJECTS } from "../../constants/projects";

import ProgressBar from "../../DesignSystem/ProgressBar";

import XD from "../../assets/icons/xd.svg";
import Jira from "../../assets/icons/jira.svg";
import Slack from "../../assets/icons/slack.svg";
import Spotify from "../../assets/icons/spotify.svg";
import Atlassin from "../../assets/icons/atlassin.svg";
import ThreeDots from "../../assets/icons/three-dots.svg";
import Tick from "../../assets/icons/tick.svg";

import "./index.scss";

const Projects = () => {
  const companyLogos = useMemo(() => [XD, Atlassin, Slack, Spotify, Jira], []);
  return (
    <div className="projects-table">
      <h5 className="projects-table__heading">Projects</h5>
      <div className="projects-table__subtext">
        <img src={Tick} alt="tick" />
        <p>
          <strong>30 done</strong> this month
        </p>
      </div>

      <div className="projects-table__table">
        <div className="projects-table__table__header">
          <span>COMPANIES</span>
          <span>BUDGET</span>
          <span>STATUS</span>
          <span>COMPLETION</span>
          <span></span>
        </div>

        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className={cx("projects-table__table__row", {
              "projects-table__table__row--last": PROJECTS.length === i + 1,
            })}
          >
            <div className="projects-table__table__company">
              <img src={companyLogos[i]} alt="" />
              <strong>{project.company}</strong>
            </div>
            <strong>{project.budget}</strong>
            <strong>{project.status}</strong>
            <div className="projects-table__table__progress-wrapper">
              <span>{project.progress}%</span>
              <ProgressBar progress={project.progress} isLarge />
            </div>
            <img src={ThreeDots} alt="menu" className="three-dots" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
