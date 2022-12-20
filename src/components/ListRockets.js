import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserveRocket } from '../Redux/Rockets/RocketSlice';

function ListRockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReseve = (id) => {
    const rocket = rockets.find((rocket) => rocket.id === id);
    const { reserved } = rocket;
    dispatch(reserveRocket({ id, reserved: !reserved }));
  };

  return (
    <div className="rocket_container">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket_row">
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <div className="rocket-col">
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button className={rocket.reserved ? 'cancel_Reservation' : 'Reserve_rocket'} onClick={() => handleReseve(rocket.id)} type="button">{rocket.reserved ? 'cancel Reservation' : 'Reserve Rocket' }</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListRockets;
