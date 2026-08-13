import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <div className="relative hidden lg:flex w-2/5 flex-col items-start justify-center bg-zinc-100 p-12 text-zinc-900 dark:bg-zinc-950 dark:text-white">
        <span className="absolute top-12 left-12 inline-flex w-fit items-center rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-semibold tracking-tight dark:border-zinc-700">
          {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
        </span>
        <p className="text-3xl font-bold leading-tight text-balance">
          Five roles,
          <br />
          one shipped feature.
        </p>
      </div>

      <div className="relative flex flex-1 items-center justify-center bg-white px-4 dark:bg-zinc-950">
        <div className="w-full max-w-sm">{children}</div>
        <p className="absolute bottom-8 left-8 text-xs text-zinc-400">
          Capstone Programming Project · 2026
        </p>
      </div>
    </div>
  )
}
