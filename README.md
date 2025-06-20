# SRSpeak App - Frontend

Este é o repositório do **frontend** do SRSpeak, um aplicativo focado em memorização por repetição espaçada (SRS - Spaced Repetition System). A ideia principal é ajudar usuários a aprender frases e vocabulário de forma eficiente, com reforço baseado em desempenho.

## 🔍 Sobre o projeto

O SRSpeak utiliza o sistema de repetição espaçada para otimizar o processo de aprendizado. No frontend, os usuários podem:

- Visualizar seus pacotes de estudo (cards agrupados por módulo);
- Responder cards com base em níveis de dificuldade (Ótimo, Bom, Difícil, Não lembro);
- Acompanhar o progresso de memorização.

Este repositório contém toda a interface do usuário, integrando com a API backend responsável pela lógica do SRS e persistência de dados.

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

## ⚙️ Como rodar o projeto localmente

1. Clone este repositório:

```bash
git clone https://github.com/rlucasorsi/srspeak-app-frontend.git
```

2. Acesse a pasta do projeto:

```bash
cd srspeak-app-frontend
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz com as variáveis necessárias (exemplo abaixo):

```env
VITE_API_URL=http://localhost:3000
```

5. Inicie o projeto:

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:8080`

## 📦 Funcionalidades previstas

- [x] Listagem de pacotes de cards por módulo
- [x] Interação com os cards (resposta e feedback)
- [ ] Cadastro e autenticação de usuários
- [ ] Dashboard com estatísticas
- [ ] Configurações de idioma e preferências


Desenvolvido com 💻 por [Lucas Orsi](https://github.com/rlucasorsi)