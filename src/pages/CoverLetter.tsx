
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoverLetter = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <motion.div 
          className="bg-card rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6">Cover Letter</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Dear Hiring Manager,</p>
            
            <p className="mb-4">
              I am writing to express my interest in the &lt; &gt;. I came across this opportunity and was excited to see a chance to work at a Fortune 250 company that values diversity, equity, and inclusion while providing an environment for professional growth.
            </p>
            
            <p className="mb-4">
              As a third-year computer programming and analysis student at George Brown College, I have developed excellent analytical skills and attention to detail. I am self-driven and able to prioritize tasks efficiently, which has helped me successfully work both independently and in a team. Additionally, I possess over six years of teaching experience in computer science for middle and high school students. Furthermore, I am a quick learner and have experience adapting to different working environments. I work well both independently and, in a team. I believe that my positive attitude and willingness to learn will allow me to make valuable contributions to your team.
            </p>
            
            <p className="mb-4">
              I am confident that my skills and experience make me an ideal candidate for the &lt;&gt; position. I am excited to work alongside seasoned professionals at &lt;&gt; who will guide and support me to enhance my professional skills while gaining relevant experience in a business environment. I am eager to participate in a variety of functional and leadership activities to enhance my personal and professional capabilities.
            </p>
            
            <p className="mb-4">
              I have completed three years of a four-year bachelor's degree program in Computer Education and Instructional Technologies at Anadolu University. My key skills include Microsoft Office, HTML, CSS, JavaScript, Java, C#, Python, SQL, PHP, and ASP.NET Core. I am a self-starter with an insatiable appetite to learn, and I am always looking for ways to grow my skills and knowledge. As an agile solution seeker, I am a problem solver who can find the right answer even in times of fast-paced change.
            </p>
            
            <p className="mb-4">
              I am excited to learn more about this opportunity and how I can contribute to the success of &lt;&gt;. Thank you for considering my application. I look forward to hearing from you.
            </p>
            
            <p className="mb-0">
              Sincerely,<br />
              Ali Cebe
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoverLetter;
