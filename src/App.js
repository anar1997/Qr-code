import './App.css';
import QRCodeComponent from './QRCode';

function App() {
  const menuUrl = 'https://alamber.com.my/ambermenu/'
  return (
    <div className="App">
      <h1>Restoran menusu</h1>
      <QRCodeComponent url={menuUrl}/>
    </div>
  );
}

export default App;
