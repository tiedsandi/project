import { useEffect, useRef, type FormEvent } from "react";
import type { ModalHandle } from "../UI/Modal";
import { useSessions } from "../../hooks/useSessions";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Input from "../UI/Input";
import type { Session } from "../../store/session-slice";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

export default function BookSession({ session, onDone }: BookSessionProps) {
  const modal = useRef<ModalHandle>(null);
  const { bookSession } = useSessions();

  useEffect(() => {
    modal.current?.open();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);

    bookSession(session);
    onDone();
  }

  return (
    <Modal modalRef={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
