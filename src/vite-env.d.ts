/// <reference types="vite/client" />
/// <reference types="react" />

type ContentsquareCommand = [string, ...unknown[]]

interface Window {
  _uxa?: ContentsquareCommand[]
}
