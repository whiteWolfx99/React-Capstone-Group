import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const ReservedMissions = missions.filter((x) => x.reserved === true);
  const ReservedRockets = rockets.slice(0, 4).filter((x) => x.reserved === true);

  return (
    <div className="profile">
      <div className="reservedMissions">
        <h3>My Missions</h3>
        <table border="1">
          <tbody>
            {ReservedMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="reservedRockets">
        <h3>My Rockets</h3>
        <table border="1">
          <tbody>
            {ReservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyProfile;
