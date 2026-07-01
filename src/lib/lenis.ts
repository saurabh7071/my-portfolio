// lib/lenis.ts
import Lenis from "lenis"

let lenisInstance: Lenis | null = null

export function setLenisInstance(instance: Lenis) {
    lenisInstance = instance    
}

export function getLenisInstance() {
    return lenisInstance
}