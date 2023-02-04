
import Container from '@mui/material/Container';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container  fixed sx={{
          bgcolor: "#84a98c",
          boxShadow: 4,
          borderRadius: 2,
          height: 900
        }}>
          <Container sx={{
            bgcolor: "#cad2c5",
            boxShadow: 1,
            borderRadius: 2,
            width: 0.9/1,
            mt: 50
          }}>
            [//input code to insert mp3 and .wav files]
            </Container>
        </Container>
      </header>
    </div>
  );
}

export default App;
