import type { ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { BottomNav } from './BottomNav'

export function AppLayout({ children }: { children: ReactNode }) {
  return <div className="app-layout"><Header /><Sidebar /><main>{children}</main><BottomNav /></div>
}
