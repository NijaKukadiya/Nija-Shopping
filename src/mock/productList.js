import * as images from "../lib/constants";

export const products = [
    {
        id: 1,
        name: "New Apple iPhone 12",
        image: `${images.appleIphone12}`,
        description: "Facial Recognition, Fingerprint Scanner",
        brand: "Apple",
        price: 100000,
        type: "Mobile"
    },
    {
        id: 2,
        name: "boAt Bassheads",
        image: `${images.boAtBassheads}`,
        description: "Compatible with Android/iOS and connectivity via 3.5mm AUX cable",
        brand: "BoAt",
        price: 379,
        type: "Earphone"
    },
    {
        id: 3,
        name: "Apple Watch Series 3",
        image: `${images.AppleWatch}`,
        description: "Silver Aluminium Case with White Sport Band",
        brand: "Apple",
        price: 23900,
        type: "Watch"
    },
    {
        id: 4,
        name: "Dell Laptop",
        image: `${images.DellLaptop}`,
        description: "Anti Glare Display Laptop",
        brand: "Dell",
        price: 39190,
        type: "Laptop"
    },
    {
        id: 5,
        name: "Fossil Analog",
        image: `${images.FossilWatch}`,
        description: "Quartz, Watch Display Type: Analog",
        brand: "Fossil",
        price: 7995,
        type: "Watch"
    },
]
export default products;