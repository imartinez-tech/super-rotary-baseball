import React from "react";
import TicketList from "../components/TicketList";
import TeamMenu from "../components/TeamMenu";
import Cart from "../components/Cart";
import Ticket from "../components/Ticket";

const Home = () => {
  return (
    <div className="container">
      
      {/* <TicketList /> */}
      <Ticket />
      <Cart />
    </div>
  );
};

export default Home;
