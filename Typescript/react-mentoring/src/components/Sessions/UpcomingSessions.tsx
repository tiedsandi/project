import { useEffect, useRef } from "react";

import Button from "../UI/Button";
import Modal, { type ModalHandle } from "../UI/Modal";
import { useSessionsContext } from "../../store/sessions-context";
import UpcomingSession from "./UpcomingSession";

type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  console.log(sessionsCtx);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string) {
    sessionsCtx.cancelSession(sessionId);
  }
  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal modalRef={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}
