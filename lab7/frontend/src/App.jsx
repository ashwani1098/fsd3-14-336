
import { useState } from "react";
import Book from "./components/Book";
import Pen from "./components/Pen";
import { books } from "./data/books";
import { pens } from "./data/pens";
import Fruit from "./components/Fruit";
import Event from "./components/Event";

const MyButton = () => {
  const [count, setCount] = useState(1);

  const handleSubmit = () => {
    console.log("button clicked:", count);
    setCount((prev) => prev + 1);
  };

  return (
    <button
      className="bg-black text-white 
    text-xl rounded-md 
    m-4 px-4 py-2"
      onClick={handleSubmit}
    >
      Clicked {count} times
    </button>
  );
};

export default function App() {
  return (
    <>
      <MyButton />

      {books.map((book) => (
        <Book key={book.bname} book={book} />
      ))}

      {pens.map((pen) => (
        <Pen key={pen.company} pen={pen} />
      ))}

      <Fruit />
      <Event />
    </>
  );
}
