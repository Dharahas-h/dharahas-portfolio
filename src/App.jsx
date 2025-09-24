import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";

const App = () => {
  // const visitor = useVisitorInfo();

  // disabled temporarily
  // useEffect(() => {
  //   if (visitor) {
  //     console.log("Notifying visitation...");
  //     notifyVisitation(visitor);
  //   }
  // }, [visitor]);

  return (
    <div className="main-container">
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default App;
