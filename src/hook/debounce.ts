import { useRef } from "react"

export const useDebounceHook = <Params extends unknown[]>(
    callback: (...args: Params) => void,
    delay: number
) => {
    const debounceTimer = useRef<NodeJS.Timeout | null>(null)
    return (...args: Params) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current)
        }

        debounceTimer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}
