const TEST_FALLBACKS: Record<string, string> = {
  VITE_APP_BASE_URL: 'http://localhost:5174',
}

const getEnv = (key: keyof ImportMetaEnv): string => {
  const value = import.meta.env[key]

  if (value && value.length > 0) {
    return value
  }

  if (import.meta.env.MODE === 'test' && TEST_FALLBACKS[key]) {
    return TEST_FALLBACKS[key]
  }

  throw new Error(`Missing environment variable: ${key}`)
}

export const APP_BASE_URL = getEnv('VITE_APP_BASE_URL')
