import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./others/Header'));
const Content = lazy(() => import('./others/Content'));
const Sidebar = lazy(() => import('./others/Sidebar'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Content />
        </div>
      </Suspense>
    </div>
  );
}

export default App;