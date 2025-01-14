// import Image from 'next/image'
import { Image } from "@nextui-org/image";

const Project = () => {

    return (
        <div className='max-w grid grid-cols-1 gap-4'>

            {/* add target='_blank' */}

            <a href="/#">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-orange-100'>

                    <div className='min-w-[71px] bg-orange-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/pytorch.svg' alt='art' width={55} height={55} radius="none"/>
                    </div>

                    <div className='flex flex-col items-start justify-start p-2'>
                        <h1 className='text-lg font-medium transition group-hover:text-orange-600'>Deep Learning Library</h1>
                        <p>A deep learning library built from scratch with GPU-accelerated operations, automatic differentiation, optimizers, etc. as well as  implementations of transformers, CNNs, and RNNs.</p>
                    </div>
                </div>
            </a>

            <a href="/#">
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-lime-100'>

                    <div className='min-w-[71px] bg-lime-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/snake.svg' alt='art' width={55} height={55} radius="none"/>
                    </div>

                    <div className='flex flex-col items-start justify-start p-2'>
                        <h1 className='text-lg font-medium transition group-hover:text-lime-600'>ViT SSM Distillation</h1>
                        <p>Distilled vision transformers (ViT) to state space models (SSMs) for image classification. Inspired by MOHAWK distillation framework.</p>
                    </div>
                </div>
            </a>

            {/* <a href="https://colab.research.google.com/drive/1PZ8NAikKV0fGU6x2jqy4FEc-G6YOuppQ?usp=sharing" target='_blank'>
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-amber-100'>

                    <div className='min-w-[71px] bg-amber-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/canvas.svg' alt='art' width={55} height={55} />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2'>
                        <h1 className='text-lg font-medium transition group-hover:text-amber-600'>Diffusion</h1>
                        <p>PyTorch implementation of the diffusion model.</p>
                    </div>
                </div>
            </a>

            <a href="https://github.com/willisguo14/writter" target='_blank'>
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-blue-100'>

                    <div className='min-w-[71px] bg-blue-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/twitter.svg' alt='twitter' width={55} height={55} />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2'>
                        <h1 className='text-lg font-medium transition group-hover:text-blue-800'>Writter</h1>
                        <p>Full-stack Twitter application clone using Next.js.</p>
                    </div>
                </div>
            </a>

            <a href="https://colab.research.google.com/drive/1Xm_l22pLYK8kU259MkQHgUJffwo0Y69-?usp=sharing" target='_blank'>
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-cyan-100'>
                    <div className='min-w-[71px] bg-cyan-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/translate.svg' alt='language' width={55} height={55} />
                    </div>
                    <div className='flex flex-col items-start justify-start p-2'>
                        <h1 className='text-lg font-medium transition group-hover:text-cyan-800'>Transformer</h1>
                        <p>PyTorch implementation of the transformer architecture.</p>
                    </div>
                </div>
            </a>

            <a href="https://colab.research.google.com/drive/12T1rePxPBkFASEKLTBMirS98g9w0a8xr?usp=sharing" target='_blank'>
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-orange-100'>

                    <div className='min-w-[71px] bg-orange-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/stackoverflow.svg' alt='stackoverflow' width={50} height={50} />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2'>
                        <h1 className='text-lg font-medium transition group-hover:text-orange-500'>Stack Overflow LLM</h1>
                        <p>Fine-tuned LLMs for duplicate question detection on Stack Overflow.</p>
                    </div>
                </div>
            </a>

            <a href="https://github.com/willisguo14/rl-flappybird" target='_blank'>
                <div className='group flex flex-row items-stretch justify-start gap-5 px-2 py-1 rounded-xl cursor-pointer transition hover:bg-pink-100'>

                    <div className='min-w-[71px] bg-pink-100 p-2 rounded-lg flex items-center justify-center aspect-square'>
                        <Image src='/bird.svg' alt='bird' width={50} height={50} />
                    </div>

                    <div className='flex flex-col items-start justify-start p-2'>
                        <h1 className='text-lg font-medium transition group-hover:text-pink-500'>Flappy Bird RL</h1>
                        <p>Trained reinforcement learning agent to play Flappy Bird.</p>
                    </div>
                </div>
            </a> */}

        </div>
    );
}

export default Project;