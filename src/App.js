import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  const project_ID = "de29095e-9941-40d3-85be-ccfa514bb24b";
  let userName = "AdminMike";
  let userSecret = "123123";
  return (
    <ChatEngine
      height="100vh"
      projectID={project_ID}
      userName={userName}
      userSecret={userSecret}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
