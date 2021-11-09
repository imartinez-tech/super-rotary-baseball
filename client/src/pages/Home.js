import React from "react";
import TicketList from "../components/TicketList";
import TeamMenu from "../components/TeamMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <TeamMenu />
      <TicketList />
      <Cart />
    </div>
  );
};

export default Home;
