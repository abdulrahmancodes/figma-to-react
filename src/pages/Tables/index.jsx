import React from "react";
import Header from "../../components/Header";

import SidebarMenu from "../../components/SidebarMenu";
import AuthorsTable from "../../components/AuthorsTable";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

import "./index.scss";

const Tables = () => {
  return (
    <div className="tables">
      <SidebarMenu page="Tables" />
      <div className="tables__main">
        <Header page="Tables" />
        <AuthorsTable />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Tables;
