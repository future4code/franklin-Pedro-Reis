# Respostas

## 1.a) Explique os demais comandos que estão nessa query.

```CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

CREATE TABLE - Serve pra criar uma nova tabela, deve-se inserir o nome da tabela ao final, depois as colunas da tabela.

Colunas da tabela - São os nomes dos dados seguidos dos tipos que vão entrar na tabela, nesse caso tempos id, name, salary, birth_date e gender.

Tipos - Representam os tipos de dados que cada coluna vai receber.

- VARCHAR: strings/letras
- FLOAT: numberos não inteiros, fracionários
- DATE: data

---

## 1.b) Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

SHOW DATABASES - Mostra as base de dados

SHOW TABLES - Mostra as tableas

---

## 1.c) Utilize o comando DESCRIBE atores e explique os resultados.

DESCRIBE atores - Mostra as colunas da tabela.

---

## 2.a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

```INSERT INTO atores (id, name, salary, birth_date, gender)
VALUES(
  2,
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```

---

## 2.a) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 2. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

Error Code: 1602. Duplicate entry "2" for primary key.
Em português: Código de erro: 1602. Entada duplicada 2 como chave primária.

O erro ocorreu porque a chave primária deve ser única, pois ela serve para diferenciar cada item da tabela. Nesse caso ela se repetiu e o programa não permite a inserção.

---

### Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

## 2.c)

```INSERT INTO atores (id, name, salary)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

Não permite a inserção, pois não recebe todos os parâmetros necessários entre parênteses após a declaração do comando, falta birth_date e gender.

## 2.d)

```INSERT INTO atores (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18",
  "male"
);
```

Não permite a inserção, pois não recebe name que é um parâmetro NOT NULL.

## 2.e)

```INSERT INTO atores (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  1979-03-26,
  "female"
);
```

Não permite a inserção, pois a data deve ser inserida entre aspas.

## 2.f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

```
INSERT INTO atores (id, name, salary, birth_date, gender)
VALUES(
  "3",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

```
INSERT INTO atores (id, name, salary, birth_date, gender)
VALUES(
  "5",
  "Antônio Fagundes",
  400000,
  "1949-04-18",
  "male"
);
```

```
INSERT INTO atores (id, name, salary, birth_date, gender)
VALUES(
  "6",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);
```

---

## 3.a) Escreva uma query que retorne todas as informações das atrizes

```
SELECT * from atores WHERE gender = "female"
```

---

## 3.b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos

```
SELECT salary from atores WHERE name = "Tony Ramos"
```

---

## 3.c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

```
SELECT * from Actor WHERE gender = "invalid";
```

---

## 3.d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

```
SELECT * from atores WHERE salary > 500000
```

---

## 3.e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.

Comando dado:

```
SELECT id, nome from atores WHERE id = "2"
```

Comando correto:

```
SELECT id, name from atores WHERE id = 2
```
