import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,

  reducers: {
    joinOrLeaveMission: (state, action) => {
      const id = action.payload;
      const newState = state.map((mission) => {
        if (mission.id !== id) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));

      const updatedState = [...newState];
      return updatedState;
    });
  },
});

export const { joinOrLeaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
