import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'; 
  
import classes from './Beers.module.css';

const Beers = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await fetch('/DadBod/beers')
      const jsonBeers = await response.json();
    }

    fetchBeers();
  }, [dispatch])
};

export default Beers;