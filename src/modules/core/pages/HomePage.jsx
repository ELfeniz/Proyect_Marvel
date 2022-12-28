import '@/assets/styles/main.scss';

import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import Experiencia_u from '@/modules/core/components/molecules/Experiencia_u';
import { CharacterPage } from 'src/modules/marvel-characters/pages/CharactersPage';

const HomePage = () => {
  return (
    <>
    <div className="main">
      <NavMenu />
      <CharacterPage />
      <Experiencia_u />
      <MainFooter />
    </div>
    </>
  );
};

export default HomePage;
