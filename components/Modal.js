function Modal({ show, onClose, children }) {
  return (
    <div
      style={{
        transform: show ? "translateX(0%)" : "translateX(-200%)",
      }}
      className="absolute top-0 left-0 w-full h-full z-10 transition-all duration-500"
    >
      <div className="container mx-auto max-w-2xl h-full rounded-2xl bg-gray-200 py-6 px-4 bg-[url('https://tse4.mm.bing.net/th?id=OIP.QxJDEvBoKg-OUiOFHurTtQHaEK&pid=Api&P=0&h=180')] bg-cover bg-inherit bg-transparent">
        <button
          onClick={() => {
            onClose(false);
          }}
          className="w-7 h-7 mb-4 font-bold rounded-full bg-white text-red-600"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
