import React from "react";
import PublicComponent from "../PublicComponent";
import Header from "../page/header";
import Footer from "../page/footer";

const PublicRouter = () => {
  return (
    <div>
      <Header />
      <PublicComponent />
      <Footer />
    </div>
  );
};

export default PublicRouter;
