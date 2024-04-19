import { useLoaderData } from 'react-router-dom';

import Banner from './Banner/Banner';

import Pricing from './Pricing/Pricing';
import Services from './Services/Services';
import Whatwedo from './Map';


const Home = () => {
  const servicesApi = useLoaderData();
  return (
    <>
      <Banner />
      <Services servicesApi={servicesApi} />
      <Pricing />
      <Whatwedo></Whatwedo>

    </>
  );
};

export default Home;
