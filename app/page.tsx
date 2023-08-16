import React from 'react';
import css from './homePage.module.scss';
import Stepper from '@/components/home/Stepper/Stepper';

export default function HomePage() {

  return (
    <div className={`${css.homePage} page`}>
      <Stepper />
    </div>
  )
}
