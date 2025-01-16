// import Image from 'next/image'
import { Image } from "@nextui-org/image";

const Experience = () => {

    return (
        <div className='max-w grid grid-cols-1 gap-6'>

            <a href="/Willis_Guo_Resume.pdf" target="_blank">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl transition hover:bg-red-100'>
                    {/* image */}
                    <div className='min-w-[71px] relative bg-red-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/mld.png' alt='CMU MLD' width={50} height={50} radius="none" />
                    </div>
                    {/* description */}
                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-red-700'>
                            {/* <div className='min-w-[18px] relative flex items-center justify-center aspect-square'>
                                <Image src='/clock.svg' alt='language' fill />
                            </div> */}
                            <p className='text-sm font-medium'>Sep. 24' - Present</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-red-600'>
                            Research Intern, Multimodal ML @ Carnegie Mellon University
                        </h1>



                        <p>Researching vision-language models for long-form video understanding and multimodal dialogue agents.</p>
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
                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-orange-600'>
                            <p className='text-sm font-medium'>Jul. 24' - Aug. 24'</p>
                        </div>
                        <h1 className='text-lg font-medium transition group-hover:text-orange-600'>
                            SDE Intern @ Amazon Web Services
                        </h1>



                        <p>Worked on AWS Anti-DDoS.</p>
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
                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-sky-600'>
                            <p className='text-sm font-medium'>Sep. 23' - Apr. 24'</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-sky-600'>Research Intern, LLMs @ D3M Lab</h1>



                        <p >Researched LLM reasoning and knowledge graph question answering (KGQA).</p>
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
                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-orange-600'>
                            <p className='text-sm font-medium'>Jun. 23' - Aug. 23'</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-orange-600'>
                            SDE Intern @ Amazon Web Services
                        </h1>



                        <p >Worked on AWS Payments.</p>
                    </div>
                </div>
            </a>

            {/* JOB NEW v1*/}
            <a href="/Willis_Guo_Resume.pdf" target="_blank">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl transition hover:bg-blue-100'>
                    {/* image */}
                    <div className='min-w-[71px] relative bg-blue-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/autoronto.png' alt='language' width={50} height={50} radius="none" />
                    </div>
                    {/* description */}
                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-blue-600'>
                            <p className='text-sm font-medium'>Sep. 21' - Apr. 22'</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-blue-600'>ML Engineer @ aUToronto</h1>


                        <p >Trained computer vision models for autonomous driving.</p>
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
                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-sky-600'>
                            <p className='text-sm font-medium'>May 21' - Aug. 21'</p>
                        </div>
                        <h1 className='text-lg font-medium transition group-hover:text-sky-600'>Research Intern, ML for SWE @ FORCOLAB</h1>

                        <p >Researched deep learning models for code vulnerability detection.</p>
                    </div>
                </div>
            </a>
        </div>
    );

}

export default Experience

