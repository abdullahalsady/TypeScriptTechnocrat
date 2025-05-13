{
    // Generic with Interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: number;
            releaseYear: number
        };
        smartWatch: T;
        bike?: X
    }



    const poorDeveloper: Developer<{
        brand: string;
        model: string;
        display: string
    }> = {
        name: "Sady",
        computer: {
            brand: "DELL",
            model: 232,
            releaseYear: 2002
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "Oled"
        }
    }

    type SamsungWatch = {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    const middleClassDeveloper: Developer<SamsungWatch> = {
        name: "Sakib",
        computer: {
            brand: "APPLE",
            model: 2,
            releaseYear: 2020
        },
        smartWatch: {
            brand: "Samsung",
            model: "Fu**",
            heartTrack: true,
            sleepTrack: true
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    interface RichDevelopBike {
        brand: string;
        model: string;
    }

    const richDeveloper: Developer<AppleWatch, RichDevelopBike> = {
        name: "Sany",
        computer: {
            brand: "HP",
            model: 267,
            releaseYear: 2078
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "Band 4",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: "Yamaha",
            model: "R15 V4"
        }
    }
}