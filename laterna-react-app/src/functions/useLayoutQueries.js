import { useMediaQuery } from 'react-responsive';

const useLayoutQueries = () => ({
  isTabletOrMobile: useMediaQuery({ query: '(max-width: 1023px)' }),
  isDesktopOrLaptop: useMediaQuery({ query: '(min-width: 1024px)' }),
});



export default useLayoutQueries;

