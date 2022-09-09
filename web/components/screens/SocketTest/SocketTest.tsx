import { useEffect, useMemo, useState } from "react";
import Button from "../../Button/Button";
import styles from "./SocketTest.module.css";
import { v4 as uuid } from "uuid";

const SocketTest = () => {
  const [received, setReceived] = useState("");
  const [send, setSend] = useState("");

  const ws = useMemo(() => new WebSocket("ws://localhost:8080"), []);

  useEffect(() => {
    if (sessionStorage.getItem("quipwitId") === null)
      sessionStorage.setItem("quipwitId", uuid());

    ws.onopen = () => {
      ws.send(JSON.stringify({ connect: sessionStorage.getItem("quipwitId") }));

      ws.onmessage = async (event: MessageEvent<string>) => {
        console.log(event);
        setReceived(JSON.stringify(JSON.parse(event.data), undefined, 2));
      };
    };
  }, []);

  const sendPayload = () => {
    if (ws) {
      ws.send(send);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sockets Tester</h1>
      <h2>Received: </h2>
      <textarea
        className={styles.textarea}
        tabIndex={-1}
        readOnly
        value={received}
      />
      <h2>Send: </h2>
      <textarea
        className={styles.textarea}
        tabIndex={-1}
        onChange={({ target: { value } }) => setSend(value)}
      />
      <Button text="Send" onClick={sendPayload} />
    </div>
  );
};

export default SocketTest;
