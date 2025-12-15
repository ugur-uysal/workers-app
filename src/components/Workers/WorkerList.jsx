import Card from "../UI/Card";

const WorkerList = ({ workers, setWorkers }) => {
  if (workers.length < 1) return;

  const deleteWorkerHandle = (id) => {
    const newWorkers = workers.filter((worker) => worker.id !== id);

    setWorkers([...newWorkers]);
  };

  const numberFormat = (wage) => {
    return Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(wage);
  };

  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((worker) => (
          <li
            key={worker.id}
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow"
            onClick={() => deleteWorkerHandle(worker.id)}
          >
            <span>{worker.name}</span>
            <span className="text-teal-700 font-medium">
              {numberFormat(worker.wage)}₺
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
