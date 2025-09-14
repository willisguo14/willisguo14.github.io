// import Image from 'next/image'
import { Image } from "@nextui-org/image";

const Experience = () => {

    return (
        <div className='max-w grid grid-cols-1 gap-6'>

            <a href="/Willis_Guo_Resume.pdf" target="_blank">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl transition hover:bg-indigo-100'>
                    {/* image */}
                    <div className='min-w-[71px] relative bg-indigo-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/scale.png' alt='CMU MLD' width={50} height={50} radius="none" />
                    </div>
                    {/* description */}
                    <div className='flex flex-col items-start justify-start p-2'>

                        <h1 className='text-lg font-medium transition group-hover:text-indigo-600'>
                            ML Research Engineer Intern @ Scale AI
                        </h1>

                        <div className='flex flex-row items-start gap-2 text-slate-500 mb-2 text-sm'>
                            <p>May 2025 - Present</p>
                            <p className=''>|</p>
                            <p>San Francisco, CA</p>
                        </div>

                        <p>Systems optimizations for distributed online RL training of LLMs / Test-time scaling laws for online RL.</p>

                    </div>
                </div>
            </a>

            <a href="/Willis_Guo_Resume.pdf" target="_blank">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl transition hover:bg-red-100'>
                    {/* image */}
                    <div className='min-w-[71px] relative bg-red-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/mld.png' alt='CMU MLD' width={50} height={50} radius="none" />
                    </div>
                    {/* description */}
                    <div className='flex flex-col items-start justify-start p-2'>

                        <h1 className='text-lg font-medium transition group-hover:text-red-600'>
                            ML Research Intern, Multimodal @ Carnegie Mellon University
                        </h1>

                        <div className='flex flex-row items-start gap-2 text-slate-500 mb-2 text-sm'>
                            <p>Sep. 2024 - May 2024</p>
                            <p className=''>|</p>
                            <p>Pittsburgh, PA</p>
                        </div>


                        <p>Post-training VLMs for tool-use and multimodal CoT reasoning / Inference-time algorithms for long-form video reasoning.</p>

                    </div>
                </div>
            </a>



            {/* JOB NEW v1*/}
            <a href="/Willis_Guo_Resume.pdf" target="_blank">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl transition hover:bg-orange-100'>
                    {/* image */}
                    <div className='min-w-[71px] relative bg-orange-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/aws.svg' alt='language' width={50} height={50} radius="none" />
                    </div>
                    {/* description */}
                    <div className='flex flex-col items-start justify-start p-2'>

                        <h1 className='text-lg font-medium transition group-hover:text-orange-600'>
                            SDE Intern @ Amazon Web Services
                        </h1>

                        <div className='flex flex-row items-start gap-2 text-slate-500 mb-2 text-sm'>
                            <p>Jul. 2024 - Aug. 2024</p>
                            <p className=''>|</p>
                            <p>Vancouver, CAN</p>
                        </div>


                        <p>ML for anomaly detection for denial-of-service attacks.</p>
                    </div>
                </div>
            </a>


            {/* JOB NEW v1*/}
            <a href="/Willis_Guo_Resume.pdf" target="_blank">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl transition hover:bg-sky-100'>
                    {/* image */}
                    <div className='min-w-[71px] relative bg-sky-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/uoft-leaf.png' alt='language' width={50} height={50} radius="none" />
                    </div>
                    {/* description */}
                    <div className='flex flex-col items-start justify-start p-2'>

                        <h1 className='text-lg font-medium transition group-hover:text-sky-600'>Research Intern, LLMs @ University of Toronto</h1>
                        {/* <p className="text-slate-500 italic mb-2">Sep. 23' - Apr. 24'</p> */}
                        <div className='flex flex-row items-start gap-2 text-slate-500 mb-2 text-sm'>
                            <p>Sep. 2023 - Apr. 2024</p>
                            <p className=''>|</p>
                            <p>Toronto, CAN</p>
                        </div>
                        <p>Inference-time search algorithms for LLM reasoning. LLMs for reasoning over knowledge graphs.</p>
                    </div>
                </div>
            </a>





        </div>
    );

}

export default Experience

