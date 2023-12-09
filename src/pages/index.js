import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatImage from '@/components/CatImage';
import useAppState from '@/useHooks/useAppState';
import Link from "next/link"
import Hero from "@/components/Hero";
import Line from "@/components/Line";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const appState = useAppState();

  console.log(appState);

  function getCatImages() {
    fetch(`https://api.thedogapi.com/v1/images/search?mime_types=jpg,png&format=json&has_breeds=true&order=RANDOM&limit=10`)
      .then((r) => r.json())
      .then((r) => {
        appState.updateAppState({ catImages: r });
      })
      .catch((e) => {
        console.warn(e);
      });
  }

  function saveCatImage(selectedCat) {
    appState.updateAppState({ favoriteCats: appState.favoriteCats.concat(selectedCat) });
  }

  return (
    <>
      <Grid columns='1'>
      <Hero heroImage="/dog.jpg" height="400px" header="Dog Randomizer" />
        <Grid.Column>
        <Line></Line>
          <br></br>
          <Header as='h1'>Random Dogs</Header>
        </Grid.Column>
        <Grid.Column>
          <Button content='Reload Dogs' icon='sync' color='blue' onClick={getCatImages} />
        </Grid.Column>
        <Grid.Row columns='5'>
          {appState.catImages.map((catImage) => {
            return <CatImage key={catImage.id} src={catImage.url} onClick={() => saveCatImage(catImage)}></CatImage>;
          })}
        </Grid.Row>
      </Grid>
      <br></br>
      <Line></Line>
      <h1 className={styles.iupuiFont}>Welcome to the official dog randomizer!</h1>
    <p className={styles.otherFont}>This is the home page for the dog randomizer official site.</p>
    <p className={styles.otherFont}>Be sure to press the button above to randomly generate dog pics.</p>
    </>
  );
}
