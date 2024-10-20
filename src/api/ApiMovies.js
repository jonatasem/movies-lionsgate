import imgArlequina from "../assets/movies-api/arlequina.jpg";
import imgJoker from "../assets/movies-api/joker.png";
import imgMandalorian from "../assets/movies-api/mandaloriano.png";
import imgDeadPool from "../assets/movies-api/deadpool.jpg";

const ApiMovies = [
  {
    id: 0,
    name: "O Mandaloriano",
    description:
      "O mandaloriano encontra Baby Yoda, enfrenta Moff Gideon e carrega um sabre de luz negro; confira um resumo da jornada dos dois pela galáxia.",
    descriptionCompleted:
      "O Mandaloriano está sempre buscando formas de melhorar sua armadura, até que recebe uma missão de um cliente misterioso no submundo de Nevarro. Ele precisa rastrear e capturar um alvo sem nome, de aproximadamente cinquenta anos e, apesar de seu cliente parecer não se importar, o Dr.",
    year: 2019,
    avaliation: 9,
    img: imgMandalorian,
  },
  {
    id: 1,
    name: "Coringa",
    description:
      "Arthur Fleck é um cidadão de Gotham que sofre de uma doença mental que o obrigar a rir incontrolavelmente.",
    descriptionCompleted:
      "Arthur Fleck é um cidadão de Gotham que sofre de uma doença mental que o obrigar a rir incontrolavelmente. Para ganha a vida, ele faz pequenos trabalhos como palhaço, mas é vítima de violência nas ruas, o protagonista vive com a mãe, Penny, uma mulher doente que vive obcecada com o antigo patrão, Thomas Wayne.",
    year: 2019,
    img: imgJoker,
  },
  {
    id: 2,
    name: "Arlequina",
    description:
      "Margot Robbie como Harleen Quinzel / Arlequina: uma vilã louca, insana e ex-psiquiatra. ·",
    year: 2019,
    img: imgArlequina,
  },
  {
    id: 3,
    name: "Dead Pool",
    description:
      "Wade Wilson é um militar que se submete a uma experiência para tentar se salvar do câncer e acaba ganhando super-habilidades, mas quase morre no processo também.",
    year: 2016,
    img: imgDeadPool,
  }
];

export default ApiMovies;
