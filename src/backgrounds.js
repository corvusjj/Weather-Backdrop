const weatherBackgrounds = [
    {
        code: ['1000'],
        day: {
            src: '/images/sunny.jpg',
            alt: 'Free Blue, Yellow, and Green Hot Air Balloon Stock Photo',
            ref: [
                'Dianne',
                'https://www.pexels.com/photo/blue-yellow-and-green-hot-air-balloon-233146/'
            ],
            theme: '#7fa7d4'
        },
        night: {
            src: '/images/clear.jpg',
            alt: 'Free Starry Night Stock Photo',
            ref: [
                'Tsvetoslav Hristov',
                'https://www.pexels.com/photo/starry-night-2500220/'
            ],
            theme: '#8a9b8a'
        }
    },
    {
        code: ['1003'],
        day: {
            src: '/images/partly-cloudy.jpg',
            alt: 'Free Man Paragliding Over The Sea Stock Photo',
            ref: [
                'Gilberto Olimpio',
                'https://www.pexels.com/photo/man-paragliding-over-the-sea-5036747/'
            ],
            theme: '#c4c2c9'
        },
        night: {
            src: '/images/N-cloudy.jpg',
            alt: 'Free Moonlight on a Dark Sky Stock Photo',
            ref: [
                'Roberto Nickson',
                'https://www.pexels.com/photo/moonlight-on-a-dark-sky-2885320/'
            ],
            theme: '#298bc0'
        }
    },
    {
        code: ['1006'],
        day: {
            src: '/images/cloudy.jpg',
            alt: 'Free stock photo of atmosphere, clouds, cloudscape',
            ref: [
                'NastyaSensei',
                'https://www.pexels.com/photo/sea-sky-sunset-clouds-1069480/'
            ],
            theme: '#cab3c0'
        },
        night: {
            src: '/images/N-cloudy.jpg',
            alt: 'Free Moonlight on a Dark Sky Stock Photo',
            ref: [
                'Roberto Nickson',
                'https://www.pexels.com/photo/moonlight-on-a-dark-sky-2885320/'
            ],
            theme: '#298bc0'
        }
    },
    {
        code: ['1009'],
        day: {
            src: '/images/overcast.jpg',
            alt: 'Free Brown Grass Field Under White Sky Stock Photo',
            ref: [
                'Marina Leonova',
                'https://www.pexels.com/photo/brown-grass-field-under-white-sky-8624442/'
            ],
            theme: '#cca594'
        },
        night: {
            src: '/images/N-overcast.jpg',
            alt: 'Free Ship at Night Stock Photo',
            ref: [
                'Plato Terentev',
                'https://www.pexels.com/photo/ship-at-night-6339764/'
            ],
            theme: '#c0baba'
        }
    },
    {
        code: ['1030', '1135', '1147'],
        day: {
            src: '/images/fog.jpg',
            alt: 'Free Cars riding along asphalt road towards tunnel on gloomy weather Stock Photo',
            ref: [
                'Helena Lopes',
                'https://www.pexels.com/photo/cars-riding-along-asphalt-road-towards-tunnel-on-gloomy-weather-4409445/'
            ],
            theme: '#91b3ab'
        },
        night: {
            src: '/images/N-fog.jpg',
            alt: 'Free Man Walking on a Foggy Street at Night',
            ref: [
                'Nazila Azimzada',
                'https://www.pexels.com/photo/silhouette-of-a-man-walking-on-a-foggy-street-at-night-15897185/'
            ],
            theme: '#9f9caa'
        }
    },
    {
        code: ['1063', '1180', '1150'],
        day: {
            src: '/images/patchy-rain.jpg',
            alt: 'Free stock photo of fields, flare, sky, rain',
            ref: [
                'Christian Salwa',
                'https://www.pexels.com/photo/fields-flare-sky-spring-1064472/'
            ],
            theme: '#bb8fbb'
        },
        night: {
            src: '/images/N-patchy-rain.jpg',
            alt: 'Free Incandescent Led Bulb Stock Photo',
            ref: [
                'David McEachan',
                'https://www.pexels.com/photo/incandescent-led-bulb-68084/'
            ],
            theme: '#cecec5'
        }
    },
    {
        code: ['1183', '1153', '1240', '1189'],
        day: {
            src: '/images/light-rain.jpg',
            alt: 'Free Raindrops Running Down the Window Stock Photo',
            ref: [
                'DaryaGrey_Owl',
                'https://www.pexels.com/photo/raindrops-running-down-the-window-16295359/'
            ],
            theme: '#81a1ad'
        },
        night: {
            src: '/images/light-rain.jpg',
            alt: 'Free Raindrops Running Down the Window Stock Photo',
            ref: [
                'DaryaGrey_Owl',
                'https://www.pexels.com/photo/raindrops-running-down-the-window-16295359/'
            ],
            theme: '#81a1ad'
        }
    },
    {
        code: ['1069', '1204', '1207', '1237', '1249', '1252', '1264', '1261'],
        day: {
            src: '/images/sleet.jpg',
            alt: 'Free Close-up of Frozen Water Stock Photo',
            ref: [
                'Pixabay',
                'https://www.pexels.com/photo/close-up-of-frozen-water-314958/'
            ],
            theme: '#BFE5F7'
        },
        night: {
            src: '/images/moderate-snow.jpg',
            alt: 'Free Close-up Photography of Snowflake Stock Photo',
            ref: [
                'Egor Kamelev',
                'https://www.pexels.com/photo/close-up-photography-of-snowflake-813872/'
            ],
            theme: '#afd2e4'
        }
    },
    {
        code: ['1087', '1273', '1276', '1279', '1282'],
        day: {
            src: '/images/thunder.jpg',
            alt: 'Free Lightning Strikes Stock Photo',
            ref: [
                'Frank Cone',
                'https://www.pexels.com/photo/lightning-strikes-2258536/'
            ],
            theme: '#b3b6d3'
        },
        night: {
            src: '/images/N-thunder.jpg',
            alt: 'Free Lightning Strike on the Sky Stock Photo',
            ref: [
                'Сергей Леденёв',
                'https://www.pexels.com/photo/lightning-strike-on-the-sky-8956453/'
            ],
            theme: '#fcded0'
        }
    },
    {
        code: ['1114', '1117', '1219', '1222', '1225'],
        day: {
            src: '/images/heavy-snow.jpg',
            alt: 'Free Aged Building Facade With Snow on Roof Stock Photo',
            ref: [
                'Maria Orlova',
                'https://www.pexels.com/photo/aged-building-facade-with-snow-on-roof-4969981/'
            ],
            theme: '#D1DBDD'
        },
        night: {
            src: '/images/N-heavy-snow.jpg',
            alt: 'Free Exterior of small wooden cottage with snow on roof and burning electric lights in window during snowfall at cold winter night Stock Photo',
            ref: [
                'Maria Orlova',
                'https://www.pexels.com/photo/snowy-wooden-house-during-snowfall-at-night-4969846/'
            ],
            theme: '#c9ad9a'
        }
    },
    {
        code: ['1168', '1171', '1201', '1072', '1198'],
        day: {
            src: '/images/freezing-rain.jpg',
            alt: 'Free Close-up Photography of Ice Crystals on Edges of Corrugated Sheets Stock Photo',
            ref: [
                'Skitterphoto',
                'https://www.pexels.com/photo/close-up-photography-of-ice-crystals-on-edges-of-corrugated-sheets-730910/'
            ],
            theme: '#bcc5db'
        },
        night: {
            src: '/images/N-freezing-rain.jpg',
            alt: 'Free Photo of Windshield During Rainy Weather Stock Photo',
            ref: [
                'Lukas Rychvalsky',
                'https://www.pexels.com/photo/photo-of-windshield-during-rainy-weather-1600909/'
            ],
            theme: '#4fb1c5'
        }
    },
    {
        code: ['1186', '1192', '1243', '1246'],
        day: {
            src: '/images/heavy-rain.jpg',
            alt: 'Free Raining Through Window of Car Focusing Side Mirror Stock Photo',
            ref: [
                'Sinitta Leunen',
                'https://www.pexels.com/photo/through-window-of-car-on-mirror-5902149/'
            ],
            theme: '#acc0c2'
        },
        night: {
            src: '/images/heavy-rain.jpg',
            alt: 'Free Raining Through Window of Car Focusing Side Mirror Stock Photo',
            ref: [
                'Sinitta Leunen',
                'https://www.pexels.com/photo/through-window-of-car-on-mirror-5902149/'
            ],
            theme: '#acc0c2'
        }
    },
    {
        code: ['1066', '1210', '1213', '1216', '1255', '1252', '1258'],
        day: {
            src: '/images/moderate-snow.jpg',
            alt: 'Free Close-up Photography of SnowFlake Stock Photo',
            ref: [
                'Egor Kamalev',
                'https://www.pexels.com/photo/close-up-photography-of-snowflake-813872/'
            ],
            theme: '#afd2e4'
        },
        night: {
            src: '/images/N-light-snow.jpg',
            alt: 'Free Photo of Trees And Snow Covered Ground During Night Time Stock Photo',
            ref: [
                'Martin Mariani',
                'https://www.pexels.com/photo/photo-of-trees-and-snow-covered-ground-during-night-time-3801463/'
            ],
            theme: '#c5aab7'
        }
    }
];

const animalBackgrounds = [
    {
        id: '1203309',
        theme: '#cfa459'
    },
    {
        id: '16057125',
        theme: '#b2b68d'
    },
    {
        id: '6690564',
        theme: '#a7b7d8'
    },
    {
        id: '7787730',
        theme: '#8b9ecf'
    },
    {
        id: '2244297',
        theme: '#c5c53b'
    },
    {
        id: '2397653',
        theme: '#71b4d6'
    },
    {
        id: '247373',
        theme: '#e9d044'
    },
    {
        id: '5745357',
        theme: '#bbbbab'
    },
    {
        id: '12075077',
        theme: '#82ad5a'
    },
    {
        id: '1275451',
        theme: '#bdaeb7'
    },
    {
        id: '3160373',
        theme: '#b8ad83'
    }
]

export { weatherBackgrounds, animalBackgrounds }