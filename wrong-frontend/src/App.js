import "./App.css";
import Auth from "./components/Auth";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <main className="bg-gray-500">
      <h1>Auth0 Login</h1>
      <Auth />
      <LoginButton />
      <LogoutButton />
    </main>
  );
}

export default App;
