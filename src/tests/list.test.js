import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ListRockets from '../components/ListRockets';
import { reserveRocket } from '../Redux/Rockets/RocketSlice';

const mockStore = configureStore([]);

describe('ListRockets component', () => {
  let store;
  let dispatch;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: '1',
            rocket_name: 'Falcon 1',
            reserved: false,
            flickr_images: ['image1.jpg'],
            description: 'A small rocket',
          },
          {
            id: '2',
            rocket_name: 'Falcon 9',
            reserved: false,
            flickr_images: ['image2.jpg'],
            description: 'A medium rocket',
          },
          {
            id: '3',
            rocket_name: 'Falcon Heavy',
            reserved: true,
            flickr_images: ['image3.jpg'],
            description: 'A heavy rocket',
          },
        ],
      },
    });
    dispatch = jest.fn();
    store.dispatch = dispatch;
  });

  it('should render the component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ListRockets />
      </Provider>,
    );
    expect(getAllByTestId('rocket-container')).toBeTruthy();
  });

  it('should render the correct number of rockets', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ListRockets />
      </Provider>,
    );
    expect(getAllByTestId('rocket-container')).toHaveLength(3);
  });

  it('should dispatch the reserveRocket action when the cancel reservation button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ListRockets />
      </Provider>,
    );
    fireEvent.click(getByText('cancel Reservation'));
    expect(dispatch).toHaveBeenCalledWith(
      reserveRocket({ id: '3', reserved: false }),
    );
  });
});
