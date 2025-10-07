const add = (a: string, b: string): number => {
    return Number(a) + Number(b);
}

const substract = (a: string, b: string): number => {
    return Number(a) - Number(b);
}

const multiply = (a: string, b: string): number => {
    return Number(a) * Number(b);
}

const divide = (a: string, b: string): number => {
    return Number(a) / Number(b);
}

export default { add, substract, multiply, divide };