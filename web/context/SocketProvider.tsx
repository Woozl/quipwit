import { createContext, useContext, useMemo } from "react";

const SocketContext = createContext<WebSocket | undefined>(undefined);

interface SocketProviderProps {
  children: React.ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const ws = useMemo(() => new WebSocket("ws://localhost:8080"), []);

  return <SocketContext.Provider value={ws}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error(
      "useSocket can only be used in components under a SocketProvider."
    );
  }
  return context;
};
