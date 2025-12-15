import { Fragment, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const minumumWage = 5000;

const AddWorker = ({ setWorkers }) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();

  const addWorkerHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      return setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz.",
      });
    }

    if (+enteredWage < minumumWage) {
      return setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${minumumWage} değerinden büyük bir maaş değeri giriniz.`,
      });
    }

    const addWorker = {
      id: crypto.randomUUID(),
      name: enteredName,
      wage: enteredWage,
    };

    setWorkers((prevState) => [...prevState, addWorker]);

    nameInputRef.current.value = "";
    wageInputRef.current.value = "";
  };

  const errorHandler = () => setError(null);

  return (
    <Fragment>
      {error && <ErrorModal error={error} onConfirm={errorHandler} />}
      <Card className="mt-10 p-5">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label
            className="font-medium max-w-[40rem] w-full mx-auto"
            htmlFor="name"
          >
            Çalışan İsmi
          </label>
          <input
            className="max-w-[40rem] w-full mx-auto border p-2"
            type="text"
            placeholder="Çalışan ismi yazınız."
            id="name"
            ref={nameInputRef}
          />
          <label
            className="font-medium max-w-[40rem] w-full mx-auto"
            htmlFor="wage"
          >
            Maaş Miktarı
          </label>
          <input
            className="max-w-[40rem] w-full mx-auto border p-2"
            type="number"
            placeholder="Maaş giriniz."
            id="wage"
            ref={wageInputRef}
          />
          <Button className="mt-2 w-full mx-auto" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddWorker;
