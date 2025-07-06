import { useEffect, useRef } from "react";
import Button from "../UI/Button";
import Modal, { type ModalHandle } from "../UI/Modal";
import { useSessions } from "../../hooks/useSessions";
import UpcomingSession from "./UpcomingSession";

type UpcomingSessionsProps = {
  onClose: () => void;
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<ModalHandle>(null);
  const { upcomingSessions, cancelSession } = useSessions();

  useEffect(() => {
    modal.current?.open();
  }, []);

  const hasSessions = upcomingSessions.length > 0;

  return (
    <Modal modalRef={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => cancelSession(session.id)}
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
