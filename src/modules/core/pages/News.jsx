import '@/assets/styles/main.scss';

import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';


const News = () => {
  return (
    <>
    <div className="main">
      <NavMenu />

      <MainFooter />
    </div>
    </>
  );
};

export default News;
