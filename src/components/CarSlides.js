/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Card, Grid } from '@mui/material';
import styles from './Home.module.css';

function CarSlides() {
  const items = [
    {
      id: 1,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-rolls-royce-ghost-black-badge-106-16354gg-1644077188.jpeg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 2,
      imageUrl: 'https://media.wired.com/photos/5fadcda78aac28e278bc2388/3:2/w_1280%2Cc_limit/Business-Lucid-Air-AG6I6358.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 3,
      imageUrl: 'https://robbreport.com/wp-content/uploads/2020/09/victor01.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 4,
      imageUrl: 'https://i.pinimg.com/originals/db/2c/6c/db2c6cba9f57d327eb721bd4f0734e11.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 5,
      imageUrl: 'https://cdn.luxe.digital/media/2021/04/10100733/best-luxury-car-brands-luxe-digital%402x.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 6,
      imageUrl: 'https://cdn.ceoworld.biz/wp-content/uploads/2019/06/La-Voiture-Noire-BUGATTI.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 7,
      imageUrl: 'https://www.motortrend.com/uploads/sites/11/2019/04/2018-Lincoln-Navigator-EL.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 8,
      imageUrl: 'https://robbreport.com/wp-content/uploads/2020/09/victor01.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 9,
      imageUrl: 'https://i.pinimg.com/originals/db/2c/6c/db2c6cba9f57d327eb721bd4f0734e11.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
  ];

  const sliderItems = items.length > 3 ? 3 : items.length;
  const itemLists = [];

  for (let i = 0; i < items.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      itemLists.push(
        <Card raised className={styles.banners} key={i.toString()}>
          <Grid container spacing={0} className={styles.BannerGrid}>
            {items.slice(i, i + sliderItems).map((da) => <Item key={da.id} item={da} />)}
          </Grid>
        </Card>,
      );
    }
  }

  return (

    <Carousel animation="slide" autoPlay cycleNavigation timeout={3000}>
      { itemLists }
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img src={props.item.imageUrl} alt="car" />
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default CarSlides;
