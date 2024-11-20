import React from "react";
import PublicComponent from "../PublicComponent";
import Header from "../page/header";
import Footer from "../page/footer";

const PublicRouter = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <PublicComponent />
        <Footer />
      </div>
    </div>
  );
};

export default PublicRouter;
