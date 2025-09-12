import GlowLine from '@/components/ui/glowline'

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-cyan-900/10 to-pink-900/20 blur-3xl"></div>
      <div className="relative max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-400 drop-shadow-[0_0_15px_#00faff]">
            Education
          </h2>
          <p className="text-sm text-gray-400 mt-2">My academic background</p>
        </div>

        <CoderProfileCard />
      </div>
      <GlowLine
        orientation="horizontal"
        position="100%"
        color="blue"
        className="z-50"
      />
    </section>
  )
}

const coderData = {
  education: {
    degree: 'Bachelor of Informatics Engineering',
    university: 'Universitas Indo Global Mandiri',
    year: '2019 – 2023',
  },
}

const CoderProfileCard = () => {
  return (
    <div className="max-w-2xl w-full mx-auto bg-gradient-to-r from-[#0a0f2c] to-[#120024] border-cyan-500/30 relative rounded-lg border shadow-[0_0_25px_rgba(0,255,255,0.4)] overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-cyan-400 animate-pulse"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 flex justify-between items-center bg-black/60 border-b border-cyan-400/20">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_#ff0000]"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#ffff00]"></div>
          <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_10px_#00ff00]"></div>
        </div>
        <div className="text-xs text-cyan-400 font-mono">education.js</div>
      </div>
      <div className="overflow-hidden px-4 lg:px-8 py-6 relative">
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-cyan-500 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="relative flex">
          <div className="hidden md:flex flex-col items-end pr-4 text-fuchsia-500 font-mono text-xs">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>
          <code className="font-mono text-xs md:text-sm lg:text-base w-full text-left leading-relaxed">
            <div>
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-cyan-400">education</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-white">{'{'}</span>
            </div>
            <div className="pl-6">
              <span className="text-purple-400">degree:</span>{' '}
              <span className="text-green-400">
                '{coderData.education.degree}'
              </span>
              ,
            </div>
            <div className="pl-6">
              <span className="text-purple-400">university:</span>{' '}
              <span className="text-green-400">
                '{coderData.education.university}'
              </span>
              ,
            </div>
            <div className="pl-6">
              <span className="text-purple-400">year:</span>{' '}
              <span className="text-green-400">
                '{coderData.education.year}'
              </span>
            </div>
            <div>
              <span className="text-white">{'};'}</span>
            </div>
          </code>
        </div>
      </div>

      <div className="px-4 lg:px-8 pb-3 border-t border-cyan-400/20 text-xs text-gray-400 flex justify-between items-center font-mono bg-black/40">
        <span>UTF-8</span>
        <span className="text-pink-400">JavaScript</span>
        <span>Ln 8, Col 2</span>
      </div>
    </div>
  )
}
