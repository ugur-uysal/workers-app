import { Fragment, useEffect, useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";

function App() {
  const localStorageWorkers = JSON.parse(localStorage.getItem("workers")) ?? [];
  const [workers, setWorkers] = useState(localStorageWorkers);

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]);

  return (
    <Fragment>
      <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </Fragment>
  );
}

export default App;
