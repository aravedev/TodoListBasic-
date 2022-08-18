import { useState } from "react";

import CardTask from "./Components/CardTask";
import TaskDisplay from "./Components/TaskDisplay";

function App() {
  return (
    <div className="container mx-auto justify-center items-center flex flex-col lg:flex-row  min-h-screen">
      <CardTask></CardTask>
      <TaskDisplay></TaskDisplay>
    </div>
  );
}

export default App;
