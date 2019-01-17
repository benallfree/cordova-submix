import os from 'os'

function getExternalIp() {
  let externalIp = null
  let ifaces = os.networkInterfaces()
  for (let dev in ifaces) {
    const iface = ifaces[dev].filter(function(details) {
      return details.family === 'IPv4' && details.internal === false
    })
    if (iface.length > 0) externalIp = iface[0].address
  }
  return externalIp
}

export { getExternalIp }
