// import Image from 'next/image'
import { Image } from "@nextui-org/image";

const Research = () => {

    return (
        <div className='max-w grid grid-cols-1 gap-4'>

            {/* <div className='px-2'>* denotes equal contribution</div> */}

            <a>
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-red-100'>
                    <div className='min-w-[71px] bg-red-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/video.svg' alt='art' width={55} height={55} radius="none" />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-red-700'>
                            <div className='min-w-[18px] relative flex items-center justify-center aspect-square'>
                                <Image src='/send.svg' alt='language' width={17} height={17} radius="none" />
                            </div>
                            <p className='text-sm font-medium'>ICCV 2025 Workshop</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-red-600'>
                            Active Perception for Efficient Inference-Time Long-Form Video Understanding in Vision-Language Models
                        </h1>
                        <p>Martin Ma, <span className='font-semibold'>Willis Guo</span>, Aditya Agrawal, Ankit Gupta, Paul Liang, Russ Salakhutdinov, Louis-Philippe Morency</p>
                    </div>
                </div>
            </a>

            <a href="https://dl.acm.org/doi/pdf/10.1145/3726302.3730291" target="_blank">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-pink-100'>
                    <div className='min-w-[71px] bg-pink-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/cocktail2.svg' alt='art' width={55} height={55} radius="none" />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-pink-700'>
                            <div className='min-w-[18px] relative flex items-center justify-center aspect-square'>
                                <Image src='/send.svg' alt='language' width={17} height={17} radius="none" />
                            </div>
                            <p className='text-sm font-medium'>SIGIR 2025</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-pink-600'>
                            CoLoTa: A Dataset for Entity-based Commonsense Reasoning over Long-Tail Knowledge
                        </h1>
                        <p>Armin Toroghi, <span className='font-semibold'>Willis Guo</span>, Scott Sanner</p>
                    </div>
                </div>
            </a>

            <a href="https://aclanthology.org/2024.emnlp-main.379.pdf" target="_blank" rel="noreferrer">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-blue-100'>
                    <div className='min-w-[71px] bg-blue-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/logic.svg' alt='art' width={55} height={55} radius="none" />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-blue-700'>
                            <div className='min-w-[18px] relative flex items-center justify-center aspect-square'>
                                <Image src='/send.svg' alt='language' width={17} height={17} radius="none" />
                            </div>
                            <p className='text-sm font-medium'>EMNLP 2024</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-blue-600'>
                            Verifiable, Debuggable, and Repairable Commonsense Logical Reasoning via LLM-based Theory Resolution
                        </h1>
                        <p>Armin Toroghi, <span className='font-semibold'>Willis Guo</span>, Ali Pesaranghader, Scott Sanner</p>
                    </div>
                </div>
            </a>

            <a href="https://aclanthology.org/2024.emnlp-main.378.pdf" target="_blank" rel="noreferrer">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-lime-100'>
                    <div className='min-w-[71px] bg-lime-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/qa.svg' alt='art' width={55} height={55} radius="none" />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2 gap-1'>
                        <div className='flex flex-row items-center justify-start gap-1 rounded-md bg-transparent pl-1.5 pr-2 py-0.5 border border-slate-200 transition group-hover:border-lime-700'>
                            <div className='min-w-[18px] relative flex items-center justify-center aspect-square'>
                                <Image src='/send.svg' alt='language' width={17} height={17} radius="none" />
                            </div>
                            <p className='text-sm font-medium'>EMNLP 2024</p>
                        </div>

                        <h1 className='text-lg font-medium transition group-hover:text-lime-600'>
                            Right for Right Reasons: Large Language Models for Verifiable Commonsense Knowledge Graph Question Answering
                        </h1>
                        <p>Armin Toroghi, <span className='font-semibold'>Willis Guo</span>, Mohammad Mahdi Abdollah Pour, Scott Sanner</p>
                    </div>
                </div>
            </a>

        </div>
    );
}

export default Research;