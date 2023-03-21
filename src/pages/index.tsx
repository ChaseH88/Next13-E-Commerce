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
    store.dispatch(authApi.endpoints.me.initiate());
    store.dispatch(productApi.endpoints.getProductFeed.initiate());

    await Promise.all(store.dispatch(authGetRunningQueriesThunk()));
    await Promise.all(store.dispatch(productGetRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
