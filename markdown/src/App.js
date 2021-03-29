import './App.css';

function App() {
  return (
    <main>
    <div className="h-screen w-screen background">
    </div>
    <h1 className="text-black font-black text-center text-5xl title">Markdown Previewer</h1>
    <div className="flex flex-col md:flex-row gap-9 center w-5/6 h-5/6">
      <div className="text-4xl w-3/6 h-3/6 ring 8 text-black font-black text-center bg-white">
        <h1 className="border">Editor</h1>
        <textarea className="w-full h-full"></textarea>
      </div>
      <div className="text-4xl bg-white w-3/6 h-3/6 ring 8 text-black font-black text-center">
        <h1 className="">Preview</h1>
      <div className="">
      </div>
        </div>
      </div>
    </main>
  );
}

export default App;
