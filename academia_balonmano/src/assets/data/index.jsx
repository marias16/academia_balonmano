const data = [
    {
        id: 3002,
        group: ["juego", "global"],
        name:"Gol al bote",
        text: "Crear espacios sin balón",
        img: "img/3002.png",
        categories: ["juego", "gol al bote"],
        content: ["desmarque, marcaje", "campo visual", "petición", "relación"],
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
    }
]

export default data