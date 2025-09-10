const Wave = () => {
  return (
    <div className="flex space-x-0.5 items-end h-8">
      <span
        className="w-1.5 h-8 bg-orange-600 rounded-full animate-pulse"
        style={{ animationDelay: '-0.6s' }}
      />
      <span
        className="w-1.5 h-6 bg-orange-600 rounded-full animate-pulse"
        style={{ animationDelay: '-0.5s' }}
      />
      <span
        className="w-1.5 h-4 bg-orange-600 rounded-full animate-pulse"
        style={{ animationDelay: '-0.4s' }}
      />
      <span
        className="w-1.5 h-2 bg-orange-600 rounded-full animate-pulse"
        style={{ animationDelay: '-0.3s' }}
      />
      <span
        className="w-1.5 h-4 bg-orange-600 rounded-full animate-pulse"
        style={{ animationDelay: '-0.2s' }}
      />
      <span
        className="w-1.5 h-6 bg-orange-600 rounded-full animate-pulse"
        style={{ animationDelay: '-0.1s' }}
      />
      <span className="w-1.5 h-8 bg-orange-600 rounded-full animate-pulse" />
    </div>
  )
}

export default Wave
