import './catalog.scss'
import { Header } from '../../widgets/header/index.ts';
import { Footer } from '../../widgets/footer/index.ts';

import React, { useState, useEffect } from 'react';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const Catalog: React.FC = () => {
  

  return (
  <>
  <Header />

  <Footer />
  </>
  )
}
