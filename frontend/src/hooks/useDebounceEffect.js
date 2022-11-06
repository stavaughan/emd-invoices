import { useEffect } from 'react'

const useDebounceEffect = ({ fn, waitTime, deps }) => {
    useEffect(() => {
        const time = setTimeout(() => fn.apply(undefined, deps), waitTime)
        return () => clearTimeout(time)
    }, [deps, fn, waitTime])
}

export default useDebounceEffect
