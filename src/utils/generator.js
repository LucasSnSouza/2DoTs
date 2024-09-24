export function HexadecimalRandomColor(){
    const types = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += types[Math.floor(Math.random() * 16)];
    }
    return color;
}