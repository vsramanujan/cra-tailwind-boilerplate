import React from 'react';
import Layout from './components/Layout';

function App() {

  return (
    <Layout>
      <div className="flex flex-col items-center m-auto">
        <h1 className="text-7xl font-hairline text-gray-700 bg-green-200 pl-6 pr-6 rounded-md hover:bg-red-300 hover:text-gray-100 cursor-default ease-in-out duration-200">
          HELLO WORLD
          </h1>
        <p className="leading-8 pt-12 text-center text-gray-700 font-mono text-lg">
          Welcome to the boilerplate app that gives you all the benefits of an <span className="font-semibold">
            un-ejected CRA + Tailwind + Express!
            </span> <br />
            Let's build some shit!
        </p>
      </div>
    </Layout>
  );
}

export default App;
