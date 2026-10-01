
const b1={
  picUrl:"https://m.media-amazon.com/images/I/811V9+pG1JL._AC_UY218_.jpg",
  bname:"Dr Kent Eng",
  price:1200,
  quantity:1,
  rating:5.0
};
const b2={
  picUrl:"https://m.media-amazon.com/images/I/81AQ6tZKPiL._AC_UY218_.jpg",
  bname:"Dr Kent Hindi",
  price:1500,
  quantity:1,
  rating:4.0
};

export default function App(){
  return (
    <>
    <h1>Book Store</h1>
    <div className="container">
    <Book book={b1}/>
    <Book book={b2}/>
    <Book book={b1}/>
    <Book book={b2}/>
    </div>
    
    </>
  );
}