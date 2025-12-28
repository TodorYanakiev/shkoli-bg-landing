const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max)

const baseGreen = '46,123,74'
const baseYellow = '246,189,65'

export const INITIAL_GRADIENT =
  'radial-gradient(circle at 24% 18%, rgba(46,123,74,0.4) 0%, rgba(46,123,74,0.28) 30%, rgba(46,123,74,0.14) 48%, rgba(246,189,65,0.3) 60%, rgba(246,189,65,0.18) 76%, rgba(255,255,255,0) 94%)'

export const startGradientAnimation = (element: HTMLElement): (() => void) => {
  let frameId: number | null = null
  let startTime: number | null = null
  const cycleDurationMs = 14000

  const animate = (timestamp: number): void => {
    if (startTime === null) startTime = timestamp
    const elapsed = (timestamp - startTime) % cycleDurationMs
    const t = elapsed / cycleDurationMs
    const angle = t * Math.PI * 2

    const x = 24 + Math.sin(angle) * 10
    const y = 18 + Math.cos(angle * 0.75) * 12

    const greenIntensity = 0.26 + 0.12 * Math.sin(angle * 1.2)
    const yellowIntensity = 0.2 + 0.1 * Math.cos(angle * 1.05)

    const gradient = [
      `radial-gradient(circle at ${x}% ${y}%,`,
      `rgba(${baseGreen},${clamp(greenIntensity + 0.12, 0, 1)}) 0%,`,
      `rgba(${baseGreen},${clamp(greenIntensity, 0, 1)}) 28%,`,
      `rgba(${baseGreen},${clamp(greenIntensity - 0.1, 0, 1)}) 46%,`,
      `rgba(${baseYellow},${clamp(yellowIntensity + 0.12, 0, 1)}) 58%,`,
      `rgba(${baseYellow},${clamp(yellowIntensity, 0, 1)}) 74%,`,
      `rgba(${baseYellow},${clamp(yellowIntensity - 0.1, 0, 1)}) 84%,`,
      'rgba(255,255,255,0) 96%)',
    ].join(' ')

    element.style.background = gradient
    frameId = window.requestAnimationFrame(animate)
  }

  frameId = window.requestAnimationFrame(animate)

  return () => {
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId)
    }
  }
}
