import ValidaCPF from "./validacpf";

export default class GenerateCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatted(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "." +
      cpf.slice(9, 11)
    );
  }

  genereteNewCpf() {
    // cpf sem digito
    const cpfWthroutDigit = this.rand();
    const digitOne = ValidaCPF.generateDigit(cpfWthroutDigit);
    const digitTwo = ValidaCPF.generateDigit(cpfWthroutDigit + digitOne);
    const newCpf = cpfWthroutDigit + digitOne + digitTwo;
    return this.formatted(newCpf);
  }
}
