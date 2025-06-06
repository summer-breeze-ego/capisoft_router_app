function getRandomInt(max: number, min: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

interface Product {
    year: number,
    name: string,
    amount: number,
    pic_path: string
}

let prod_types: Array<string> = ['huge glass', 'tiny spoon', '50-prong fork', 'long knife', 'cup', 'planetary plate', 'huge spatula']

let products: Array<Product> = []

for (let i = 0; i < 5; i++) {
    let year = getRandomInt(2000, 2026);
    let name = prod_types[Math.floor(Math.random() * prod_types.length)]
    let amount = getRandomInt(10, 1000);
    let pic_path = "../assets/" + name.replace(/ /g, '_')

    products.push({year, name, amount, pic_path})

}

export default products