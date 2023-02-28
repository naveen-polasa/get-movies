const Loading = () => {
  return (
    <div className="text-center text-3xl flex items-center gap-x-6 justify-center min-h-screen bg-green-100 ">
      <span className="animate-spin inline-block  h-12 w-12  rounded-full text-white border-4 border-red-300  border-t-red-500"></span>
      Loading...
    </div>
  );
};
export default Loading;
