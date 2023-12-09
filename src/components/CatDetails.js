import React from 'react';
import { Popup, Button, Image, Grid } from 'semantic-ui-react';

export default function CatDetails({ src, children, onClick }) {
  return (
    <>
      <Grid.Column>
        <Popup
          trigger={<Image src={src} />}
          on='click'
          content={<Button color='green' icon='heart' content={children || 'Details'} onClick={onClick} />}
        />
      </Grid.Column>
    </>
  );
}