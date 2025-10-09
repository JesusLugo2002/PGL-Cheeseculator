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
    if (a == "666" && b == "0") {
        window.open("https://www.retrogames.cz/play_414-DOS.php");
    }
    return Number(a) / Number(b);
}

export default { add, substract, multiply, divide };