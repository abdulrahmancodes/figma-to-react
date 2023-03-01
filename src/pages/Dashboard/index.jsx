import React, { useMemo } from "react";
import cx from "classnames";

import Footer from "../../components/Footer";
import SidebarMenu from "../../components/SidebarMenu";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import ProgressBar from "../../DesignSystem/ProgressBar";
import Header from "../../components/Header";

import Doc from "../../assets/icons/doc-white.svg";
import Wallet from "../../assets/icons/wallet.svg";
import Cart from "../../assets/icons/cart-1.svg";
import Globe from "../../assets/icons/globe-primary.svg";
import Arrow from "../../assets/icons/arrow-white.svg";
import BlackArrow from "../../assets/icons/arrow.svg";
import Chakra from "../../assets/icons/chakra-card.svg";
import Rocket from "../../assets/icons/rocket.svg";
import Settings from "../../assets/icons/settings-white.svg";
import Tick from "../../assets/icons/tick.svg";
import ThreeDots from "../../assets/icons/three-dots.svg";

import XD from "../../assets/icons/xd.svg";
import Jira from "../../assets/icons/Jira.svg";
import Slack from "../../assets/icons/Slack.svg";
import In from "../../assets/icons/in.svg";
import Spotify from "../../assets/icons/Spotify.svg";
import Atlassin from "../../assets/icons/atlassin.svg";

import Member1 from "../../assets/icons/members1.png";
import Member2 from "../../assets/icons/members2.png";
import Member3 from "../../assets/icons/members3.png";
import Member4 from "../../assets/icons/members5.png";
import Member5 from "../../assets/icons/members4.png";

import Bell from "../../assets/icons/notification-primary.svg";
import CSS from "../../assets/icons/css3.svg";
import BlueCart from "../../assets/icons/cart-blue.svg";
import Dropbox from "../../assets/icons/dropbox.svg";
import YellowWallet from "../../assets/icons/yellow-wallet.svg";

import {
  DASHBOARD_FIRST_ROW_ITEMS,
  ORDERS,
  PROJECTS,
  USER_STATS,
} from "../../constants/dashboard";

import "./index.scss";

