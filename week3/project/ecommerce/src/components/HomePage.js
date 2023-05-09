import React from 'react';
import { Header } from './Header';
import { Categories } from './Categories';
import { Products } from './Products';

export const HomePage = () => {
  return (
    <>
      <Header title={'Products'} />
      <Categories />
      <Products />
    </>
  );
};