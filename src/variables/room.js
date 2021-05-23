import Room from 'views/Room/Room'

const rooms = [
    {
        name: "Living Room",
        path: "/livingroom",
        icon: "content_paste",
        component: Room,
        layout: "/admin",
        devices: {
            acs: [
                {
                    name: "Panasonic AC",
                    status: true,
                    temperature: "24",
                    mode: "fan",
                },
                {
                    name: "LG AC",
                    status: false,
                    temperature: "32",
                    mode: "cool",
                }
            ],
            lights: [
                {
                    name: "Center",
                    description: "Center 12w led light",
                    status: false
                }, 
                {                
                    name: "Corner",
                    description: "Corner 4x 3w led light",
                    status: true
                }, 
                {
                    name: "Border",
                    description: "Border 12x 1w led light",
                    status: false
                }, 
                {
                    name: "Fancy",
                    description: "Fancy 5w led coloured lights",
                    status: true
                }
            ],
            fans: [
                {
                    name: "Ceiling Fan",
                    status: false,
                    speed: "3",
                    description: "Bajaj Fan"
                },
                {
                    name: "Table Fan",
                    status: true,
                    speed: "2",
                    description: "Havells swing fan"
                }
            ],
            plugs: [
                {
                    name: "Near Table",
                    status: true
                }, 
                {
                    name: "Near Bed",
                    status: false
                }
            ],
            heaters: []
        }
    },
    {
        name: "Bath Room",
        path: "/bathroom",
        icon: "content_paste",
        component: Room,
        layout: "/admin",
        devices: {
            plugs: [
                {
                    name: "Near Mirror",
                    status: true
                }, 
                {
                    name: "Near Toilet",
                    status: false
                }
            ],
            lights: [
                {
                    name: "Near Mirror",
                    description: "3w led light",
                    status: false
                }, 
                {                
                    name: "Center",
                    description: "Center 7w led light",
                    status: false
                }, 
            ],
            heaters: [
                {
                    name: "Water Heater",
                    status: false,
                    temperature: 50,
                    description: "Vguard Water Heater"
                }
            ]
        }
    }
]

export default rooms;