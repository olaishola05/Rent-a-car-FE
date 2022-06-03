/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  FaTwitter, FaFacebookF, FaPinterestP,
} from 'react-icons/fa';
import { Card } from '@mui/material';
import styles from './Home.module.css';

function CarSlides() {
  const items = [
    {
      id: 1,
      model: 'Rolls Royce Ghost Phantom',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-rolls-royce-ghost-black-badge-106-16354gg-1644077188.jpeg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 2,
      model: 'Lucid Air',
      imageUrl: 'https://media.wired.com/photos/5fadcda78aac28e278bc2388/3:2/w_1280%2Cc_limit/Business-Lucid-Air-AG6I6358.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 3,
      model: 'Rolls Royce Phantom',
      imageUrl: 'https://robbreport.com/wp-content/uploads/2020/09/victor01.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 4,
      model: 'Rolls Royce Phantom',
      imageUrl: 'https://i.pinimg.com/originals/db/2c/6c/db2c6cba9f57d327eb721bd4f0734e11.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 5,
      model: 'Rolls C20',
      imageUrl: 'https://cdn.luxe.digital/media/2021/04/10100733/best-luxury-car-brands-luxe-digital%402x.jpg',
      description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 6,
      model: 'Bugatti Veyron',
      imageUrl: 'https://cdn.ceoworld.biz/wp-content/uploads/2019/06/La-Voiture-Noire-BUGATTI.jpg',
      description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 7,
      model: 'Lincoln Navigator',
      imageUrl: 'https://www.motortrend.com/uploads/sites/11/2019/04/2018-Lincoln-Navigator-EL.jpg',
      description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 8,
      model: 'Lincoln Mark VII',
      imageUrl: 'https://robbreport.com/wp-content/uploads/2020/09/victor01.jpg',
      description: 'lorem ipsum dolor sit amet',
      icons: ['facebook', 'twitter', 'instagram'],
    },
    {
      id: 9,
      model: 'Lincoln Mark VII',
      imageUrl: 'https://i.pinimg.com/originals/db/2c/6c/db2c6cba9f57d327eb721bd4f0734e11.jpg',
      description: 'lorem ipsum dolor sit amet',
    },
  ];

  const sliderItems = items.length > 3 ? 3 : items.length;
  const itemLists = [];

  for (let i = 0; i < items.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      itemLists.push(
        <Card raised className={styles.banners} key={i.toString()}>
          <div className={styles.BannerGrid}>
            {items.slice(i, i + sliderItems).map((da) => <Item key={da.id} item={da} />)}
          </div>
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
    <div className={styles.slideItem}>
      <div className={styles.imageContainer}>
        <img src={props.item.imageUrl} alt="car" />
      </div>

      <h4>{props.item.model}</h4>
      <p>{props.item.description}</p>

      <div className={styles.icons}>
        <FaTwitter className={styles.icons} />
        <FaFacebookF className={styles.icons} />
        <FaPinterestP className={styles.icons} />
      </div>
    </div>
  );
}

export default CarSlides;
