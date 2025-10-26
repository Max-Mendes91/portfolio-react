import { useRef, useEffect } from "react";
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

    if (isMobile) {
        return null
    }

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorBorder = cursorBorderRef.current

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })

        const xTo = gsap.quickTo(cursor, 'x', {
            duration: 0.15, ease: 'power3.out'
        })

        const yTo = gsap.quickTo(cursor, 'y', {
            duration: 0.15, ease: 'power3.out'
        })

        const xToBorder = gsap.quickTo(cursorBorder, 'x', {
            duration: 0.6, ease: 'power3.out'
        })

        const yToBorder = gsap.quickTo(cursorBorder, 'y', {
            duration: 0.6, ease: 'power3.out'
        })

        const handleMouseMove = (e) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xToBorder(e.clientX)
            yToBorder(e.clientY)
        }

        // Hover effects for interactive elements
        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.3,
            })
            gsap.to(cursorBorder, {
                scale: 1.5,
                duration: 0.3,
            })
        }

        const handleMouseLeave = () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.3,
            })
        }

        // Click animation
        const handleMouseDown = () => {
            gsap.to([cursor, cursorBorder], {
                scale: 0.8,
                duration: 0.15,
            })
        }

        const handleMouseUp = () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.15,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            {/* Inner Dot - Violet */}
            <div
                ref={cursorRef}
                className='fixed top-0 left-0 w-2 h-2 bg-violet-500 rounded-full pointer-events-none z-[9999]'
            />

            {/* Outer Ring - Violet */}
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full border-violet-500/60 pointer-events-none z-[9999]"
            />
        </>
    )
}

export default CustomCursor