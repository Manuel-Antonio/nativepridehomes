// src/app/data/services.data.ts
import { Service } from '../models/service.model';

export const SERVICES: Service[] = [
  new Service(
    1,
    'Architectural Design',
    'We offer innovative and personalized designs for each client.',
    'assets/imgs/service1.jpg'
  ),
  new Service(
    2,
    'Housing Construction',
    'We build with the highest standards of quality and safety.',
    'assets/imgs/service2.jpg'
  ),
  new Service(
    3,
    'Remodeling',
    'We transform your current space into something new and spectacular.',
    'assets/imgs/service3.jpg'
  )
];
