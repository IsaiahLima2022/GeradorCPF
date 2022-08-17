import Geracpf from "./moduls/Geracpf";

import "./assets/css/style.css";

(() => {
  const generate = new GenerateCPF();
  const cpfGenerate = document.querySelector(".cpf-gerado");
  cpfGenerate.innerHTML = generate;
})();
