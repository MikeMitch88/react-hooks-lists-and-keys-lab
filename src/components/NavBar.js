import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const anch = links.map((link) => 
  <a key={link} href={"#" + link}>{link}</a>
  )

  return <nav>
    {/* display an <a> tag for each link here */}
    {anch}

  </nav>;
}

export default NavBar;
