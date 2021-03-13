import './App.css';

import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="0ebb9b47-0169-4479-8016-dd7f6b8dabc4"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
      />
    </div>
  );
}

export default App;
