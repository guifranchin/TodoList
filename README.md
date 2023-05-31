# TodoList
Este projeto é uma aplicação de lista de tarefas simples criada com TypeScript e React. Ele permite que os usuários adicionem e removam tarefas.

## Sumário

- [Início Rápido](#início-rápido)
- [Comandos Disponíveis](#comandos-disponíveis)

## Início Rápido

1. Faça o clone do repositório em sua máquina local.
2. Instale as dependências com o comando `npm install`.
3. Inicie o servidor de desenvolvimento com o comando `npm run dev`.

## Comandos Disponíveis

```json
"scripts": {
    "dev": "vite", // Inicia o servidor de desenvolvimento
    "build": "tsc && vite build", // Compila o projeto para produção
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0", // Executa o lint no código
    "preview": "vite preview", // Inicia o servidor de produção para visualização
    "server": "json-server --watch ./src/configs/database/db.json -p 3333" // Inicia o servidor JSON para simular uma API
}
```

## Contribuição

Se você gostaria de contribuir com este projeto, sinta-se à vontade para criar um fork e enviar uma solicitação de pull. Assegure-se de descrever suas mudanças em detalhes para que possam ser revisadas e possivelmente incluídas no projeto.

## Suporte

Se você encontrar algum problema ao usar este projeto, por favor, crie um issue no GitHub. Inclua detalhes sobre o problema que você está enfrentando para que possamos ajudá-lo de maneira mais eficaz.
