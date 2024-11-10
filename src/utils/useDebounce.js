export const useDebounce = () => {
    function debounce(fn, delay) {
        let timeout = null
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                fn(...args)
            }, delay)
        }
    }

    return {
        debounce,
    }
}
