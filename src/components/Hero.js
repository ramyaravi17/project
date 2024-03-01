import HeroImg from '../assets/girlhero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero (){
   const config ={
      subtitle:'Im a Front-end Web Developer',
      social : {
         twitter: 'https://twitter.com/?lang=en',
         facebook: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjzuP24x8iEAxXHGIMDHa37CFgYABAAGgJzZg&ase=2&gclid=CjwKCAiAivGuBhBEEiwAWiFmYZtxznLEnqY1LhTEnMWQ6nGjUuoHxeL-U7KEGA_eHU_kcSExD7XqThoCX3EQAvD_BwE&ohost=www.google.com&cid=CAESVeD20X1A4AGc15y5XUzNoiNokylMu-q1yxGUF7Z_MsEav3uMrWio7QfosyX1pt3VUxpdsiwuyOGKkn11Gnzv7Grx_V5BPMIWTOKj5TibCR8zMAaq9xE&sig=AOD64_2zd811UV8vFcJi0Q6mzpV9cjqg3Q&q&nis=4&adurl&ved=2ahUKEwjMlvi4x8iEAxV0Q2cHHVYOAHgQ0Qx6BAgFEAE',
         linkedin: 'https://in.linkedin.com/'

      }
   }


   return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
      <h1 className=' text-white text-6xl font-hero-font'>Hi ,<br/> I'm <span className='text-black'>Ramya Ravichandran</span>
      <p className='text-2xl'>{config.subtitle}</p>
      </h1>
      <div className='flex py-10'> 
        <a target="_blank" href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
        <a target="_blank" href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
        <a target="_blank" href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>

       </div>
    </div>

    <img className='md:w-1/3' src={ HeroImg}/>
   </section>
}