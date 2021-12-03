import http from "http";
import Server from "./app.js";

const server = http.Server(Server);
server.listen(process.env.PORT || 3000, () =>
  console.log(`Server is listening..`)
);

Server.use((req, res, next) => {
  const erro = new Error("Recurso não encontrado");
  erro.status = 404;
  next(erro);
});

Server.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});
