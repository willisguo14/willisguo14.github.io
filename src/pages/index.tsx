import About from "@/components/about";
import Info from "@/components/info";
import Divider from "@/components/divider";
import Research from "@/components/research";
import Experience from "@/components/experience";
import Project from "@/components/project";
import { Tabs, Tab, Spacer } from "@nextui-org/react";

export default function IndexPage() {
  return (
    <main className='mx-auto lg:max-w-3xl px-5 py-10'>

      <About />

      <div className='mx-2 my-10'>
        <Info />
      </div>


      <Divider />

      <Spacer y={5} />

      <Tabs aria-label="tabs" variant="underlined" size="lg" classNames={{ tabList: "p-0" }}>
        <Tab key="work" title="Experience">
          {/* <Header header='Work' /> */}
          <Spacer y={10} />
          <Experience />
        </Tab>
        <Tab key="publications" title="Publications">
          {/* <Header header='Publications' /> */}
          <Spacer y={10} />
          <Research />
        </Tab>
      </Tabs>
      {/* <Divider />
        <div className='flex items-center justify-center my-10'>
          <Info />
        </div> */}

    </main>
  );
}
