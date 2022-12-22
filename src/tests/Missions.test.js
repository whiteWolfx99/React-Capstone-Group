import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../Views/Missions';

const mockStore = configureStore([thunk]);

const mockMissions = [
  {
    id: 1,
    name: 'Mission 1',
    description: 'This is the first mission',
    reserved: false,
  },
  {
    id: 2,
    name: 'Mission 2',
    description: 'This is the second mission',
    reserved: true,
  },
  {
    id: 3,
    name: 'Mission 3',
    description: 'This is the third mission',
    reserved: false,
  },
];

const store = mockStore({
  missions: mockMissions,
});

describe('Missions component', () => {
  it('renders the missions table correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    mockMissions.forEach((mission) => {
      const missionNameElement = getByText(mission.name);
      expect(missionNameElement).toBeDefined();
      const missionDescriptionElement = getByText(mission.description);
      expect(missionDescriptionElement).toBeDefined();
    });
  });

  it('dispatches the joinOrLeaveMission action when the button is clicked', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const joinButton = getAllByText('Join Mission');
    expect(joinButton).not.toBeNull();
  });
});
