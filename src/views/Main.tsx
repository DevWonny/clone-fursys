import React from "react";
import Video from "../components/Video";
import Intersection from "../components/Intersection";
import Case from "../components/Case";
import Community from "../components/Community";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Video />
      <Intersection />
      <Case caseNum={1} />
      <Case caseNum={2} />
      <Case caseNum={3} />
      <Community />
      <Footer />
    </div>
  );
};

export default Main;
