import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getBookById } from '../services/books';


export function useBookDetail({ id }) {
  const [book, setBook] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
        setLoading(false);
      } catch (e) {
        history.push('/404');
      }
    };
    fetchData();
  }, [id, history]);

  return { book, error, loading };
}
