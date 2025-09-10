const RippleEffect = () => {
  return (
    <div className="relative w-10 h-10">
      <div className="absolute w-full h-full rounded-full border-2 border-violet-600 animate-ping opacity-75" />
      <div
        className="absolute w-6 h-6 top-2 left-2 rounded-full border-2 border-violet-600 animate-ping opacity-50"
        style={{ animationDelay: '0.4s' }}
      />
      <div className="relative rounded-full h-full w-full border-2 border-violet-600" />
    </div>
  )
}

export default RippleEffect
