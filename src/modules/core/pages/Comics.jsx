import '@/assets/styles/main.scss';

import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';


const Comics = () => {
  return (
    <>
    <div className="main">
      <NavMenu />

      <MainFooter />
    </div>
    </>
  );
};

export default Comics;