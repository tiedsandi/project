import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionState = {
  upcomingSessions: Session[];
};

const initialState: SessionState = {
  upcomingSessions: [],
};

const sessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    bookSession: (state, action: PayloadAction<Session>) => {
      const exists = state.upcomingSessions.find(
        (s) => s.id === action.payload.id
      );
      if (!exists) {
        state.upcomingSessions.push(action.payload);
      }
    },
    cancelSession: (state, action: PayloadAction<string>) => {
      state.upcomingSessions = state.upcomingSessions.filter(
        (s) => s.id !== action.payload
      );
    },
  },
});

export const { bookSession, cancelSession } = sessionsSlice.actions;

export default sessionsSlice.reducer;
