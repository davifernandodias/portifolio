import { useState } from "react";

import Container from "./components/container/Container";

function App() {
  const [messagem, setMessagem] = useState('olá mundo');


  // hook -> funcão especial, permite utiliza algumas funcionalidade espeficicas do reat
  // State (Estado) -> server para fazer uma atualização e refrash a página

  return(
    <Container/>
  )
}

export default App;