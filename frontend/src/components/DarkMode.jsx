
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
const DarkMode = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#333' : '#FFF',
        color: isDarkMode ? '#FFF' : '#000',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button style={{backgroundColor: isDarkMode? '#333' :'#FFF'}} onClick={() => dispatch(toggleTheme())}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
export default DarkMode