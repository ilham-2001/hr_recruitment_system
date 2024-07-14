import { useRef } from 'react';

import Navigation from './components/Navigation';

function App() {
  const formRef = useRef(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const requstData = new FormData();
    Array.from(formRef.current.elements).forEach(element => {
      if (element.name && element.files && element.files[0]) {
        requstData.append("files", element.files[0]);
      }
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/recruitment/administration", {
        method: "POST",
        body: requstData,
      });
      const data = await response.json()
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <main>
      <Navigation />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          ref={formRef}
          onSubmit={onFormSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Upload Files</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              File 1
            </label>
            <input
              type="file"
              name="transcript"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              File 2
            </label>
            <input
              type="file"
              name="cv"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </main>
    // <div className='container mx-auto'>
    //   <form
    //     ref={formRef}
    //     onSubmit={onFormSubmit}
    //     className='flex flex-col gap-2 items-center'>
    //     <input type="file" name='transcript'/>
    //     <input type="file" name='cv'/>
    //     <button className='w-[90px] border border-gray-200 rounded-xl' type='submit'>Submit</button>
    //   </form>
    // </div>
  );
}

export default App;
