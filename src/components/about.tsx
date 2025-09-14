// import Image from 'next/image'
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

const About = () => {
    return (
        <div>
            <div className='relative mx-2 mb-5 rounded-full h-[150px] w-[150px] overflow-hidden border-[5px] border-blue-600'>
                <Image src='/willis2.jpeg' alt='Willis' radius="full" />
            </div>

            <div className='mx-2 flex flex-col justify-start items-start gap-3'>
                <h1 className='text-2xl font-medium mb-3'>Hi! I'm Willis</h1>
                <p className="leading-7">
                    I’m a Master’s in <Link href="https://www.ml.cmu.edu/" underline="hover" isExternal className="text-red-600">Machine Learning</Link> student at <Link href="https://www.cmu.edu/" underline="hover" isExternal className="text-red-600">Carnegie Mellon University</Link> and ML Research Engineer Intern at <Link href="https://scale.com/" underline="hover" isExternal className="text-indigo-600">Scale AI</Link> working on ML systems.
                </p>
                <p className="leading-7">
                    At CMU, I’ve been fortunate to be advised by <Link href="https://scholar.google.com/citations?user=ITZ1e7MAAAAJ&hl=en" underline="hover" isExternal className="text-sky-500">Ruslan Salakhutdinov</Link> working on VLM reasoning. Prior to CMU, I studied <Link href="https://engsci.utoronto.ca/program/majors/machine-intelligence/" underline="hover" isExternal className="text-blue-600">Machine Intelligence</Link> at the <Link href="https://www.utoronto.ca/" underline="hover" isExternal className="text-blue-600">University of Toronto</Link>, where I was advised by <Link href="https://scholar.google.com/citations?user=kB8UPNIAAAAJ&hl=en" underline="hover" isExternal className="text-sky-500">Scott Sanner</Link> working on LLM logical reasoning and knowledge-graph-augmented LLMs.
                </p>
            </div >
        </div >
    );
}

export default About;