const Dashboard = () => {
  const firstRowImages = useMemo(() => [Wallet, Globe, Doc, Cart], []);
  const statImages = useMemo(() => [Wallet, Rocket, Cart, Settings], []);
  const projectImages = useMemo(
    () => [XD, Atlassin, Slack, Spotify, Jira, In],
    []
  );
  const memberImages = useMemo(
    () => [Member1, Member2, Member3, Member4, Member5],
    []
  );
  const orderImages = useMemo(
    () => [Bell, CSS, BlueCart, YellowWallet, Dropbox, XD],
    []
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <SidebarMenu />
        <div className="dashboard__main">
          <Header />
          <div className="dashboard__first-row">
            {DASHBOARD_FIRST_ROW_ITEMS.map((item, i) => (
              <div key={i} className="dashboard__first-row__grid-item">
                <div className="dashboard__first-row__grid-item__left">
                  <span className="title">{item.title}</span>
                  <div>
                    <strong className="value">{item.value}</strong>
                    <span
                      className={cx("value-change", {
                        "value-change--up": item.hasIncreased,
                        "value-change--down": !item.hasIncreased,
                      })}
                    >
                      {item.change}
                    </span>
                  </div>
                </div>
                <div className="dashboard__first-row__grid-item__right">
                  <img src={firstRowImages[i]} alt="" />
                </div>
              </div>
            ))}
          </div>

          <div className="dashboard__second-row">
            <div className="dashboard__second-row__grid-item dashboard__second-row__first-grid-item">
              <div className="dashboard__second-row__first-grid-item__left">
                <div>
                  <span className="title">Built by developers</span>
                  <h5>Purity UI Dashboard</h5>
                  <p>
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                </div>
                <div className="read-more">
                  <span>Read more</span>
                  <img src={BlackArrow} alt="" />
                </div>
              </div>
              <div className="dashboard__second-row__first-grid-item__right">
                <img src={Chakra} alt="" />
              </div>
            </div>
            <div className="dashboard__second-row__grid-item">
              <div className="image-bg">
                <div className="gradient-bg" />
                <div>
                  <h3>Work with the Rockets</h3>
                  <p>
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who take the opportunity first.
                  </p>
                </div>
                <div className="arrow">
                  <span>Read more</span>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard__third-row">
            <div className="dashboard__third-row__grid-item dashboard__third-row__first-grid-item">
              <div className="bar-chart-wrapper">
                <BarChart />
              </div>
              <div className="dashboard__third-row__first-grid-item__bottom">
                <h5 className="dashboard__third-row__first-grid-item__heading">
                  Active Users
                </h5>
                <p className="dashboard__third-row__first-grid-item__subtext">
                  <span>(+23)</span> than last week
                </p>
                <div className="dashboard__third-row__first-grid-item__stats">
                  {USER_STATS.map((item, i) => (
                    <div key={i} className="stat-wrapper">
                      <div className="stat-top">
                        <div className="stat-icon">
                          <img src={statImages[i]} alt="" />
                        </div>
                        <span>{item.text}</span>
                      </div>
                      <strong className="stat-value">{item.value}</strong>
                      <div className="stat-progress-wrapper">
                        <ProgressBar progress={item.progress} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="dashboard__third-row__grid-item dashboard__third-row__last-grid-item">
              <div className="dashboard__third-row__last-grid-item__top">
                <h5 className="dashboard__third-row__last-grid-item__heading">
                  Sales overview
                </h5>
                <p className="dashboard__third-row__last-grid-item__subtext">
                  <span>(+5) more</span> in 2021
                </p>
              </div>
              <div className="dashboard__third-row__last-grid-item__bottom">
                <LineChart />
              </div>
            </div>
          </div>

          <div className="dashboard__fourth-row">
            <div className="dashboard__fourth-row__grid-item dashboard__fourth-row__first-grid-item">
              <div className="dashboard__fourth-row__first-grid-item__top">
                <div>
                  <h5>Projects</h5>
                  <div className="tick-wrapper">
                    <img src={Tick} alt="" />
                    <p>
                      <strong>30 done</strong> this month
                    </p>
                  </div>
                </div>
                <img src={ThreeDots} alt="menu" className="three-dots" />
              </div>
              <div className="projects">
                <div className="projects__header">
                  <span>COMPANIES</span>
                  <span>MEMBERS</span>
                  <span>BUDGET</span>
                  <span>COMPLETION</span>
                </div>
                {PROJECTS.map((project, i) => (
                  <div
                    key={i}
                    className={cx("projects__row", {
                      "projects__row--last": PROJECTS.length === i + 1,
                    })}
                  >
                    <div className="project__name">
                      <img src={projectImages[i]} alt="" />
                      <span>{project.name}</span>
                    </div>
                    <div className="project__members">
                      {project.members.map((member, idx) => (
                        <img src={memberImages[idx]} alt="" key={idx} />
                      ))}
                    </div>
                    <div className="project__budget">{project.budget}</div>
                    <div className="project__progress-wrapper">
                      <span className="project__progress">
                        {project.progress}%
                      </span>
                      <ProgressBar progress={project.progress} isLarge />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dashboard__fourth-row__grid-item dashboard__fourth-row__last-grid-item">
              <div className="dashboard__fourth-row__last-grid-item__top">
                <h5>Orders overview</h5>
                <p>
                  <strong>+30%</strong> this month
                </p>
              </div>
              <div className="orders">
                {ORDERS.map((order, i) => (
                  <div key={i} className="orders__order">
                    <div className="orders__order__left">
                      <img src={orderImages[i]} alt="" />
                      <div
                        className={cx("vertical-line", {
                          "vertical-line--short": ORDERS.length === i + 1,
                        })}
                      />
                    </div>
                    <div className="orders__order__right">
                      <h6>{order.title}</h6>
                      <span>{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
