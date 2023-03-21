import { Banner } from "components";
import { AppLayout } from "modules";
import { authApi, authGetRunningQueriesThunk } from "state/slices/auth";
import { wrapper } from "state";
import {
  productApi,
  productGetRunningQueriesThunk,
} from "state/slices/product";

export default function Home() {
  return (
    <AppLayout>
      <Banner variant="hero" direction="to top" />
    </AppLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    let authPromise;

    if (context.req.cookies?.token) {
      authPromise = store.dispatch(authApi.endpoints.me.initiate());
    }

    const productPromise = store.dispatch(
      productApi.endpoints.getProductFeed.initiate()
    );

    const promises = [
      productPromise,
      authGetRunningQueriesThunk(),
      productGetRunningQueriesThunk(),
    ];

    if (authPromise) {
      promises.unshift(authPromise);
    }

    await Promise.allSettled(promises);

    return {
      props: {},
    };
  }
);
