
const redis = require('redis')
const { sendCommand, execMulti, quitRedis } = require('.')
const client = redis.createClient()

const main = async () => {
  await sendCommand(client, 'set', 'test:packageName', '@evanx/redis-async')
  const [ packageName ] = await execMulti(client, [
    ['get', 'test:packageName'],
    ['del', 'test:packageName'],
  ])
  console.log({ packageName })
  await quitRedis(client)
}

main().catch(err => {
  console.error(err)
})
