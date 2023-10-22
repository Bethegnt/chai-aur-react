import './App.css';
import Card from './components/Card';
function App() {

  let obj = {
    usename: "Goggi",
    age:21
  }
  return (
   <>
   <Card usename = "Gagan"/>
   <Card usename = "Tyagi"/>
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello this is chai aur code</h1>
   </>
  );
}

export default App;



