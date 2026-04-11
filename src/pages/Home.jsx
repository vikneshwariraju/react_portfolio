import HeroImg from '../assets/hero.png'; 
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-10 py-32 bg-slate-950 justify-center items-center min-h-screen gap-10'>
            
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className='md:w-1/2 flex flex-col'
            >
                <h1 className='text-white text-7xl font-bold leading-tight'>
                    Hi, <br /> Im <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500'>Gracy. S</span>
                </h1>
                <p className='text-2xl mt-6 text-slate-400 font-light'>
                    Crafting digital experience as a <span className='text-white font-medium'>Full-stack developer</span>
                </p>

                <div className='flex py-8 gap-6'>
                    <a href='https://github.com/gracysandanarajan' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-indigo-500 text-4xl transition-all duration-300'>
                        <AiOutlineGithub/>
                    </a>
                    <a href='https://linkedin.com/in/gracy-sandanarajan-5807a4363/' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-indigo-500 text-4xl transition-all duration-300'>
                        <AiOutlineLinkedin/>
                    </a>
                    <a href='mailto:gracysandanarajan@gmail.com' className='text-slate-300 hover:text-indigo-500 text-4xl transition-all duration-300'>
                        <AiOutlineMail/>
                    </a>
                </div>

                <motion.a 
                    href="/gracy-resume.pdf" 
                    download
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgb(99, 102, 241)" }}
                    whileTap={{ scale: 0.95 }}
                    className='w-fit flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all'
                >
                    <AiOutlineDownload size={25}/> Download Resume
                </motion.a>
            </motion.div>

            {/* --- Round Image Section --- */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className='md:w-1/3 flex justify-center items-center relative'
            >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Circular Image Container */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative z-10">
                    <img 
                        src={HeroImg} 
                        alt="Developer" 
                        className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500' 
                    />
                </div>
            </motion.div>
        </section>
    )
}