import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Card from "../components/Card";
export async function getStaticProps() {

  const maxPokemon = 151
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemon}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })
  return {
    props: {
      pokemon: data.results
    }
  }
}
export default function Home({pokemon}) {
  return (
    <>
      <div className={styles.title_container}>
      <h1 className={styles.title}>Poke<span>Next</span></h1>
      <Image src="/images/pokeball.png" width="50" height="50" alt="PokeNext"/>
      </div>
    <div className={styles.pokemon_container}>
      {pokemon.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
    </>
  );
}
