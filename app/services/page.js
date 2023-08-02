// pages/services.js
"use client"
import Head from 'next/head';
import { useState } from 'react';
import servicesData from './serviceData.json';
import './page.css'
import { Footer, Header } from '@/public/components';
const ServicesPage = () => {
  const [services] = useState(servicesData.services);

  return (
    <div>
      <Head>
        <title>Amazon.in Services</title>
      </Head>
      <Header/>
      <h1 className={`heading`}>Amazon.in Services</h1>
      <div className={`servicesContainer`}>
        {services.map((service) => (
          <div key={service.id} className={`serviceCard`}>
            <div className={`serviceIconContainer`}>
              <img src={service.iconUrl} alt={service.title} className={`serviceIcon`} />
            </div>
            <h3 className={`serviceTitle`}>{service.title}</h3>
            <p className={`serviceDescription`}>{service.description}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ServicesPage;
