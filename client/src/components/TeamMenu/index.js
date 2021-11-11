import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_TEAMS,
  UPDATE_CURRENT_TEAM,
} from '../../utils/actions';

import { QUERY_TEAMS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import BasicCard from '../BasicCard';


// search bar code



function TeamMenu() {
  const [state, dispatch] = useStoreContext();

  const { teams } = state;


  const { loading, data: teamData } = useQuery(QUERY_TEAMS);

  useEffect(() => {
    if (teamData) {
      dispatch({
        type: UPDATE_TEAMS,
        teams: teamData.teams,
        
      });
      teamData.teams.forEach((teams) => {
        idbPromise('teams', 'put', teams);
      });
    } else if (!loading) {
      idbPromise('teams', 'get').then((teams) => {
        dispatch({
          type: UPDATE_TEAMS,
          teams: teams,
        });
      });
    }
  }, [teamData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_TEAM,
      currentTeams: id,
    });
  };
 

  return (
    <div>
      {/* <SearchBar input={input}
      onChange={updateInput}
      /> */}
      <h2>Choose a Team:</h2>
        
          cardtitle
          {BasicCard()}
        {teams.map((item) => (
          <div
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            
            {item.name}
            
          </div>
        ))}
        
     
    </div>
  );
}



export default TeamMenu;
