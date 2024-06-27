import { Project } from '../models/project.model';
import { categories } from './categories.data';

export const projects: Project[] = [
  new Project('Villa Aurora', 'Lujo contemporáneo', 'assets/imgs/project1.jpg', categories[0]),
  new Project('Casa Sol', 'Diseño sostenible', 'assets/imgs/project2.jpg', categories[1]),
  new Project('Hogar Serene', 'Confort elegante', 'assets/imgs/project3.jpg', categories[2]),
  new Project('Residencia Verde', 'Eco-amigable', 'assets/imgs/project4.jpg', categories[3]),
  new Project('Palacio Oasis', 'Elegancia exótica', 'assets/imgs/project5.jpg', categories[4]),
  new Project('Casa Bella', 'Belleza moderna', 'assets/imgs/project6.jpg', categories[5]),
  new Project('Villa Harmony', 'Armonía perfecta', 'assets/imgs/project7.jpg', categories[6]),
  new Project('Casa Luna', 'Estilo minimalista', 'assets/imgs/project8.jpg', categories[7]),
  new Project('Residencia Azul', 'Innovación costera', 'assets/imgs/project9.jpg', categories[8]),
  new Project('Villa Tranquila', 'Paz y serenidad', 'assets/imgs/project10.jpg', categories[9]),
  new Project('Casa Élite', 'Estilo exclusivo', 'assets/imgs/project11.jpg', categories[0]),
  new Project('Villa Esplendor', 'Majestuosa arquitectura', 'assets/imgs/project12.jpg', categories[0]),
  new Project('Casa Natura', 'Integración natural', 'assets/imgs/project13.jpg', categories[3]),
  new Project('Residencia Cielo', 'Vista panorámica', 'assets/imgs/project14.jpg', categories[8]),
  new Project('Villa Éxito', 'Diseño premium', 'assets/imgs/project15.jpg', categories[0]),
  new Project('Casa Encanto', 'Charme acogedor', 'assets/imgs/project16.jpg', categories[2]),
  new Project('Residencia Sol', 'Luz y calidez', 'assets/imgs/project17.jpg', categories[1]),
  new Project('Villa Paradiso', 'Paraíso terrenal', 'assets/imgs/project18.jpg', categories[4]),
  new Project('Casa Zen', 'Equilibrio y paz', 'assets/imgs/project19.jpg', categories[6]),
  new Project('Residencia Diamante', 'Brillo y lujo', 'assets/imgs/project20.jpg', categories[0])
];
