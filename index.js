const promise = fn =>
   new Promise((resolve, reject) =>
      fn((err, result) => (err ? reject(err) : resolve(result))),
   )

module.exports = {
   sendCommand: (client, command, ...args) =>
      promise(cb => client.sendCommand(command, ...args, cb)),
   execMulti: (client, commands) =>
      promise(cb => client.multi(commands).exec(cb)),
   quitRedis: client => promise(cb => client.quit(cb)),
}
