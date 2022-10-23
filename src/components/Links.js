import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="wrapper">
      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </a>
      <a
        href="http://books.zuri.team"
        id="books"
        data-info="Check out coding and design books from Zuri"
      >
        Zuri Books
      </a>
      <a
        href="http://books.zuri.team/python-for-beginners?ref_id=alvinwanjala"
        id="book__python"
      >
        Python Books
      </a>
      <a
        href="https://background.zuri.team"
        id="pitch"
        data-info="Discover coders that standout from the crowd"
      >
        Background Check for Coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        id="book__design"
        data-info="Secrets to make your designs stand out"
      >
        Design Books
      </a>
    </div>
  );
};

export default Links;
