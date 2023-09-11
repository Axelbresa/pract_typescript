namespace utility {
    export namespace taxes {
        export function calculateIva(price: number): number {
            return (price * 0.21) + price
        }
        export function calculatePenalityIva(price: number): number {
            return (price * 0.30) + price
        }
    }
}