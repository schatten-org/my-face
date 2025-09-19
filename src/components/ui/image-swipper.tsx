import { useCallback, useEffect, useRef, useState } from 'react'

// --- DATA STRUCTURE INTERFACE ---
interface CardData {
  id: number
  imageUrl: string
  title: string
}

// --- PROPS INTERFACE ---
// Updated to accept an array of CardData objects.
interface ImageSwiperProps {
  cards: Array<CardData>
  cardWidth?: number
  cardHeight?: number
  className?: string
}

export const ImageSwiper: React.FC<ImageSwiperProps> = ({
  cards,
  cardWidth = 256, // 16rem = 256px
  cardHeight = 352, // 22rem = 352px
  className = '',
}) => {
  // --- STATE AND REFS ---
  const cardStackRef = useRef<HTMLDivElement>(null)
  const isSwiping = useRef(false)
  const startX = useRef(0)
  const currentX = useRef(0)
  const animationFrameId = useRef<number | null>(null)

  // The cardOrder state tracks the visual order of the cards in the stack.
  const [cardOrder, setCardOrder] = useState<Array<number>>(() =>
    Array.from({ length: cards.length }, (_, i) => i),
  )

  // --- HELPER FUNCTIONS (MEMOIZED) ---

  // Gets all card elements from the DOM.
  const getCards = useCallback((): Array<HTMLElement> => {
    if (!cardStackRef.current) return []
    return Array.from(cardStackRef.current.querySelectorAll('.image-card'))
  }, [])

  // Gets the topmost card element.
  const getActiveCard = useCallback((): HTMLElement | null => {
    return getCards()[0] || null
  }, [getCards])

  // Updates CSS custom properties for all cards to position them in a stack.
  const updateCardPositions = useCallback(() => {
    getCards().forEach((card, i) => {
      card.style.setProperty('--i', i.toString())
      card.style.setProperty('--swipe-x', '0px')
      card.style.setProperty('--swipe-rotate', '0deg')
      card.style.opacity = '1'
      card.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
    })
  }, [getCards])

  // Applies instantaneous swipe styles to the active card during a drag.
  const applySwipeStyles = useCallback(
    (deltaX: number) => {
      const card = getActiveCard()
      if (!card) return
      const rotation = deltaX * 0.1 // Rotation based on horizontal movement
      const opacity = 1 - Math.abs(deltaX) / (cardWidth * 1.5) // Fade out as it moves
      card.style.setProperty('--swipe-x', `${deltaX}px`)
      card.style.setProperty('--swipe-rotate', `${rotation}deg`)
      card.style.opacity = opacity.toString()
    },
    [getActiveCard, cardWidth],
  )

  // --- INTERACTION HANDLERS (MEMOIZED) ---

  // Called on pointerdown: captures starting position and disables card transition.
  const handleStart = useCallback(
    (clientX: number) => {
      if (isSwiping.current) return
      isSwiping.current = true
      startX.current = clientX
      currentX.current = clientX

      const card = getActiveCard()
      if (card) {
        card.style.transition = 'none' // Allow direct manipulation
      }

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    },
    [getActiveCard],
  )

  // Called on pointermove: calculates drag distance and applies styles via rAF.
  const handleMove = useCallback(
    (clientX: number) => {
      if (!isSwiping.current) return
      currentX.current = clientX

      animationFrameId.current = requestAnimationFrame(() => {
        const deltaX = currentX.current - startX.current
        applySwipeStyles(deltaX)
      })
    },
    [applySwipeStyles],
  )

  // Called on pointerup: determines whether to swipe away or snap back.
  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return
    isSwiping.current = false

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current)
    }

    const deltaX = currentX.current - startX.current
    const threshold = cardWidth / 3 // Swipe threshold is 1/3 of the card's width
    const card = getActiveCard()
    if (!card) return

    // Re-enable transition for the swipe or snap-back animation.
    card.style.transition = 'transform 0.3s ease, opacity 0.3s ease'

    if (Math.abs(deltaX) > threshold) {
      // --- SWIPE AWAY ---
      const direction = Math.sign(deltaX)
      const swipeOutX = direction * (cardWidth * 1.5)
      card.style.setProperty('--swipe-x', `${swipeOutX}px`)
      card.style.setProperty('--swipe-rotate', `${direction * 15}deg`)
      card.style.opacity = '0'

      // After animation, move the card to the back of the stack.
      setTimeout(() => {
        setCardOrder((prev) => [...prev.slice(1), prev[0]])
      }, 300) // Must match transition duration
    } else {
      // --- SNAP BACK ---
      applySwipeStyles(0) // Resets to initial state with animation
    }
  }, [getActiveCard, applySwipeStyles, cardWidth])

  // --- LIFECYCLE HOOKS ---

  // Effect to add and clean up pointer event listeners.
  useEffect(() => {
    const element = cardStackRef.current
    if (!element) return

    const onPointerDown = (e: PointerEvent) => handleStart(e.clientX)
    const onPointerMove = (e: PointerEvent) => handleMove(e.clientX)
    const onPointerUp = () => handleEnd()
    const onPointerLeave = () => handleEnd() // Also end swipe if cursor leaves element

    element.addEventListener('pointerdown', onPointerDown)
    element.addEventListener('pointermove', onPointerMove)
    element.addEventListener('pointerup', onPointerUp)
    element.addEventListener('pointerleave', onPointerLeave)

    return () => {
      element.removeEventListener('pointerdown', onPointerDown)
      element.removeEventListener('pointermove', onPointerMove)
      element.removeEventListener('pointerup', onPointerUp)
      element.removeEventListener('pointerleave', onPointerLeave)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [handleStart, handleMove, handleEnd])

  // Effect to update card positions whenever the order changes.
  useEffect(() => {
    updateCardPositions()
  }, [cardOrder, updateCardPositions])

  // --- RENDER ---
  return (
    <section
      ref={cardStackRef}
      className={`relative grid place-content-center select-none ${className}`}
      style={
        {
          width: cardWidth + 32,
          height: cardHeight + 32,
          perspective: '1000px',
          touchAction: 'none', // Disables default touch actions like scrolling
        } as React.CSSProperties
      }
    >
      {cardOrder.map((originalIndex, displayIndex) => {
        const card = cards[originalIndex]
        return (
          <article
            key={card.id}
            className="image-card absolute cursor-grab active:cursor-grabbing
                         place-self-center border-2 border-slate-700 rounded-2xl
                         shadow-lg overflow-hidden will-change-transform bg-slate-800"
            style={
              {
                '--i': displayIndex.toString(), // The card's current position in the stack (0 = top)
                '--swipe-x': '0px', // Managed by JS for horizontal swipe
                '--swipe-rotate': '0deg', // Managed by JS for rotation
                width: cardWidth,
                height: cardHeight,
                zIndex: cards.length - displayIndex,
                transform: `
                translateY(calc(var(--i) * 10px))
                translateZ(calc(var(--i) * -45px))
                translateX(var(--swipe-x))
                rotate(var(--swipe-rotate))
              `,
              } as React.CSSProperties
            }
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
              // Add a fallback for broken image links
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = `https://placehold.co/${cardWidth}x${cardHeight}/2d3748/e2e8f0?text=Image+Not+Found`
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="font-bold text-xl text-white drop-shadow-lg">
                {card.title}
              </h3>
            </div>
          </article>
        )
      })}
    </section>
  )
}

// const ImageSwiper = () => {
//   const cardData: CardData[] =
//   ]

//   return (
//     <div className="text-white w-full flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
//       <ImageSwiper cards={cardData} />
//     </div>
//   )
// }

export default ImageSwiper
