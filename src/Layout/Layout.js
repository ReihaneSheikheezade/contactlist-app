const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-sabz">
      <main className="w-full h-screen text-center">
        <h1 className="text-4xl font-bold font-serif pt-8 border-b-2 border-gray-300 mb-16 ">
          Contact App
        </h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
