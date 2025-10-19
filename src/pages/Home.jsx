function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to ElectroMart ⚡</h1>
      <p className="text-lg mb-6">Your one-stop shop for the latest gadgets and electronics!</p>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black transition">
        Shop Now
      </button>
    </div>
  );
}
export default Home;
