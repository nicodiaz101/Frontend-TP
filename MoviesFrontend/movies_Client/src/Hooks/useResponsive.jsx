

export function useResponsive(display) {
    const steps = {
        md:'768px',
        lg:'1024px',
        xl: '1280px',
    }
    return `@media (min-width: ${steps[display]})`
}