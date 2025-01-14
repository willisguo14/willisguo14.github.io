import About from "@/components/about";
import Info from "@/components/info";
import Divider from "@/components/divider";
import Research from "@/components/research";
import Experience from "@/components/experience";
import Project from "@/components/project";
import { Tabs, Tab, Spacer } from "@nextui-org/react";

export default function IndexPage() {
  return (
    <main className='mx-auto lg:max-w-4xl px-5 py-10'>

      <About />

      <div className='mx-2 my-10'>
        <Info />
      </div>


      <Divider />

      <Spacer y={5} />

      <Tabs aria-label="tabs" variant="underlined" size="lg" classNames={{ tabList: "p-0" }}>
        <Tab key="publications" title="Publications">
          {/* <Header header='Publications' /> */}
          <Spacer y={10} />
          <Research />
        </Tab>
        <Tab key="projects" title="Projects">
          {/* <Header header='Projects' /> */}
          <Spacer y={10} />
          <Project />
        </Tab>
        <Tab key="work" title="Work">
          {/* <Header header='Work' /> */}
          <Spacer y={10} />
          <Experience />
        </Tab>
      </Tabs>
      {/* <Divider />
        <div className='flex items-center justify-center my-10'>
          <Info />
        </div> */}

    </main>
  );
}
