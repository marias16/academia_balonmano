const data = [
    {
        id: 3002,
        group: "juego",
        name:"Gol al bote",
        text: "Crear espacios sin balón",
        categories: ["táctica defensiva", "táctica ofensiva"],
        subcategories: ["desmarque, marcaje", "campo visual", "petición", "relación"],
        players: {
            attack: "Pase sobre línea es gol si recepciona compañero",
            defense: "Intercepta para atacar",
            shoot: "Elegir pase de gol o continuidad"
        },
        tacticals: {
            attack: "Desmarque para crear espacios",
            defense: "Ver oponente y balón",
            shoot: "Prever la siguiente acción antes de recibir",
        },
        variants: [
            {
                name:"Objetivos ofensivos",
                text: "Un atacante solo colabora con bloqueos y pase y se va. No lanza."
        }
        ]
    },
    {
        id: 3003,
        group: "juego",
        name:"Balón pilla, balón salva",
        text: "Desmarques",
        categories: ["técnica ofensiva"],
        subcategories: ["petición", "relación"],
        players: {
            attack: "Pase sobre línea es gol si recepciona compañero",
            defense: "Intercepta para atacar",
            shoot: "Elegir pase de gol o continuidad"
        },
        tacticals: {
            attack: "Desmarque para crear espacios",
            defense: "Ver oponente y balón",
            shoot: "Prever la siguiente acción antes de recibir",
        },
        variants: [
            {
                name:"Objetivos ofensivos",
                text: "Un atacante solo colabora con bloqueos y pase y se va. No lanza."
        }
        ]
    },
    {
        id: 3004,
        group: "juego",
        name:"Paintball",
        text: "Lanzamientos",
        categories: ["técnica ofensiva"],
        subcategories: [],
        players: {
            attack: "Pase sobre línea es gol si recepciona compañero",
            defense: "Intercepta para atacar",
            shoot: "Elegir pase de gol o continuidad"
        },
        tacticals: {
            attack: "Desmarque para crear espacios",
            defense: "Ver oponente y balón",
            shoot: "Prever la siguiente acción antes de recibir",
        },
        variants: [
            {
                name:"Objetivos ofensivos",
                text: "Un atacante solo colabora con bloqueos y pase y se va. No lanza."
        }
        ]
    },
    {
        id: 3005,
        group: "juego",
        name:"Minibalonmano",
        text: "Se saca de porteria",
        categories: ["táctica ofensiva", "táctica defensiva"],
        subcategories: [],
        players: {
            attack: "Pase sobre línea es gol si recepciona compañero",
            defense: "Intercepta para atacar",
            shoot: "Elegir pase de gol o continuidad"
        },
        tacticals: {
            attack: "Desmarque para crear espacios",
            defense: "Ver oponente y balón",
            shoot: "Prever la siguiente acción antes de recibir",
        },
        variants: [
            {
                name:"Objetivos ofensivos",
                text: "Un atacante solo colabora con bloqueos y pase y se va. No lanza."
        }
        ]
    },
    {
        id: 3006,
        group: "juego",
        name:"Pasar por debajo",
        text: "Tocar con balón sin lanzar pilla",
        categories: ["técnica ofensiva"],
        subcategories: ["pase", "recepción"],
        players: {
            attack: "Pase sobre línea es gol si recepciona compañero",
            defense: "Intercepta para atacar",
            shoot: "Elegir pase de gol o continuidad"
        },
        tacticals: {
            attack: "Desmarque para crear espacios",
            defense: "Ver oponente y balón",
            shoot: "Prever la siguiente acción antes de recibir",
        },
        variants: [
            {
                name:"Objetivos ofensivos",
                text: "Un atacante solo colabora con bloqueos y pase y se va. No lanza."
        }
        ]
    },
    {
        id: 2001,
        group: ["juego"],
        name:"Diana móvil",
        text: "Desplazar medicinal a campo contrario",
        categories: ["técnica ofensiva"],
        subcategories: ["lanzamiento"],
        players: {
            attack: "Pase sobre línea es gol si recepciona compañero",
            defense: "Intercepta para atacar",
            shoot: "Elegir pase de gol o continuidad"
        },
        tacticals: {
            attack: "Desmarque para crear espacios",
            defense: "Ver oponente y balón",
            shoot: "Prever la siguiente acción antes de recibir",
        },
        variants: [
            {
                name:"Objetivos ofensivos",
                text: "Un atacante solo colabora con bloqueos y pase y se va. No lanza."
        }
        ]
    },
]

export default data