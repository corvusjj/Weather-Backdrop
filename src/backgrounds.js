const backgrounds = [
    {
        code: ['1000'],
        day: {
            src: '/../dist/images/sunny.jpg',
            alt: 'Free Blue, Yellow, and Green Hot Air Balloon Stock Photo',
            ref: [
                'Dianne',
                'https://www.pexels.com/photo/blue-yellow-and-green-hot-air-balloon-233146/'
            ]
        },
        night: {
            src: '/../dist/images/clear.jpg',
            alt: 'Free Starry Night Stock Photo',
            ref: [
                'Tsvetoslav Hristov',
                'https://www.pexels.com/photo/starry-night-2500220/'
            ]
        }
    },
    {
        code: ['1003'],
        day: {
            src: '/../dist/images/partly-cloudy.jpg',
            alt: 'Free Man Paragliding Over The Sea Stock Photo',
            ref: [
                'Gilberto Olimpio',
                'https://www.pexels.com/photo/man-paragliding-over-the-sea-5036747/'
            ]
        },
        night: {
            src: '/../dist/images/N-partly-cloudy.jpg',
            alt: 'Free Stars And Clouds at Nighttime Stock Photo',
            ref: [
                'Arnie Chou',
                'https://www.pexels.com/photo/stars-and-clouds-at-nighttime-1229042/'
            ]
        }
    },
    {
        code: ['1006'],
        day: {
            src: '/../dist/images/cloudy.jpg',
            alt: 'Free stock photo of atmosphere, clouds, cloudscape',
            ref: [
                'NastyaSensei',
                'https://www.pexels.com/photo/sea-sky-sunset-clouds-1069480/'
            ]
        },
        night: {
            src: '/../dist/images/N-partly-cloudy.jpg',
            alt: 'Free Stars And Clouds at Nighttime Stock Photo',
            ref: [
                'Arnie Chou',
                'https://www.pexels.com/photo/stars-and-clouds-at-nighttime-1229042/'
            ]
        }
    },
    {
        code: ['1009'],
        day: {
            src: '/../dist/images/overcast.jpg',
            alt: 'Free Brown Grass Field Under White Sky Stock Photo',
            ref: [
                'Marina Leonova',
                'https://www.pexels.com/photo/brown-grass-field-under-white-sky-8624442/'
            ]
        },
        night: {
            src: '/../dist/images/N-overcast.jpg',
            alt: 'Free White Houses Near Sea Cliff Stock Photo',
            ref: [
                'Pixabay',
                'https://www.pexels.com/photo/sea-sunset-water-rocks-60015/'
            ]
        }
    },
    {
        code: ['1030', '1135', '1147'],
        day: {
            src: '/../dist/images/fog.jpg',
            alt: 'Free Cars riding along asphalt road towards tunnel on gloomy weather Stock Photo',
            ref: [
                'Helena Lopes',
                'https://www.pexels.com/photo/cars-riding-along-asphalt-road-towards-tunnel-on-gloomy-weather-4409445/'
            ]
        },
        night: {
            src: '/../dist/images/N-fog.jpg',
            alt: 'Free Man Walking on a Foggy Street at Night',
            ref: [
                'Nazila Azimzada',
                'https://www.pexels.com/photo/silhouette-of-a-man-walking-on-a-foggy-street-at-night-15897185/'
            ]
        }
    },
    {
        code: ['1063', '1180', '1150'],
        day: {
            src: '/../dist/images/patchy-rain.jpg',
            alt: 'Free stock photo of fields, flare, sky, rain',
            ref: [
                'Christian Salwa',
                'https://www.pexels.com/photo/fields-flare-sky-spring-1064472/'
            ]
        },
        night: {
            src: '/../dist/images/N-patchy-rain.jpg',
            alt: 'Free Incandescent Led Bulb Stock Photo',
            ref: [
                'David McEachan',
                'https://www.pexels.com/photo/incandescent-led-bulb-68084/'
            ]
        }
    },
    {
        code: ['1183', '1153', '1240'],
        day: {
            src: '/../dist/images/light-rain.jpg',
            alt: 'Free Raindrops Running Down the Window Stock Photo',
            ref: [
                'DaryaGrey_Owl',
                'https://www.pexels.com/photo/raindrops-running-down-the-window-16295359/'
            ]
        },
        night: {
            src: '/../dist/images/N-light-rain.jpg',
            alt: 'Free Bokeh With Rain Drops on Glass Stock Photo',
            ref: [
                'Bob Clark',
                'https://www.pexels.com/photo/bokeh-photography-21492/'
            ]
        }
    },
    {
        code: ['1069', '1204', '1207', '1237', '1249', '1252', '1264', '1261'],
        day: {
            src: '/../dist/images/sleet.jpg',
            alt: 'Free Close-up of Frozen Water Stock Photo',
            ref: [
                'Pixabay',
                'https://www.pexels.com/photo/close-up-of-frozen-water-314958/'
            ]
        },
        night: {
            src: '/../dist/images/moderate-snow.jpg',
            alt: 'Free Close-up Photography of Snowflake Stock Photo',
            ref: [
                'Egor Kamelev',
                'https://www.pexels.com/photo/close-up-photography-of-snowflake-813872/'
            ]
        }
    },
    {
        code: ['1087', '1273', '1276', '1279', '1282'],
        day: {
            src: '/../dist/images/thunder.jpg',
            alt: 'Free Lightning Strikes Stock Photo',
            ref: [
                'Frank Cone',
                'https://www.pexels.com/photo/lightning-strikes-2258536/'
            ]
        },
        night: {
            src: '/../dist/images/N-thunder.jpg',
            alt: 'Free Lightning Strike on the Sky Stock Photo',
            ref: [
                'Сергей Леденёв',
                'https://www.pexels.com/photo/lightning-strike-on-the-sky-8956453/'
            ]
        }
    },
    {
        code: ['1114', '1117', '1219', '1222', '1225'],
        day: {
            src: '/../dist/images/heavy-snow.jpg',
            alt: 'Free Aged Building Facade With Snow on Roof Stock Photo',
            ref: [
                'Maria Orlova',
                'https://www.pexels.com/photo/aged-building-facade-with-snow-on-roof-4969981/'
            ]
        },
        night: {
            src: '/../dist/images/N-heavy-snow.jpg',
            alt: 'Free Exterior of small wooden cottage with snow on roof and burning electric lights in window during snowfall at cold winter night Stock Photo',
            ref: [
                'Maria Orlova',
                'https://www.pexels.com/photo/snowy-wooden-house-during-snowfall-at-night-4969846/'
            ]
        }
    },
    {
        code: ['1168', '1171', '1201', '1072', '1198'],
        day: {
            src: '/../dist/images/freezing-rain.jpg',
            alt: 'Free Close-up Photography of Ice Crystals on Edges of Corrugated Sheets Stock Photo',
            ref: [
                'Skitterphoto',
                'https://www.pexels.com/photo/close-up-photography-of-ice-crystals-on-edges-of-corrugated-sheets-730910/'
            ]
        },
        night: {
            src: '/../dist/images/N-freezing-rain.jpg',
            alt: 'Free Photo of Windshield During Rainy Weather Stock Photo',
            ref: [
                'Lukas Rychvalsky',
                'https://www.pexels.com/photo/photo-of-windshield-during-rainy-weather-1600909/'
            ]
        }
    },
    {
        code: ['1186', '1192', '1243', '1246'],
        day: {
            src: '/../dist/images/heavy-rain.jpg',
            alt: 'Free Raining Through Window of Car Focusing Side Mirror Stock Photo',
            ref: [
                'Sinitta Leunen',
                'https://www.pexels.com/photo/through-window-of-car-on-mirror-5902149/'
            ]
        },
        night: {
            src: '/../dist/images/heavy-rain.jpg',
            alt: 'Free Raining Through Window of Car Focusing Side Mirror Stock Photo',
            ref: [
                'Sinitta Leunen',
                'https://www.pexels.com/photo/through-window-of-car-on-mirror-5902149/'
            ]
        }
    },
    {
        code: ['1066', '1210', '1213', '1216', '1255', '1252', '1258'],
        day: {
            src: '/../dist/images/moderate-snow.jpg',
            alt: 'Free Close-up Photography of SnowFlake Stock Photo',
            ref: [
                'Egor Kamalev',
                'https://www.pexels.com/photo/close-up-photography-of-snowflake-813872/'
            ]
        },
        night: {
            src: '/../dist/images/N-light-snow.jpg',
            alt: 'Free Photo of Trees And Snow Covered Ground During Night Time Stock Photo',
            ref: [
                'Martin Mariani',
                'https://www.pexels.com/photo/photo-of-trees-and-snow-covered-ground-during-night-time-3801463/'
            ]
        }
    }
];

export { backgrounds }