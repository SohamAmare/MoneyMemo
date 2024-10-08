import logo from "../assets/logo-wo-bg.png";

function ImageSection() {
  return (
    <div className="flex items-center justify-center bg-white w-[500px] h-auto mx-auto">
      <img
        src={logo}
        alt="Money Memo"
        className="w-[500px] h-[400px] border-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      />
    </div>
  );
}

export default ImageSection;
