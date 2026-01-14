'use client'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  React.useEffect(() => {
    let latestScroll = 0
    let ticking = false
    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]')
    window.addEventListener('scroll', () => {
      latestScroll = window.pageYOffset
      handleScroll()
    })

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          parallaxEls.forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-speed') ?? '') || 0.2
            el.style.transform = `translateY(${latestScroll * speed}px)`
          })
          ticking = false
        })
        ticking = true
      }
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="w-full h-full overflow-x-hidden">
      <section className="relative h-full overflow-hidden" data-parallax>
        <video autoPlay loop muted className="w-full h-auto">
          <source src="/website-reel.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-25">
          <Image
            src={'/btbfilms.svg'}
            alt="Logo"
            width={350}
            height={250}
            className="aspect-auto"
          />
        </div>
      </section>
      <section className="relative" data-parallax>
        <video autoPlay loop muted className="w-full h-auto">
          <source src="/static-tv-glitch.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  bg-black bg-opacity-25">
          <div className="text-white font-mono font-medium text-center p-4 flex flex-col gap-4">
            <p className="text-2xl">This is a test.</p>
            <p className="text-3xl">Website under construction. Stay tuned for more soon!</p>
            <p className="text-4xl">This is only a test.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
