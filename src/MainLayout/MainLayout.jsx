import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
