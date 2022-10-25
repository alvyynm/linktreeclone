import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="wrapper">
      <a href="https://twitter.com/alvyynm" className="link">
        Twitter Link
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri" className="link">
        Zuri Team
      </a>
      <a
        href="http://books.zuri.team"
        id="books"
        data-info="Check out coding and design books from Zuri"
        className="link"
      >
        Zuri Books
      </a>
      <a
        href="http://books.zuri.team/python-for-beginners?ref_id=alvinwanjala"
        id="book__python"
        className="link"
      >
        Python Books
      </a>
      <a
        href="https://background.zuri.team"
        id="pitch"
        data-info="Discover coders that standout from the crowd"
        className="link"
      >
        Background Check for Coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        id="book__design"
        data-info="Secrets to make your designs stand out"
        className="link"
      >
        Design Books
      </a>
    </div>
  );
};

export default Links;
