import express from "express";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar o servidor.`);
  }
});

interface UserInterface {
  name: string;
  cpf: number;
  birth: Date;
  balance: number;
  extract: ExtractListInterface;
}

interface ExtractInterface {
  value: number;
  date: Date;
  description: string;
}

interface ExtractListInterface extends Array<ExtractInterface> {}

interface UsersInterface extends Array<UserInterface> {}

const userList: UsersInterface = [
  {
    name: "Pedro",
    cpf: 16343406719,
    birth: new Date(1996, 10, 1),
    balance: 1000,
    extract: [
      {
        value: 200,
        date: new Date(2020, 1, 1),
        description: "Saque conta corrente",
      },
      {
        value: 200,
        date: new Date(2021, 1, 1),
        description: "Saque conta corrente",
      },
      {
        value: 200,
        date: new Date(2022, 12, 13),
        description: "Saque conta corrente",
      },
      {
        value: 200,
        date: new Date(2023, 12, 13),
        description: "Saque conta corrente",
      },
    ],
  },
];

app.post("/new-user", (req, res) => {
  const body: UserInterface = req.body;
  const birth = new Date(body.birth);

  const newUser: UserInterface = {
    name: body.name,
    cpf: body.cpf,
    birth: birth,
    balance: 0,
    extract: [],
  };

  const checkAge = () => {
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    var month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < body.birth.getDate())) {
      age--;
    }
    return age;
  };

  const [checkCpf] = userList.filter((user: any) => {
    return user.cpf === Number(newUser.cpf);
  });

  if (checkAge() > 18) {
    if (!checkCpf) {
      userList.push(newUser);
      res.send(userList);
    } else {
      res.send("Cpf ja cadastrado");
    }
  } else {
    res.send("Voce deve ser maior de 18 anos para abrir uma conta");
  }
});

app.get("/users", (req, res) => {
  res.send(userList);
});

app.get("/balance/:cpf", (req, res) => {
  const cpf = req.params.cpf;

  const [selectedUser] = userList.filter((user: any) => {
    return user.cpf === Number(cpf);
  });

  const balance = "R$ " + selectedUser.balance;

  res.send(balance);
});

app.put("/deposit/:cpf", (req, res) => {
  const cpf = req.params.cpf;
  const body: UserInterface = req.body;

  const [selectedUser] = userList.filter((user: any) => {
    return user.cpf === Number(cpf);
  });

  if (selectedUser.name === body.name) {
    selectedUser.balance = selectedUser.balance + body.balance;
    const balance = "R$ " + selectedUser.balance;
    res.send(balance);
  } else {
    res.send("Nome incorreto");
  }
});

app.post("/transaction/:cpf", (req, res) => {
  const cpf = req.params.cpf;
  const body: ExtractInterface = req.body;

  const [selectedUser] = userList.filter((user: any) => {
    return user.cpf === Number(cpf);
  });

  if (new Date(body.date) < new Date()) {
    res.send("Selecione uma data posterior a data de hoje");
  }
  if (selectedUser.balance < body.value) {
    res.send("Voce não tem saldo para completar a transação");
  }
  if (!body.date) {
    selectedUser.extract.push({
      value: body.value,
      date: new Date(),
      description: body.description,
    });
    res.send(selectedUser);
  } else {
    selectedUser.extract.push({
      value: body.value,
      date: new Date(body.date),
      description: body.description,
    });
    res.send(selectedUser);
  }
});

app.put("/balanceUpdate/:cpf", (req, res) => {
  const cpf = req.params.cpf;

  const [selectedUser] = userList.filter((user: any) => {
    return user.cpf === Number(cpf);
  });

  const launchesBeforeToday = selectedUser.extract.filter((launch: any) => {
    return launch.date < new Date();
  });

  let missingUpdates = 0;

  launchesBeforeToday.forEach((element) => {
    missingUpdates += element.value;
  });

  const updatedBalance = "R$" + (selectedUser.balance + missingUpdates);

  res.send(updatedBalance);
});
