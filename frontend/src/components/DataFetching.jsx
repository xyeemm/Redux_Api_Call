
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData, selectLoading, selectError } from '../redux/apiSlice';

const DataFetchingComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchData('https://jsonplaceholder.typicode.com/posts')); // Example API
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;

