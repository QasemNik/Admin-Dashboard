import Router from './Router';
import MenuBar from './components/topBar/MenuBar';
import SideBar from './components/Sidebar/SideBar';
import "./App.css";
import DarkMode from '../modules/DarkMode';

function App() {
  return (
    <DarkMode>
      {({ toggleTheme, isDarkMode }) => ( // ارسال تابع و وضعیت به کامپوننت‌های فرزند
        <>
          <MenuBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <div className="container">
            <SideBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Router />
          </div>
        </>
      )}
    </DarkMode>
  );
}

export default App;
