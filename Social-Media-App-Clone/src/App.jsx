import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";
import { Box } from "@mui/material";
function App() {
  return (
    <div className="bg-slate-600">
      <Box>
        <NavBar />
        <SideNav />
      </Box>
    </div>
  );
}
export default App;
