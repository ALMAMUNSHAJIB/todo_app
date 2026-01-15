Todo App – Quick Start

Full-stack Todo App with NestJS backend + Next.js frontend + MySQL + JWT Auth.

1️⃣ Clone Repo
git clone https://github.com/ALMAMUNSHAJIB/todo_app.git
cd todo_app

2️⃣ Backend (NestJS + MySQL)
cd backend
# create .env file with DB & JWT config
docker-compose up --build


Backend URL: http://localhost:3001

3️⃣ Frontend (Next.js)
cd frontend
npm install
# create .env.local with API URL
npm run dev


Frontend URL: http://localhost:3000

4️⃣ Test APIs (Postman)

Register: POST /auth/register

Login: POST /auth/login → get JWT

Todos (JWT required): POST /todos, GET /todos, GET /todos/:id, PUT /todos/:id, DELETE /todos/:id

Header:

Authorization: Bearer <JWT_TOKEN>
