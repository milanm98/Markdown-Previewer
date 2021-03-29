import './App.css';

function App() {
  return (
    <main>
    <div className="h-screen w-screen background">
    </div>
    <h1 className="text-black font-black text-center text-2xl md:text-5xl title">Markdown Previewer</h1>
    <div className="flex flex-col md:flex-row gap-9 center w-5/6 h-5/6">
      <div className="text-1xl md:text-4xl w-7/8 md:w-3/6 h-2/6 md:h-3/6 text-black font-black text-center bg-white">
        <h1 className="border">Editor</h1>
        <div className="w-full h-full">
          <textarea className="w-full h-full"></textarea>
        </div>
      </div>
      <div className="text-1xl md:text-4xl bg-white w-7/8 md:w-3/6 h-2/6 md:h-3/6 text-black font-black text-center">
        <h1 className="border">Preview</h1>
      <div className="w-full h-full bg-white">
        
      </div>
        </div>
      </div>
    </main>
  );
}

export default App;
