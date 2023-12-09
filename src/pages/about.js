import React from 'react';
import useAppState from '@/useHooks/useAppState';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatDetails from '@/components/CatDetails';
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.css";
import Line from "@/components/Line";

export default function Favorites() {
  const appState = useAppState();

  return (
    <>
      <Grid columns={1}>
      <Hero heroImage="/dog.jpg" height="400px" header="About" />
        <Grid.Column>
        <Header as='h1'>Learn More!</Header>
        </Grid.Column>
        <Grid.Column>
          <Button content='Learn More' color='orange' icon='sync'/>
        </Grid.Column>
        <Grid.Row columns='5'>
        </Grid.Row>
      </Grid>
      <Line></Line>
      <h1 className={styles.iupuiFont}>Welcome to the about page!</h1>
    <p className={styles.otherFont}>This is the page where you can learn more about this website.</p>
    <p className={styles.otherFont}>Be sure to press the button above to learn more!</p>
    </>
  );
}