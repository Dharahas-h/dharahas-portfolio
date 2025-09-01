import { useEffect } from "react";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";
import useVisitorInfo from "./Hooks/visitorInfo";
import { notifyVisitation } from "./Service/NotificationService";

const App = () => {
  const visitor = useVisitorInfo();

  useEffect(() => {
    if (visitor) {
      console.log("Notifying visitation...");
      notifyVisitation(visitor);
    }
  }, [visitor]);

  return (
    <div className="main-container">
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default App;
