import findUp from 'find-up'
import path from 'path'

async function findRoot() {
  const rootConfig = await findUp('config.xml')
  if (!rootConfig) {
    throw new Error(
      'corpack must be run from inside a Cordova application root.',
    )
  }
  const root = path.dirname(rootConfig)
  return root
}

export { findRoot }
