import { useEffect } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import NavbarAP from './projects/animalpara/components/navbar/navbarAP';
import "./App.css";
import routes from './routes';
import RouteAP from './routes/routesAP'

function App() {
  return (
    <AppContent />
  );
}

function AppContent() {
  const location = useLocation();
  const currentRoute = routes.find(route => route?.path && matchPath(route.path, location.pathname));

  useEffect(() => {
    if (currentRoute && currentRoute.title) {
      document.title = currentRoute.title;
    } else {
      document.title = "My Portfolio";
    }
  }, [location, currentRoute]);

  function PageWrapper({ children, title }) {
    return (
      <>
        {title ? (
          <div className='title col-12 bg-dark text-center text-white p-3'>
            <h2>{title}</h2>
          </div>
        ) : null}
        {children}
      </>
    );
  }
  return (
    <>
      <div className='maincontainer'>
        <Navbar />
        <main>
          <Routes>
            {routes.map(({ path, element: Component, title, h2Title }) => (
              <Route key={path} path={path} element={
                <PageWrapper title={h2Title ? title : null}>
                  <Component />
                </PageWrapper>} />
            ))}
            <Route path="/animalpara/*" element={<RouteAP />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;