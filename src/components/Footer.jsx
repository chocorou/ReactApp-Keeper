//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";

const date = new Date();
const currentYear = date.getYear() + 1900;
console.log(currentYear);

function Footer() {
  return (
    <footer>
      <p>Copyright {currentYear}</p>
    </footer>
  );
}

export default Footer;
