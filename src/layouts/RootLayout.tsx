import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import MeshBackdrop from '../components/ui/MeshBackdrop'
import { INITIAL_GRADIENT } from '../utils/gradient'

const RootLayout = (): ReactElement => (
  <div className="relative isolate flex min-h-screen flex-col overflow-hidden text-slate-900">
    <MeshBackdrop />
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[80vh] [clip-path:polygon(0_0,100%_0,100%_30%,0_80%)]"
      style={{ background: INITIAL_GRADIENT }}
    />
    <Header />
    <main className="flex flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default RootLayout
