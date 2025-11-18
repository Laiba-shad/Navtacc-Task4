import "./App.css";
import ContactDisplay from "./Components/ContactDisplay";
import FriendComponent from "./Components/FriendComponent";


function App() {
  return (
    <div className="flex gap-10">
      <FriendComponent/>
   <ContactDisplay/>
    </div>
  );
}

export default App;
