const envAsString = String(process.env.NEXT_PUBLIC_environmentName)

const isLocalEnv = envAsString === 'local'

export { isLocalEnv }
