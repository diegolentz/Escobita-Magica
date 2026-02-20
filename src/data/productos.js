const productosMock = [
    {
        id: 1,
        title: "Combo N°1: Desinfeccion Profunda",
        description: ["10 litros de lavandina concentrada.","500cc de concentrado para pisos (rinde 10 litros)."],
        price: 13600,
        image: "/combo1.jpeg",
        badge: "Nuevo",
        tone: "gold",
    },
    {
        id: 2,
        title: "Combo N°2: Lavado Economico",
        description: ["5lts. de jabon liquido doble concentrado tipo skyp."," 5lts de suavizante."],
        price: 12780,
        image: "/combo2.jpeg",
        tone: "green",
    },
    {
        id: 3,
        title: "Combo N°3: Economico Doble",
        description: ["10 lts de jabon doble concentrado tipo skyp.", "10 lts de suavizante."],
        price: 25000,
        image: "/combo3.jpeg",
        tone: "green",
    },
    {
        id: 4,
        title: "Combo N°4: Lavadero Premium",
        description: ["5lts de jabon premium lavadero.", "5lts de suavizante."],
        price: 16200,
        image: "/combo4.jpeg",
        tone: "gold",
    },
    {
        id: 5,
        title: "Combo N°5: XL Concentrado",
        description: ["10 lts de jabon liquido doble concentrado tipo skyp."],
        price: 16200,
        image: "/combo5.jpeg",
        tone: "gold",
    },
    {
        id: 6,
        title: "Combo N°6: Pileta",
        description: ["10 litros de cloro."],
        price: 13410,
        image: "/combo6.jpeg",
        tone: "gold",
    },
    {
        id: 7,
        title: "Combo N°7: Mega",
        description: ["5 lts de jabon liquido doble concentrado tipo skyp .", "5 lts de suavizante", "500cc de concentrado para pisos (rinde 10 litros).","esponja","valerina ", "papel higienico 10 x 30 MTS."],
        price: 34200,
        image: "/combo7.jpeg",
        tone: "gold",
    },
    {
        id: 8,
        title: "Combo N°8: Basico",
        description: ["5 lts de jabon liquido doble concentrado tipo skip.", "5 lts de suavizante", "5lts de lavandina concentrada", "500cc de concentrado para pisos (rinde 10 litros)", "rejilla", "esponja"],
        price: 23850,
        image: "/combo8.jpeg",
        tone: "gold",
    },
    {
        id: 9,
        title: "Combo N°9: Completo",
        description: ["5 lts de jabón Líquido Tipo skyp.", "5 lts de suavizante", "5 lts de lavandina concentrada", "1 litro de detergente liquido", "1 litro de jabon de manos", "1 litro de desengrasante multiuso", "Trapo de pisos gris", "Esponja", "Rejilla", "10 bolsas de consorcio de 45x60"],
        price: 29880,
        image: "/combo9.jpeg",
        tone: "gold",
    },
    {
        id: 10,
        title: "Combo N°10: Limpieza ECO",
        description: ["5 lts de Detergente concentrado.","5 lts de lavandina concentrada","500cc de concentrado para pisos (rinde 10 litros)"],
        price: 15570,
        image: "/combo10.jpeg",
        tone: "gold",
    },
    {
        id: 11,
        title: "Combo N°11: Cocina",
        description: ["1 litro de Detergente concentrado.", "1 litro de desengrasante multiuso", "Precio en efectivo: $8100"],
        price: 9000,
        image: "/combo11.jpeg",
        tone: "gold",
    },
    {
        id: 12,
        title: "Combo N°12: Balde",
        description: ["Balde escurridor (x1).", "Mopa (x1)", "Palo (x1)"],
        price: 15200,
        image: "/combo12.jpeg",
        tone: "gold",
    },
    {
        id: 13,
        title: "Combo N°13: DUO Limpieza Profunda",
        description: ["5 lts de vinagre de alcohol.", "1 kilo de bicarbonato de sodio"],
        price: 9900,
        image: "/combo13.jpeg",
        tone: "gold",
    },
    {
        id: 14,
        title: "Combo N°14: Escobillon",
        description: ["Escoba con palo", "Secador con palo", "Pala con cabo", "Trapo de piso de algodón"],
        price: 12600,
        image: "/combo14.jpeg",
        tone: "gold",
    },
    {
        id: 15,
        title: "Combo N°15: Treio Desengrasante Total",
        description: ["1 litro de desengrasanre multiuso.", "1 litro de Detergente", "Bicarbonato de sodio"],
        price: 10200,
        image: "/combo15.jpeg",
        tone: "gold",
    },
    {
        id: 16,
        title: "Combo N°16: Blanquisimo",
        description: ["5 lts de jabon doble concentrado tipo skyp.", "5 lts de suavizante", "5 lts de lavandina para bancos", "1 kg de percarbonato (blanqueador)"],
        price: 29000,
        image: "/combo16.jpeg",
        tone: "red",
    }

    // 
    ,
    {
        id: 17,
        title: "Alcohol al 70%",
        description: ["5 litro de alcohol al 70%."],
        price: 7630,
        image: "/combo17.jpeg",
        tone: "red",
    }
    ,
    {
        id: 18,
        title: "Alcohol al 70%",
        description: ["1 litro de alcohol al 70%."],
        price: 2867,
        image: "/combo18.jpeg",
        tone: "red",
    }
    ,
    {
        id: 19,
        title: "Alcohol al 96%",
        description: ["5 lts de alcohol al 96%."],
        price: 10585,
        image: "/combo19.jpeg",
        tone: "red",
    }
    ,
    {
        id: 20,
        title: "Alcohol al 96%",
        description: ["1 litro de alcohol al 96%."],
        price: 3499,
        image: "/combo20.jpeg",
        tone: "red",
    }
    ,
    {
        id: 21,
        title: "Cloro",
        description: ["5 lts de cloro."],
        price: 6930,
        image: "/combo21.jpeg",
        tone: "red",
    }
    ,
    {
        id: 22,
        title: "Cloro",
        description: ["1 litro de cloro."],
        price: 1500,
        image: "/combo22.jpeg",
        tone: "red",
    }
    ,
    {
        id: 23,
        title: "Jabon de manos",
        description: ["5 lts de jabon de manos."],
        price: 9720,
        image: "/combo23.jpeg",
        tone: "red",
    }
    ,
    {
        id: 24,
        title: "Jabon de manos liquido",
        description: ["1 litro de jabon de manos liquido."],
        price: 3060,
        image: "/combo24.jpeg",
        tone: "red",
    }
    ,
    {
        id: 25,
        title: "Jabon liquido doble concentrado",
        description: ["5 litros de jabon liquido tipo skip."],
        price: 7650,
        image: "/combo25.jpeg",
        tone: "red",
    }
    ,
    {
        id: 26,
        title: "Jabon liquido doble concentrado",
        description: ["1 litro de jabon liquido tipo skip."],
        price: 2187,
        image: "/combo26.jpeg",
        tone: "red",
    }
    ,
    {
        id: 27,
        title: "Jabon liquido premium",
        description: ["5 litros de jabon liquido premium lavadero."],
        price: 9720,
        image: "/combo27.jpeg",
        tone: "red",
    }
    ,
    {
        id: 28,
        title: "Jabon liquido premium",
        description: ["1 litro de jabon liquido premium lavadero."],
        price: 2500,
        image: "/combo28.jpeg",
        tone: "red",
    }
    ,
    {
        id: 29,
        title: "Lavandina",
        description: ["5 lts de lavandina concentrada."],
        price: 3600,
        image: "/combo29.jpeg",
        tone: "red",
    }
    ,
    {
        id: 30,
        title: "Lavandina",
        description: ["1 litro de lavandina concentrada."],
        price: 1000,
        image: "/combo30.jpeg",
        tone: "red",
    }
    ,
    {
        id: 31,
        title: "Suavizante",
        description: ["5 lts de suavizante."],
        price: 8500,
        image: "/combo31.jpeg",
        tone: "red",
    }
    ,
    {
        id: 32,
        title: "Suavizante",
        description: ["1 litro de suavizante."],
        price: 2000,
        image: "/combo32.jpeg",
        tone: "red",
    }
    ,
    {
        id: 33,
        title: "Escencias para pisos",
        description: ["Escencias concentradas para pisos x 250cc", "Rinde 5 litros."],
        price: 10350,
        image: "/combo16.jpeg",
        tone: "red",
    }
    ,
    {
        id: 34,
        title: "Desengrasante",
        description: ["Desengrasante multiuso x 5 litros."],
        price: 22050,
        image: "/combo34.jpeg",
        tone: "red",
    }
    ,
    {
        id: 35,
        title: "Desengrasante",
        description: ["Desengrasante multiuso x 1 litro."],
        price: 2610,
        image: "/combo35.jpeg",
        tone: "red",
    }
    ,
    {
        id: 36,
        title: "Desengrasante",
        description: ["5 litros de desengrasante."],
        price: 9900,
        image: "/combo36.jpeg",
        tone: "red",
    }
    ,
    {
        id: 37,
        title: "Desengrasante",
        description: ["1 litro de desengrasante."],
        price: 2790,
        image: "/combo37.jpeg",
        tone: "red",
    }
    ,
    {
        id: 38,
        title: "Lavandina en gel",
        description: ["5 litros de lavandina en gel."],
        price: 5832,
        image: "/combo38.jpeg",
        tone: "red",
    }
    ,
    {
        id: 39,
        title: "Lavandina en gel",
        description: ["1 litro de lavandina en gel."],
        price: 1458,
        image: "/combo39.jpeg",
        tone: "red",
    }
    ,
    {
        id: 40,
        title: "Lavandina para blancos",
        description: ["5 litros de lavandina para blancos."],
        price: 4050,
        image: "/combo40.jpeg",
        tone: "red",
    }
    ,
    {
        id: 41,
        title: "Lavandina para blancos",
        description: ["1 litro de lavandina para blancos."],
        price: 1170,
        image: "/combo41.jpeg",
        tone: "red",
    }
    ,
    {
        id: 42,
        title: "Perfumina",
        description: ["Perfumina concentrada para ropa x 250cc"],
        price: 3090,
        image: "/combo42.jpeg",
        tone: "red",
    }
    ,
    {
        id: 43,
        title: "Perfumina",
        description: ["Perfumina concentrada para ropa x 1 litro"],
        price: 7650,
        image: "/combo43.jpeg",
        tone: "red",
    }
    ,
    {
        id: 44,
        title: "Balde",
        description: ["Balde escurridor X 1."],
        price: 9000,
        image: "/combo44.jpeg",
        tone: "red",
    }
    ,
    {
        id: 45,
        title: "Balde ",
        description: ["Balde redondo X 1."],
        price: 3600,
        image: "/combo45.jpeg",
        tone: "red",
    }
    ,
    {
        id: 46,
        title: "Paño Repasador",
        description: ["Paño amarillo de valerina"],
        price: 464,
        image: "/combo46.jpeg",
        tone: "red",
    }
    ,
    {
        id: 47,
        title: "Paño Repasador",
        description: ["Paño repasador de algodón."],
        price: 2430,
        image: "/combo47.jpeg",
        tone: "red",
    }
    ,
    {
        id: 48,
        title: "Rollo de cocina",
        description: ["Rollo de cocina x 4 unidades"],
        price: 9500,
        image: "/combo48.jpeg",
        tone: "red",
    }
    ,
    {
        id: 49,
        title: "Rollo de cocina",
        description: ["Rollo de cocina x 200 paños"],
        price: 2700,
        image: "/combo49.jpeg",
        tone: "red",
    }
    ,
    {
        id: 50,
        title: "Rollo de cocina",
        description: ["Rollo de cocina x4 unidades de 200 paños."],
        price: 29000,
        image: "/combo50.jpeg",
        tone: "red",
    }
    ,
    {
        id: 51,
        title: "Papel Higiénico",
        description: ["Papel higenico hoja simple 4 x 30mts"],
        price: 1900,
        image: "/combo51.jpeg",
        tone: "red",
    }
    ,
    {
        id: 52,
        title: "Bicarbonato",
        description: ["500 gr de bicarbonato."],
        price: 3499,
        image: "/combo52.jpeg",
        tone: "red",
    }
    ,
    {
        id: 53,
        title: "Bicarbonato",
        description: ["Bicarbonato de sodio x 1 kg."],
        price: 6220,
        image: "/combo53.jpeg",
        tone: "red",
    }
    ,
    {
        id: 54,
        title: "Blanqueador natural",
        description: ["1 kg de percarbonato de sodio.", "En granel"],
        price: 12600,
        image: "/combo54.jpeg",
        tone: "red",
    }
    ,
    {
        id: 55,
        title: "Blanqueador natural",
        description: ["500 gr de percarbonato de sodio.", "En granel"],
        price: 6930,
        image: "/combo55.jpeg",
        tone: "red",
    }
    ,
    // {
    //     id: 56,
    //     title: "Combo N°16: Blanquisimo",
    //     description: ["5 lts de jabon doble concentrado tipo skyp.", "5 lts de suavizante", "5 lts de lavandina para bancos", "1 kg de percarbonato (blanqueador)"],
    //     price: 6930,
    //     image: "/combo56.jpeg",
    //     tone: "red",
    // }
    ,
    {
        id: 56,
        title: "Balde",
        description: ["Balde de limpieza x 1"],
        price: 4050,
        image: "/combo56.jpeg",
        tone: "red",
    }
    ,
    {
        id: 57,
        title: "Pastilla para lavarropas",
        description: ["Pastilla para lavarropas x 3.", "Se usa 1 cada 15 dias", "Quita sarro y residuos en el lavarropas."],
        price: 5000,
        image: "/combo57.jpeg",
        tone: "red",
    }
    ,
    {
        id: 58,
        title: "Papel Higiénico",
        description: ["Papel higiénico hoja simple x 10 x 30mts"],
        price: 5400,
        image: "/combo58.jpeg",
        tone: "red",
    }
    ,
    {
        id: 59,
        title: "Papel Higiénico",
        description: ["Papel higiénico doble hoja simple x 6 x 100mts"],
        price: 13320,
        image: "/combo59.jpeg",
        tone: "red",
    }
     ,
    {
        id: 60,
        title: "Esponja",
        description: ["Esponja para limpieza x 1"],
        price: 646,
        image: "/combo60.jpeg",
        tone: "red",
    }
];

export const getProductos = async () => {
  return productosMock;
};