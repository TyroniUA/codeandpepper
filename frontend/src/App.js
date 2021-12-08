import CustomRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomRoutes />
      </div>
    </BrowserRouter>

  );
}

export default App;
