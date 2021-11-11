import React from "react";
import TicketList from "../components/TicketList";
import TeamMenu from "../components/TeamMenu";
import Cart from "../components/Cart";
// import Ticket from "../components/Ticket";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className="container">
      <div className="App">
      <SearchBar placeholder="Choose a Team..." data={TicketList}/>
    </div>
      <TeamMenu />
      {/* <TicketList /> */}
      {/* <Ticket 
      /> */}
      <Cart />
    </div>
  );
};

export default Home;
