import { Box, Typography } from "components";
import { AppLayout } from "modules";
import { authApi, authGetRunningQueriesThunk } from "state/slices/auth";
import { wrapper } from "state";
import {
  productApi,
  productGetRunningQueriesThunk,
} from "state/slices/product";
import { useProductState } from "hooks/redux/useProductState";
import { useRouter } from "next/router";

export default function Home() {
  const {
    state: { currentPageProduct },
  } = useProductState();
  const router = useRouter();

  return (
    <AppLayout>
      <Box maxWidth={"80%"} style={{ margin: "8em auto 0" }}>
        <Box className="title">
          <Typography variant="h1">{currentPageProduct?.name}</Typography>
        </Box>
        <Box className="description">
          <Typography variant="subtitle1">
            {currentPageProduct?.description}
          </Typography>
        </Box>
      </Box>
    </AppLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const product = context!.req!.url!.split("/")?.pop()?.split("slug=")?.pop();

    let authPromise;

    if (context.req.cookies?.token) {
      authPromise = store.dispatch(authApi.endpoints.me.initiate());
    }

    const productPromise = store.dispatch(
      productApi.endpoints.getProductBySlug.initiate({
        slug: product!,
      })
    );

    const promises = [
      productPromise,
      authGetRunningQueriesThunk(),
      productGetRunningQueriesThunk(),
    ];

    if (authPromise) {
      promises.unshift(authPromise);
    }

    const finished = await Promise.allSettled(promises);

    return {
      props: {},
    };
  }
);
