import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const Info = () => {
    return (
        <div className="flex flex-row items-center justify-start gap-4">
            {/* resume */}
            <a href="/Willis_Guo_Resume.pdf" target="_blank">
                <div className="group flex flex-row items-center justify-start gap-2 py-2 px-2 cursor-pointer rounded-lg border border-blue-600 bg-blue-600 hover:bg-blue-800 hover:border-blue-800 transition">
                    <IoDocumentText size={22} className="text-white" />
                    <p className="text-white">Resume</p>
                </div>
            </a>



            {/* small screens */}
            <div className='w-min mx-2 px-2 py-1 flex flex-row items-center justify-start gap-1 rounded-lg border border-slate-200'>
                <a href="https://www.linkedin.com/in/willisguo/" target="_blank" rel="noreferrer">
                    <div className='group flex items-center justify-center p-[7px] rounded-lg cursor-pointer transition hover:bg-slate-100'>
                        <FaLinkedin size={22} className='group-hover:text-sky-600' />
                    </div>
                </a>

                <a href="https://github.com/willisguo14" target="_blank" rel="noreferrer">
                    <div className='group flex items-center justify-center p-[7px] rounded-lg cursor-pointer transition hover:bg-slate-100'>
                        <FaGithub size={22} className=' group-hover:text-slate-700' />
                    </div>
                </a>

                <a href="mailto:gwillis.guo@mail.utoronto.ca" target="_blank" rel="noreferrer">
                    <div className='group flex items-center justify-center p-[7px] rounded-lg cursor-pointer transition hover:bg-slate-100'>
                        <MdEmail size={22} className=' group-hover:text-pink-600' />
                    </div>
                </a>
            </div>

        </div>
    );
}

export default Info;