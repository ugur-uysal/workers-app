import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  const { error, onConfirm } = props;
  const { title, message } = error;

  return (
    <div className="error-modal">
      <div
        className="fixed bg-white/30 w-screen h-screen top-0 backdrop-blur-sm"
        onClick={onConfirm}
      ></div>
      <Card className="w-[36rem] p-0 z-20 shadow-xl">
        <header className="bg-red-700 p-4 rounded-t-xl">
          <h2 className="text-center text-white text-xl">{title}</h2>
        </header>
        <section className="p-4">{message}</section>
        <footer className="p-4 flex justify-end">
          <Button className="w-32" onClick={onConfirm}>
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
