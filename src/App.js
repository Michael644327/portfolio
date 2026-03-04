import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
// import { Routes, Route } from 'react-router-dom';

// import LayoutRoute from './components/LayoutRoute';
import "./App.css";
// import routes from './routes/routes';
// import RouteAP from './routes/routesAP'

function App() {
  return (
    <>
    
      <RouterProvider router={router} />
      {/* <div className='maincontainer'>
        <main>
          <Routes>
            {routes.map(({ path, element: Component, title, h2Title }) => (
              <Route key={path} path={path} element={
                <LayoutRoute title={title} showH2={h2Title}>
                  <Component />
                </LayoutRoute>} />
            ))}

            <Route path="/animalpara/*" element={<RouteAP />} />
          </Routes>
        </main>
      </div> */}
    </>
  );
}

export default App;