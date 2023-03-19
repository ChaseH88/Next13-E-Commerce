import { GetStaticProps } from "next";
import { Banner } from "components";
import { AppLayout } from "modules";
import { authApi } from "state/slices/auth";
import { RootState, wrapper } from "state";

export default function Home() {
  return (
    <AppLayout>
      <Banner variant="hero" direction="to top" />
    </AppLayout>
  );
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const state = store.getState() as RootState;
    console.clear();
    console.log("getStaticProps", authApi.endpoints.me.initiate);
    store.dispatch(authApi.endpoints.me.initiate());
    return {
      props: {
        // pass data as props
      },
    };
  }
);
