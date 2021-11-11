import React, { useEffect } from 'react';
import Ticket from '../Ticket';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_TICKETS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_TICKETS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';


function TicketList() {
  const [state, dispatch] = useStoreContext();

  const { currentTeam } = state;

  const { loading, data } = useQuery(QUERY_TICKETS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_TICKETS,
        tickets: data.tickets,
      });
      data.tickets.forEach((ticket) => {
        idbPromise('tickets', 'put', ticket);
      });
    } else if (!loading) {
      idbPromise('tickets', 'get').then((tickets) => {
        dispatch({
          type: UPDATE_TICKETS,
          tickets: tickets,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterTickets() { 
    if (!currentTeam) {
      return state.tickets;
    }

    return state.tickets.filter(
      (ticket) => ticket.team._id === currentTeam
    );
  }

  return (
    <div className="my-2">
      <h2>Our Tickets:</h2>
      {state.tickets.length ? (
        <div className="flex-row">
          
        </div>
      ) : (
        <h3>No Tickets</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default TicketList;
