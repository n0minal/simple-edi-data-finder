import { useState } from "react";
import { Container, HighlightArea, PasteArea } from "./styles";

function App() {
  const [ediText, setEdiText] = useState("");
  const [segment, setSegment] = useState("");

  return (
    <div className="App">
      <Container>
        <PasteArea onChange={e => setEdiText(e.target.value)}/>
        <HighlightArea>{ediText}</HighlightArea>
      </Container>

      
      <label>Segment:</label>
      <input onChange={e => setSegment(e.target.value)}/>

      <label>Element:</label>
      <input />
    </div>
  );
}

export default App;
