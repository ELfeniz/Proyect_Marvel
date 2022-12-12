import '@/assets/styles/main.scss';

import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import Experiencia_u from '@/modules/core/components/molecules/Experiencia_u';
import AppRoutes from 'src/routes';

const HomePage = () => {
  return (
    <>
    <div className="main">
      <NavMenu />
      <AppRoutes />
      <Experiencia_u />
      <MainFooter />
    </div>
    </>
  );
};

export default HomePage;
