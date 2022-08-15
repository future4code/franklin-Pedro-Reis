import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'ana'", () => {
    const ehPalindromo = checaPalindromo("ana");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna false para 'pedro'", () => {
    const ehPalindromo = checaPalindromo("pedro");
    expect(ehPalindromo).toEqual(false);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna false para 'onibus'", () => {
    const ehPalindromo = checaPalindromo("onibus");
    expect(ehPalindromo).toEqual(false);
  });
});
