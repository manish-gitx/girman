import SearchBox from "../components/SearchBox";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl text-center mb-12">
          <img src="/logo.svg" alt="Girman Technologies" className="h-16 mx-auto mb-8" />
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Home