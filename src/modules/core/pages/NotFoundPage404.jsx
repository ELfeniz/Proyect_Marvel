import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import Error_404 from '../components/molecules/Error_404';

const NotFoundPage404 = () => {
  return (
    <>
       <NavMenu />
      <Error_404/>
      <MainFooter />
    </>
  );
};

export default NotFoundPage404;
