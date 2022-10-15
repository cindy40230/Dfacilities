import React from "react";

import Mouse from "../composants/Mouse";
import Navigation from "../composants/Navigation";
import SocialNetwork from "../composants/SocialNetwork";

export default function Header() {
  return (
    <>
     <Mouse />
        <Navigation />
        <SocialNetwork />
    </>
  );
}