import { Banner, Grid, Box, ProductCard } from "components";
import { AppLayout } from "modules";
import { authApi, authGetRunningQueriesThunk } from "state/slices/auth";
import { wrapper } from "state";
import {
  productApi,
  productGetRunningQueriesThunk,
} from "state/slices/product";
import { useProductState } from "hooks/redux/useProductState";

export default function Home() {
  const {
    state: { products },
  } = useProductState();

  return (
    <AppLayout>
      {/* <Banner variant="hero" direction="to top" /> */}
      <Box maxWidth={"80%"} style={{ margin: "0 auto" }}>
        <Grid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
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
