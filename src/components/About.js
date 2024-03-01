
import AboutImg from'../assets/about.png';

export default function About(){
    const config ={
        line1:'Hi, My name is Ramya. I am a Front-end Web Developer. I build beautiful Websites with React.js and Tailwind CSS ,Responsive web design.',
        line2:'I am proficient in Frontend skills like React.js , Javascript , Tailwind CSS , Css3, HTML5 and many more.',
        line3:'I hope to become a full stack Web Developer soon.'

    }

    return <section id="about" className='flex flex-col md:flex-row bg-primary px-5'>
<div className='md:w-1/2 py-10'> 
    <img src={AboutImg}/>
</div>
<div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
    <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 w-[170px] font-bold'>About Me</h1>
    <p className='pb-5'>{config.line1}</p>
    <p className='pb-5'>{config.line2}</p>
    <p className='pb-5'>{config.line3}</p>
    </div>
</div>

    </section>
}