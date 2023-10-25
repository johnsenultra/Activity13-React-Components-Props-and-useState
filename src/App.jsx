import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Header';
import Footer from './Footer'
import Counter from './Counter';

function App() {

  const [title, setTitle] = useState("React Fundamentals");
  const [copyright, setCopyright] = useState("@All Rights Reserved | Johnsen Ultra");
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Header title={title} count={count} />
        <Counter count={count} stateCount={setCount} />
        <Footer copyright={copyright} />
      </main>
    </>
  )
}

export default App
