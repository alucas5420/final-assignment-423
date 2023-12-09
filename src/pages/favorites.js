import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatDetails from '@/components/CatDetails';
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.css";
import Line from "@/components/Line";

export default function Favorites() {
  const appState = useAppState();

  function changeName() {
    const titles = ['Dog', 'Cat', 'Fish'];
    const randomTitleIndex = Math.floor(Math.random() * titles.length);

    appState.updateAppState({ user: `Adam the ${titles[randomTitleIndex]} Guy` });
  }

  return (
    <>
      <Grid columns={1}>
      <Hero heroImage="/dog.jpg" height="400px" header="Favorites" />
        <Grid.Column>
        <Header as='h1'>{appState.user}'s Favorites</Header>
        </Grid.Column>
        <Grid.Column>
          <Button content='Change Name' color='purple' icon='sync' onClick={changeName} />
        </Grid.Column>
        <Grid.Row columns='5'>
          {appState.favoriteCats.map((cat) => {
            return <CatDetails key={cat.id} src={cat.url} />;
          })}
        </Grid.Row>
      </Grid>
      <br></br>
      <Line></Line>
      <h1 className={styles.iupuiFont}>Welcome to the favorites page!</h1>
    <p className={styles.otherFont}>This is the page where favorited pictures are stored.</p>
    <p className={styles.otherFont}>Be sure to press the button above to randomly change the name.</p>
    </>
  );
}