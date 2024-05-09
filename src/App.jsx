import React, { Suspense, lazy } from "react";
import styles from "./style";
import * as Components from "./components";

const LazyComponents = {};
Object.keys(Components).forEach((key) => {
  LazyComponents[key] = lazy(() => import(`./components/${key}`));
});

const App = () => (
  <>
    <div className="w-full overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense fallback={<div>Loading Navbar...</div>}>
            <LazyComponents.Navbar />
          </Suspense>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense fallback={<div>Loading Hero...</div>}>
            <LazyComponents.Hero />
          </Suspense>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Suspense fallback={<div>Loading content...</div>}>
            <LazyComponents.Stats />
            <LazyComponents.Business />
            <LazyComponents.Billing />
            <LazyComponents.CardDeal />
            <LazyComponents.Testimonials />
            <LazyComponents.Clients />
            <LazyComponents.CTA />
            <LazyComponents.Footer />
          </Suspense>
        </div>
      </div>
    </div>
  </>
);

export default App;
