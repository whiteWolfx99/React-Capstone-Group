import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinOrLeaveMission } from '../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.id} className={index % 2 === 0 ? 'lightgray' : ''}>
              <td>{mission.name}</td>
              <td className="desc">{mission.description}</td>
              <td>
                <div
                  type="button"
                  className={mission.reserved ? ' badge badge-active' : 'badge'}
                >
                  {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
                </div>
              </td>
              <td>
                <button
                  type="button"
                  className={mission.reserved ? 'button-active' : ''}
                  onClick={() => dispatch(joinOrLeaveMission(mission.id))}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
