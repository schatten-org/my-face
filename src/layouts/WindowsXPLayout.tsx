import React from 'react'

type WindowsXPLayoutProps = {
  children: React.ReactNode
}

const WindowsXPLayout = ({ children }: WindowsXPLayoutProps) => {
  return (
    <div className="w-full h-screen bg-cover bg-center relative">
      <div className="min-h-screen w-full relative">
        {/* Radial Gradient Background from Bottom */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)',
          }}
        />
        {/* Your Content/Components */}
        {children}
      </div>
    </div>
  )
}

export default WindowsXPLayout
