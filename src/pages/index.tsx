import { Banner } from "components/Banner";
import { AppLayout } from "modules/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Banner variant="hero" direction="to top" />
    </AppLayout>
  );
}
