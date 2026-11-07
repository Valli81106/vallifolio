import { useLayoutEffect, useRef } from 'react'

function positionLens(panel, point) {
  if (!point) return

  const bounds = panel.getBoundingClientRect()
  const x = point.x - bounds.left
  const y = point.y - bounds.top
  panel.style.setProperty('--lens-x', `${x}px`)
  panel.style.setProperty('--lens-y', `${y}px`)
  panel.toggleAttribute('data-revealing', x >= 0 && y >= 0 && x < bounds.width && y < bounds.height)
}

export default function FlowerScene({ className, id, titleId, children }) {
  const scene = useRef(null)
  const frame = useRef(null)
  const pointer = useRef(null)

  useLayoutEffect(() => {
    const panel = scene.current
    const flower = frame.current
    const followScroll = () => positionLens(panel, pointer.current)

    // Use one measured silhouette for the resting flower and the section-wide lens.
    function alignFlower() {
      const bounds = panel.getBoundingClientRect()
      const art = flower.getBoundingClientRect()
      panel.style.setProperty('--flower-x', `${art.left - bounds.left}px`)
      panel.style.setProperty('--flower-y', `${art.top - bounds.top}px`)
      panel.style.setProperty('--flower-size', `${art.width}px`)
      followScroll()
    }

    alignFlower()
    const observer = new ResizeObserver(alignFlower)
    observer.observe(panel)
    observer.observe(flower)
    window.addEventListener('scroll', followScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', followScroll)
    }
  }, [])

  function followPointer(event) {
    pointer.current = { x: event.clientX, y: event.clientY }
    positionLens(event.currentTarget, pointer.current)
  }

  function clearPointer(event) {
    pointer.current = null
    event.currentTarget.removeAttribute('data-revealing')
  }

  return (
    <section
      className={`panel flower-scene ${className}`}
      id={id}
      ref={scene}
      aria-labelledby={titleId}
      onPointerEnter={followPointer}
      onPointerMove={followPointer}
      onPointerDown={followPointer}
      onPointerUp={(event) => {
        if (event.pointerType !== 'mouse') clearPointer(event)
      }}
      onPointerLeave={clearPointer}
      onPointerCancel={clearPointer}
    >
      <div className="scene-flower" aria-hidden="true" />
      <div className="scene-lens" aria-hidden="true" />
      <div className="panel-inner">
        {children}
        <div className="flower-frame" ref={frame} aria-hidden="true" />
      </div>
    </section>
  )
}
