// Root layout wrapper
import { PageLoader } from './components/PageLoader';
import { PersistentLayout } from './components/PersistentLayout';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <>
      {/* 1. Cinematic Branded Page Loader */}
      <PageLoader />

      {/* 2. Persistent Layout and Chrome Wrapper with Animated Route transitions */}
      <PersistentLayout>
        <AnimatedRoutes />
      </PersistentLayout>
    </>
  );
}

export default App;
