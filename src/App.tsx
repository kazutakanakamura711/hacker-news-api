import './App.css';
import { HackerNews } from './components/hackerNews';
import { Header } from './components/layouts/Header';
import { MainLayout } from './components/layouts/MainLayout';

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <HackerNews />
      </MainLayout>
    </>
  );
}

export default App;
