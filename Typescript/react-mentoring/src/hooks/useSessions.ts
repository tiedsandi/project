import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  bookSession,
  cancelSession,
  type Session,
} from "../store/session-slice";

export function useSessions() {
  const dispatch = useDispatch<AppDispatch>();
  const upcomingSessions = useSelector(
    (state: RootState) => state.sessions.upcomingSessions
  );

  const book = (session: Session) => dispatch(bookSession(session));
  const cancel = (id: string) => dispatch(cancelSession(id));

  return { upcomingSessions, bookSession: book, cancelSession: cancel };
}
