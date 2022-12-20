import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../Redux/Rockets/RocketSlice';

function ListRockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="rocket_container">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket_row">
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-col">
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListRockets;
