const Loader = () => {
  return (
    <div className="loader_overlay fixed inset-0 flex items-center justify-center w-full h-full bg-black opacity-50 z-50">
      <div className="spinner border-4 border-t-4 border-gray-200 rounded-full w-25 h-25 animation-spin"></div>
      {/* O un testo: <p>Caricamento...</p> */}
    </div>
  );
};

export default Loader;
