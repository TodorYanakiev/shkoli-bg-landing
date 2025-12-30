const getEnv = (key: keyof ImportMetaEnv): string => {
  const value = import.meta.env[key]

  if (value && value.length > 0) {
    return value
  }

  throw new Error(`Missing environment variable: ${key}`)
}

export const APP_BASE_URL = getEnv('VITE_APP_BASE_URL')
