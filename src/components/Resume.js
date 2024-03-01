
import ResumeImg from'../assets/resumee.png';

export default function Resume(){
      const config ={
         link:'https://www.overleaf.com/gallery/tagged/cv'

      }


    return <section id="resume" className='flex flex-col md:flex-row bg-primary px-5'>
<div className='md:w-1/2 py-5 flex justify-center md:justify-end'> 
    <img className="h-[400px] w-[600px]"src={ResumeImg}/>
</div>
<div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
    <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold'>Resume</h1>
    <p className='pb-5'>You can view my resume   <a target="_blank" className="btn"href={config.link}>  Download</a></p>
    </div>
</div>

    </section>
}