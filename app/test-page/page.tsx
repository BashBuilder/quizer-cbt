"use client";

import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const Test = () => {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [socketInfo, setsocketInfo] = useState<{ [key: string]: any }>({});
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const socketRef = useRef<any>(null);
  const [message, setmessage] = useState("");

  useEffect(() => {
    // if (!connectionKey || !socketRef.current) return;
    if (!socketRef.current) return;

    socketRef.current.emit("register_connection", {
      wsConnectionKey:
        "egDoJXX+9AdgtWFFgGzHkQwgGcrB1f29bsl+Kqy1D/8KU9gXwuchuElQcfFiy8Vd/MoXO8EouA07YMKZLPCzN5MvoTTla/+c5bYlutZXLf2i9x12vzyER5ZwlNEiiN6bpAWNFLHal6meaoXon6Q0a0To1J5jpAvbzEUqLC3/uwoj4+FH2qtWgNkh96vi6T7aBwFNLlJuqK8k0UEhdJW0RhSIJFFx4G+JA7tFfv8+yPC4S+Mob7f1rKs7NhC/Dl/aIUHXnlSfCqv5IH6jGD5fvju2+OzUehv1hA4DAgWEBYhoeoEHtXqDbE+XVeYwPp4rg+/TmTl8RIFfgy6EJ366Zw==",
      origin: "external",
    });
    // }, [connectionKey]);
  }, [socketRef]);

  const handleTestEmit = () => {
    if (!socketInfo || !socketInfo?.clientKey)
      return alert("Socket not connected yet");

    const socket = socketRef.current;

    socket.emit("real_time_message", {
      channels: ["agent"],
      clientKey: socketInfo.clientKey,
      companyId: "655bbbf2bf0275d9b886a9de",
      origin: "external",
      message: { text: "Hello from client" },
    });
  };

  useEffect(() => {
    socketRef.current = io("https://test-mmpconsulting.dev.inhouzapp.io", {
      path: "/websocket/socketio",
      transports: ["websocket"],
    });
    const socket = socketRef.current;
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.on("register_response", (value: any) => {
      console.log("register_response", value);
      setsocketInfo(value);

      socket.emit("room_join_event", {
        channels: ["agent"],
        clientKey: value?.clientKey,
        companyId: "655bbbf2bf0275d9b886a9de",
        origin: "external",
      });
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.on("room_join_success", (data: any) => {
      console.log("room_join_success", data);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    socket.on("real_time_message", (data: any) => {
      console.log("incoming_message", data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      />
      <button onClick={handleTestEmit}>Emit Test</button>
    </div>
  );
};

export default Test;
