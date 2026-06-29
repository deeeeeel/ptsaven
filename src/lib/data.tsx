import React from 'react';
import { Building2, Briefcase, CalendarDays, CarFront, LineChart, Shirt } from 'lucide-react';

export const SERVICES = [
  {
    id: 'construction',
    title: 'Construction & Interior',
    icon: <Building2 size={32} strokeWidth={1.5} />,
    description: 'Layanan konstruksi gedung, instalasi listrik, hingga desain interior dan eksterior profesional.'
  },
  {
    id: 'trading',
    title: 'General Trading',
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    description: 'Perdagangan umum berskala nasional untuk berbagai kebutuhan industri dan operasional.'
  },
  {
    id: 'event',
    title: 'Event & MICE',
    icon: <CalendarDays size={32} strokeWidth={1.5} />,
    description: 'Penyelenggaraan acara, MICE (Meeting, Incentive, Convention, Exhibition), dan layanan katering.'
  },
  {
    id: 'rental',
    title: 'Vehicle Rental',
    icon: <CarFront size={32} strokeWidth={1.5} />,
    description: 'Penyediaan armada transportasi mulai dari mobil, truk, hingga bus untuk kebutuhan korporasi.'
  },
  {
    id: 'consulting',
    title: 'Management Consulting',
    icon: <LineChart size={32} strokeWidth={1.5} />,
    description: 'Jasa konsultasi manajemen untuk mengoptimalkan performa dan strategi bisnis klien.'
  },
  {
    id: 'manufacturing',
    title: 'Garment & Convection',
    icon: <Shirt size={32} strokeWidth={1.5} />,
    description: 'Produksi garmen dan konveksi berkualitas tinggi untuk seragam dan kebutuhan tekstil lainnya.'
  }
];
