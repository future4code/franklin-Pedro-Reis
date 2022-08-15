import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  it("retorna true para [1,2,1]", () => {
    const repete = checaItensDuplicados([1, 2, 1]);
    expect(repete).toEqual(true);
  });
});

describe("Checa itens duplicados", () => {
  it("retorna true para ['ana','pedro','ana']", () => {
    const repete = checaItensDuplicados(["ana", "pedro", "ana"]);
    expect(repete).toEqual(true);
  });
});

describe("Checa itens duplicados", () => {
  it("retorna false para ['joao','pedro','ana']", () => {
    const repete = checaItensDuplicados(["joao", "pedro", "ana"]);
    expect(repete).toEqual(false);
  });
});
