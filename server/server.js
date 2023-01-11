import jsonServer from 'json-server'
import path from 'path'

const server = jsonServer.create()
const router = jsonServer.router(path.join("server", 'db.json'))
const middleware = jsonServer.defaults()

server.use(middleware)
server.use(router)

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
})
