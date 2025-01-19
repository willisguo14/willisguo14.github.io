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
                <p className='leading-7'>
                    I’m a first-year Master’s in Machine Learning student at Carnegie Mellon University, where I am advised by 
                    <Link href="https://www.cs.cmu.edu/~rsalakhu/" underline="hover" isExternal>Ruslan Salakhutdinov</Link>. My current research interest is improving vision-language models as multimodal dialogue agents. 
                </p>
                <p className="leading-7">
                    Previously, I completed my BASc in Machine Intelligence at the University of Toronto, where I worked on neuro-symbolic reasoning with LLMs and LLM-augmented knowledge graph question answering (KGQA), advised by <Link href="https://d3m.mie.utoronto.ca/" underline="hover" isExternal>Scott Sanner</Link>.
                </p>
            </div >
        </div >
    );
}

export default About;

