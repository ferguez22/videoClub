const peliculas = [
    {
        nombre: "La la land",
        genero: "Romántica",
        fecha: "2017",
        img: "https://m.media-amazon.com/images/I/816O+CBx0ML.jpg",
        precio: 15
    },
    {
        nombre: "Hermano Oso",
        genero: "Animación",
        fecha: "2004",
        img: "https://image.tmdb.org/t/p/original/uUAsEgeeJjZk01kmQazbJmYhORx.jpg",
        precio: 19
    },
    {
        nombre: "Yo antes de ti",
        genero: "Romántica",
        fecha: "2016",
        img: "https://image.tmdb.org/t/p/original/k7rVpfmFq1hlRiP5qAcK0jv08rj.jpg",
        precio: 25
    },
    {
        nombre: "A dos metros de ti",
        genero: "Romántica",
        fecha: "2019",
        img: "https://www.lahiguera.net/cinemania/pelicula/9179/a_dos_metros_de_ti-cartel-9053.jpg",
        precio: 12
    },
    {
        nombre: "Titanic",
        genero: "Romántica",
        fecha: "2017",
        img: "https://m.media-amazon.com/images/I/71svirLP6GL.jpg",
        precio: 15
    },
    {
        nombre: "Toy Story",
        genero: "Animación",
        fecha: "1996",
        img: "https://i.ebayimg.com/images/g/VK0AAOSwVPFfja5T/s-l1200.jpg",
        precio: 19
    },
    {
        nombre: "Cars",
        genero: "Animación",
        fecha: "2006",
        img: "https://m.media-amazon.com/images/I/91J9Eoa0udL.jpg",
        precio: 25
    },
    {
        nombre: "Del revés",
        genero: "Animación",
        fecha: "2015",
        img: "https://image.tmdb.org/t/p/original/1nyBIB648TLpCr9W5JcGdFJ0J45.jpg",
        precio: 12
    },
    {
        nombre: "El Rey León",
        genero: "Animación",
        fecha: "1994",
        img: "https://image.tmdb.org/t/p/original/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
        precio: 15
    },
    {
        nombre: "Star Trek",
        genero: "Ciencia Ficción",
        fecha: "2009",
        img: "https://pics.filmaffinity.com/Star_Trek-815589716-large.jpg",
        precio: 19
    },
    {
        nombre: "Tron: Legacy",
        genero: "Ciencia Ficción",
        fecha: "1982",
        img: "https://www.originalfilmart.com/cdn/shop/files/tron_legacy_2010_cycles_teaser_original_film_art_5000x.webp?v=1684444149",
        precio: 25
    },
    {
        nombre: "Harry Potter y la piedra filosofal",
        genero: "Fantasía",
        fecha: "2001",
        img: "https://storage.googleapis.com/pod_public/1300/105089.jpg",
        precio: 12
    },
    {
        nombre: "Harry Potter y la cámara secreta",
        genero: "Fantasía",
        fecha: "2002",
        img: "https://m.media-amazon.com/images/I/51UizOJ+NFL._AC_UF894,1000_QL80_.jpg",
        precio: 15
    },
    {
        nombre: "Harry Potter y el prisionero de Azkaban",
        genero: "Fantasía",
        fecha: "2004",
        img: "https://static.posters.cz/image/1300/posters/harry-potter-el-prisionero-de-azkaban-i161981.jpg",
        precio: 19
    },
    {
        nombre: "Harry Potter y el cáliz de fuego",
        genero: "Fantasía",
        fecha: "2005",
        img: "https://m.media-amazon.com/images/I/71opdcUCGjL._AC_UF894,1000_QL80_.jpg",
        precio: 25
    },
    {
        nombre: "Harry Potter y la Orden del Fénix",
        genero: "Fantasía",
        fecha: "2007",
        img: "https://storage.googleapis.com/pod_public/750/115696.jpg",
        precio: 12
    },
    {
        nombre: "Harry Potter y el misterio del príncipe",
        genero: "Fantasía",
        fecha: "2009",
        img: "https://static.posters.cz/image/1300/posters/harry-potter-el-misterio-del-principe-i104623.jpg",
        precio: 15
    },
    {
        nombre: "Harry Potter y las reliquias de la muerte: Parte 1",
        genero: "Fantasía",
        fecha: "2010",
        img: "https://static.posters.cz/image/1300/posters/harry-potter-las-reliquias-de-la-muerte-i104624.jpg",
        precio: 19
    },
    {
        nombre: "Harry Potter y las reliquias de la muerte: Parte 2",
        genero: "Fantasía",
        fecha: "2011",
        img: "https://img.ecartelera.com/noticias/fotos/8000/8070/1.jpg",
        precio: 25
    },
    {
        nombre: "Star Wars: Episodio IV - Una nueva esperanza",
        genero: "Ciencia Ficción",
        fecha: "1977",
        img: "https://musicart.xboxlive.com/7/51325100-0000-0000-0000-000000000002/504/image.jpg",
        precio: 12
    },
    {
        nombre: "Star Wars: Episodio V - El imperio contraataca",
        genero: "Ciencia Ficción",
        fecha: "1980",
        img: "https://m.media-amazon.com/images/I/816H2tHIGuL._AC_UF894,1000_QL80_.jpg",
        precio: 15
    },
    {
        nombre: "Star Wars: Episodio VI - El regreso del Jedi",
        genero: "Ciencia Ficción",
        fecha: "1983",
        img: "https://m.media-amazon.com/images/I/81XtYaFVTcL._AC_UF894,1000_QL80_.jpg",
        precio: 19
    },
    {
        nombre: "Star Wars: Episodio I - La amenaza fantasma",
        genero: "Ciencia Ficción",
        fecha: "1999",
        img: "https://m.media-amazon.com/images/I/61+lrYp-EIL.jpg",
        precio: 25
    },
    {
        nombre: "Star Wars: Episodio II - El ataque de los clones",
        genero: "Ciencia Ficción",
        fecha: "2002",
        img: "https://m.media-amazon.com/images/I/61vPfJJdjbL.jpg",
        precio: 12
    },
    {
        nombre: "Star Wars: Episodio III - La venganza de los Sith",
        genero: "Ciencia Ficción",
        fecha: "2005",
        img: "https://m.media-amazon.com/images/I/71MKj4j-isL.jpg",
        precio: 15
    },
    {
        nombre: "Star Wars: Episodio VII - El despertar de la Fuerza",
        genero: "Ciencia Ficción",
        fecha: "2015",
        img: "https://www.tuposter.com/pub/media/catalog/product/cache/71d04d62b2100522587d43c930e8a36b/f/i/file_48_16.jpg",
        precio: 19
    },
    {
        nombre: "Star Wars: Episodio VIII - Los últimos Jedi",
        genero: "Ciencia Ficción",
        fecha: "2017",
        img: "https://www.tuposter.com/pub/media/catalog/product/cache/71d04d62b2100522587d43c930e8a36b/l/a/last_jedi_poster.jpg",
        precio: 25
    },
    {
        nombre: "Star Wars: Episodio IX - El ascenso de Skywalker",
        genero: "Ciencia Ficción",
        fecha: "2019",
        img: "https://static.posters.cz/image/750/pinturas-sobre-lienzo-star-wars-el-ascenso-de-skywalker-saga-i84275.jpg",
        precio: 12
    },
    {
        nombre: "Iron Man",
        genero: "Acción",
        fecha: "2008",
        img: "https://i.ebayimg.com/images/g/upMAAOSw4vJaoM-F/s-l1200.jpg",
        precio: 15
    },
    {
        nombre: "El increíble Hulk",
        genero: "Acción",
        fecha: "2008",
        img: "https://m.media-amazon.com/images/I/61VITjOaXcL._AC_UF1000,1000_QL80_.jpg",
        precio: 19
    },
    {
        nombre: "Iron Man 2",
        genero: "Acción",
        fecha: "2010",
        img: "https://i.ebayimg.com/images/g/pTMAAOSwLNVaoNe5/s-l1200.jpg",
        precio: 25
    },
    {
        nombre: "Thor",
        genero: "Acción",
        fecha: "2011",
        img: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/oqMAAOSw-r9cpZW8/$_57.JPG?set_id=8800005007",
        precio: 12
    },
    {
        nombre: "Capitán América: El primer vengador",
        genero: "Acción",
        fecha: "2011",
        img: "https://m.media-amazon.com/images/I/51B+TpQGwZL._AC_UF1000,1000_QL80_.jpg",
        precio: 15
    },
    {
        nombre: "Los Vengadores",
        genero: "Acción",
        fecha: "2012",
        img: "https://i.ebayimg.com/images/g/OBoAAOSw2vBfbDFb/s-l1200.jpg",
        precio: 19
    },
    {
        nombre: "Iron Man 3",
        genero: "Acción",
        fecha: "2013",
        img: "https://i.ebayimg.com/images/g/Gi8AAOSwRFZh7~N~/s-l1200.jpg",
        precio: 25
    },
    {
        nombre: "Thor: Un mundo oscuro",
        genero: "Acción",
        fecha: "2013",
        img: "https://m.media-amazon.com/images/I/81cdWyoc+OL._AC_UF894,1000_QL80_.jpg",
        precio: 12
    },
    {
        nombre: "Capitán América y el soldado del invierno",
        genero: "Acción",
        fecha: "2014",
        img: "https://static.posters.cz/image/750/posters/capitan-america-el-soldado-de-invierno-one-sheet-i19272.jpg",
        precio: 15
    },
    {
        nombre: "Guardianes de la galaxia",
        genero: "Acción",
        fecha: "2014",
        img: "https://m.media-amazon.com/images/I/81YZ8slCyuL.jpg",
        precio: 19
    },
    {
        nombre: "Vengadores: La era de Ultrón",
        genero: "Acción",
        fecha: "2015",
        img: "https://static.posters.cz/image/750/posters/vengadores-2-la-era-de-ultron-one-sheet-i27861.jpg",
        precio: 25
    },
    {
        nombre: "Ant-Man",
        genero: "Acción",
        fecha: "2015",
        img: "https://m.media-amazon.com/images/I/71rFsDKLSML._AC_UF1000,1000_QL80_.jpg",
        precio: 12
    },
    {
        nombre: "Capitán América: Civil War",
        genero: "Acción",
        fecha: "2016",
        img: "https://m.media-amazon.com/images/I/61AGQui78OL._AC_UF1000,1000_QL80_.jpg",
        precio: 15
    },
    {
        nombre: "Doctor Strange",
        genero: "Acción",
        fecha: "2016",
        img: "https://m.media-amazon.com/images/I/81b6gyv977L._AC_UF894,1000_QL80_.jpg",
        precio: 19
    },
    {
        nombre: "Guardianes de la galaxia Vol. 2",
        genero: "Acción",
        fecha: "2017",
        img: "https://m.media-amazon.com/images/I/61-ndDQWTdL._AC_UF894,1000_QL80_.jpg",
        precio: 25
    },
    {
        nombre: "Spiderman: Homecoming",
        genero: "Acción",
        fecha: "2017",
        img: "https://m.media-amazon.com/images/I/819rRt864hL.jpg",
        precio: 12
    },
    {
        nombre: "Thor: Ragnarok",
        genero: "Acción",
        fecha: "2017",
        img: "https://m.media-amazon.com/images/I/815zGY1R20L.jpg",
        precio: 15
    },
    {
        nombre: "Pantera Negra",
        genero: "Acción",
        fecha: "2018",
        img: "https://i.etsystatic.com/18242346/r/il/8f6455/2495450226/il_fullxfull.2495450226_cgbk.jpg",
        precio: 19
    },
    {
        nombre: "Vengadores: Guerra del Infinito",
        genero: "Acción",
        fecha: "2018",
        img: "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_fullxfull.4087791906_jcbj.jpg",
        precio: 25
    },
    {
        nombre: "Hombre Hormiga y la Avispa",
        genero: "Acción",
        fecha: "2018",
        img: "https://static.posters.cz/image/750/61318.jpg",
        precio: 12
    },
    {
        nombre: "Capitana Marvel",
        genero: "Acción",
        fecha: "2019",
        img: "https://www.yourdecoration.es/cdn/shop/files/grupo-erik-gpe5296-marvel-capitana-marvel-one-sheet-poster-61x91-5cm_d309ea52-118d-43c9-a400-881847ae23b0_500x.jpg?v=1727852249",
        precio: 15
    },
    {
        nombre: "Vengadores: Juego Final",
        genero: "Acción",
        fecha: "2019",
        img: "https://static.posters.cz/image/1300/posters/avengers-endgame-i122136.jpg",
        precio: 19
    },
    {
        nombre: "Spider-Man: Far From Home",
        genero: "Acción",
        fecha: "2019",
        img: "https://image.tmdb.org/t/p/original/fpkPXFOCHgTzOWfN7MP8XpfbgTA.jpg",
        precio: 25
    },
    {
        nombre: "Black Widow",
        genero: "Acción",
        fecha: "2021",
        img: "https://i.ebayimg.com/images/g/Xe8AAOSwxOdjVZSv/s-l1200.jpg",
        precio: 12
    },
    {
        nombre: "Shang-Chi y la leyenda de los Diez Anillos",
        genero: "Acción",
        fecha: "2021",
        img: "https://m.media-amazon.com/images/I/71zIs2R7adL._AC_UF1000,1000_QL80_.jpg",
        precio: 15
    },
    {
        nombre: "Eternals",
        genero: "Acción",
        fecha: "2021",
        img: "https://m.media-amazon.com/images/I/61bT2QGJ2NL._AC_UF1000,1000_QL80_.jpg",
        precio: 19
    },
    {
        nombre: "Spider-Man: Sin camino a casa",
        genero: "Acción",
        fecha: "2021",
        img: "https://m.media-amazon.com/images/I/A16MtRdjPbL.jpg",
        precio: 25
    },
    {
        nombre: "Doctor Strange: En el multiverso de la locura",
        genero: "Acción",
        fecha: "2022",
        img: "https://m.media-amazon.com/images/I/71ZcV9x-WCL._AC_UF1000,1000_QL80_.jpg",
        precio: 12
    },
    {
        nombre: "Thor: Love and Thunder",
        genero: "Acción",
        fecha: "2022",
        img: "https://m.media-amazon.com/images/I/71Qbo0tyNBL.jpg",
        precio: 15
    },
    {
        nombre: "Black Panther: Wakanda Forever",
        genero: "Acción",
        fecha: "2022",
        img: "https://m.media-amazon.com/images/I/819xdhsoj+L.jpg",
        precio: 19
    },
    {
        nombre: "Guardianes de la galaxia Vol. 3",
        genero: "Acción",
        fecha: "2023",
        img: "https://i0.wp.com/www.universomarvel.com/wp-content/uploads/2023/02/unnamed.jpg?ssl=1",
        precio: 12
    }
];
