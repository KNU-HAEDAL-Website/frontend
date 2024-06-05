import { Suspense } from 'react'

import Loading from './loading'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="h-screen pt-16 max-w-screen-xl xl:mx-auto">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  )
}

export default AdminLayout
