# 📝 Lista de Tarefas

Aplicação full-stack de lista de tarefas (to-do list), construída para praticar integração entre front-end, back-end e banco de dados na prática — do desenvolvimento local até o deploy em produção.

🔗 **[Acesse o projeto no ar](https://lista-de-tarefa-opal-one.vercel.app)**

## ✨ Funcionalidades

- ✅ Adicionar novas tarefas
- ✏️ Editar tarefas existentes
- ☑️ Marcar tarefas como concluídas
- 🗑️ Excluir tarefas individualmente
- 🧹 Limpar todas as tarefas concluídas de uma vez
- 🔍 Filtrar tarefas por status (todas / pendentes / concluídas)
- 🔔 Notificações de feedback (toasts) para cada ação

## 🚀 Tecnologias

- **[Next.js 16](https://nextjs.org/)** (App Router + Turbopack) — front-end e back-end (Server Actions)
- **TypeScript**
- **[Prisma ORM 7](https://www.prisma.io/)** com driver adapter (`@prisma/adapter-pg`)
- **PostgreSQL** (hospedado no [Neon](https://neon.com/))
- **Tailwind CSS** + **shadcn/ui**
- **Deploy:** [Vercel](https://vercel.com/)

## 🏗️ Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/RafaelLfckkj/ListaDeTarefas.git
   cd ListaDeTarefas
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a sua connection string do PostgreSQL:
   ```env
   DATABASE_URL="postgresql://usuario:senha@host:5432/banco?sslmode=require"
   ```

4. Sincronize o schema do Prisma com o banco:
   ```bash
   npx prisma db push
   ```

5. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Acesse [http://localhost:3000](http://localhost:3000)

## 📂 Estrutura do projeto

```
src/
├── _actions/       # Server Actions (criar, editar, excluir, buscar tarefas)
├── app/            # Rotas e layout principal (App Router)
├── components/     # Componentes React (UI e lógica de tarefas)
└── utils/          # Configuração do cliente Prisma
prisma/
└── schema.prisma   # Modelo de dados
```

## 📌 Status

Projeto concluído e em produção.

---

Feito por [Rafael](https://github.com/RafaelLfckkj) 🚀