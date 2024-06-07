//Array de JUEGOS

const juegosPs4 = [
    {id:1, nombre: "Marvel's Spider-Man 2 Juego Físico Sellado Original", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81DC-janmJL._AC_SX679_.jpg", precio: 17899},
    {id:2, nombre: " Final Fantasy VII Rebirth ps5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81e4WRlYDEL._AC_SX569_.jpg", precio: 14999},
    {id:3, nombre: "Final Fantasy XVI PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81T+Q9fgZhL._AC_SX569_.jpg", precio: 33948},
    {id:4, nombre: "Forspoken -ps5 fisico ", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81V03q2hwHL._AC_SX522_.jpg", precio: 25000},
    {id:5, nombre: "Meridiem Games Stray", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/717w5ZCykZL._AC_SX569_.jpg", precio: 15999},
    {id:6, nombre: "Sonic Frontier PS5 Físico", plataforma:"ps5", imagen: "https://m.media-amazon.com/images/I/81ulrCZwsDL._AC_SX569_.jpg", precio: 12999},
    {id:7, nombre: "aPlaguetale Requiem PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/71fZJ2iuFOL._AC_SX522_.jpg", precio: 23999},
    {id:8, nombre: "Square Enix Marvel'S Guardians of The Galaxy Estándar PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81Nc9UAbKrL._AC_SX522_.jpg   ", precio: 8999},
    {id:9, nombre: " Mortal Kombat 11 - Ultimate Edition PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/71nTF-6SjNL._AC_SY679_.jpg", precio: 7989},
    {id:10, nombre: "Grand Theft Auto V PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/717n2jHZ7pL._AC_SX522_.jpg", precio: 7000},
    {id:11, nombre: "Far Cry 6 Spa PS5 Fisico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81q05karjcS._AC_SX569_.jpg", precio: 9897},
    {id:12, nombre: "Call of Duty: Vanguard PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81+bzyrYTtL._AC_SX569_.jpg", precio: 19000},
    {id:13, nombre: "Minecraft Legends - Deluxe Edition  PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/817+PqDYzUL._AC_SX569_.jpg", precio: 8000},
    {id:14, nombre: "The Last of Us: Parte II Remastered PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81jdepruImL._AC_SX569_.jpg", precio: 17498},
    {id:15, nombre: "Ghost of Tsushima Director's Cut PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81bwE2k8F3S._AC_SY679_.jpg", precio: 11698},
    {id:16, nombre: "MORTAL KOMBAT 1 Standard Edition PS5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81vFJTxIRPL._AC_SY679_.jpg", precio: 7500},
    {id:17, nombre: "Dead Island 2, Pulp Edition, PlayStation 5 Físico", plataforma: "ps5", imagen: "https://m.media-amazon.com/images/I/81uxJO+uPbL._AC_SX522_.jpg", precio: 12215},
];

const juegosNintendo = [
    {id:18, nombre: "Crash Team Racing: Nitro-Fueled Crash Team Racing Standard Edition Activision Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_603086-MLA40860808775_022020-O.webp", precio: 16100},
    {id:19, nombre: "Just Dance 2024 Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://m.media-amazon.com/images/I/71j1Qgzhp7L._AC_SY679_.jpg", precio: 28999},
    {id:20, nombre: "Luigi's Mansion 3 Luigi's Mansion Standard Edition Nintendo Switch Digital",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_719807-MLA40862930062_022020-O.webp", precio: 12000},
    {id:21, nombre: "Mario+rabbids Kingdom Battle - Switch Fisico/ Mipowerdestiny",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_942236-MLA31351970091_072019-O.webp", precio: 24449},
    {id:22, nombre: "Mario + Rabbids Sparks of Hope Standard Edition Ubisoft Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_650347-MLA51804564539_102022-O.webp", precio: 40999},
    {id:23, nombre: "Super Mario Maker 2 Super Mario Maker Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_757148-MLA40917205776_022020-O.webp", precio: 35000},
    {id:24, nombre: "Super Mario Odyssey Super Mario Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_958303-MLA40864140097_022020-O.webp", precio: 35000},
    {id:25, nombre: "Super Smash Bros. Ultimate Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_805062-MLA40861843559_022020-O.webp", precio: 35000},
    {id:26, nombre: "Yoshi's Crafted World Yoshi Standard Edition Nintendo Switch Físico",plataforma: "nintendo", imagen: "https://http2.mlstatic.com/D_NQ_NP_887285-MLA44340079815_122020-O.webp", precio: 34999},
];

const juegos = juegosPs4.concat(juegosNintendo);

guardarJuegosLS();

