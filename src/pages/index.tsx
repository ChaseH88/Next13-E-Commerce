import { Banner } from "components";
import { AppLayout } from "modules";

export default function Home() {
  return (
    <AppLayout>
      <Banner variant="hero" direction="to top" />
    </AppLayout>
  );
}
