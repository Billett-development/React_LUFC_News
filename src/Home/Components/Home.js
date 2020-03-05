import React from "react";

import HomePosts from "./HomePosts";
import Navbar from "../../Common/Components/Navbar";
import HeroVideo from "../../Common/Components/HeroVideo";
import HeroOverlay from "../../Common/Components/HeroOverlay";
import RecentNews from "../../Common/Components/RecentNews";
import About from "../../Common/Components/About";
import Highlights from "../../Common/Components/Highlights";
import Products from "../../Common/Components/Products";
import Partners from "../../Common/Components/Partners";
import Footer from "../../Common/Components/Footer";
import { Segment } from "semantic-ui-react";

export default function Home() {
  return (
    <Segment>
      <Navbar />
      <HeroVideo />
      <HeroOverlay />
      <RecentNews />
      <About />
      <Highlights />
      <Products />
      <Partners />
      <Footer />
    </Segment>

  );
}
