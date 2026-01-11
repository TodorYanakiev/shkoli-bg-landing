import type { ReactElement } from 'react'

const MeshBackdrop = (): ReactElement => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -left-40 -top-48 h-[32rem] w-[32rem] bg-[radial-gradient(circle,rgba(46,123,74,0.18)_0%,rgba(46,123,74,0.08)_45%,transparent_70%)]" />
    <div className="absolute -right-40 top-0 h-[34rem] w-[34rem] bg-[radial-gradient(circle,rgba(246,189,65,0.16)_0%,rgba(246,189,65,0.08)_45%,transparent_70%)]" />
    <div className="absolute left-1/3 bottom-[-12rem] h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(46,123,74,0.14)_0%,rgba(46,123,74,0.06)_45%,transparent_70%)]" />
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.06] mix-blend-soft-light [background-size:160px_160px]" />
  </div>
)

export default MeshBackdrop
