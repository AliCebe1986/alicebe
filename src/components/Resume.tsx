import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.p
            className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-primary bg-primary/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Resume
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Professional Experience & Education
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            View my qualifications, experience, and educational background
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Contact & Skills */}
          <div className="space-y-8">
            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="text-sm">Toronto, ON Canada</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="text-sm">(289) 980-8027</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-primary" />
                  <span className="text-sm">alicebe86@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 mt-0.5 text-primary" />
                  <a href="https://www.linkedin.com/in/ali-cebe" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                    linkedin.com/in/ali-cebe
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Key Skills</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'JavaScript', 'C#'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'ASP.NET Core', 'Spring Boot', 'Git', 'Docker'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Database Management</h4>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'MongoDB'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Web & Mobile Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'Android Development'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Teamwork', 'Leadership', 'Communication', 'Adaptability'].map((skill, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Microsoft Azure Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Microsoft Foundational C#</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Middle and right columns - Experience, Education, etc. */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Summary of Qualifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Final-year Computer Programming and Analysis student with hands-on experience in software development and IT support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Proficient in modern programming languages, frameworks, and tools, including Java, Javascript, Python, React, ASP.NET Core, and SQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Strong understanding of the Software Development Life Cycle (SDLC), including Agile and Waterfall methodologies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Skilled in developing, testing, and debugging software applications across web and mobile platforms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Demonstrated ability to work collaboratively in team settings, with strong problem-solving and communication skills.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Education</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">George Brown College</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Apr 2025</span>
                  </div>
                  <p className="text-sm font-medium">Advanced Diploma, Computer Programming and Analysis</p>
                  <p className="text-xs text-muted-foreground mt-1">Anticipated Graduation: April 2025</p>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">Anadolu University</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Eskisehir-Turkey</span>
                  </div>
                  <p className="text-sm font-medium">Bachelor's Degree, Computer Education and Instructional Technologies</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Work Experience</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">IT Intern</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">May 2023 - Dec 2023</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Environics Analytics</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Utilized Jira to manage incoming IT tickets and requests.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Configured laptops and installed necessary software.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Provided technical support to staff via email, remote access (GoToAssist), Microsoft Teams, and in person.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Identified and corrected software defects, maintaining and supporting implemented software.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Troubleshot and resolved technical issues such as video conference support and network issues.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">IT Teacher</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">2014 - 2017</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Piripasa Middle School</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Taught middle school students about computer science, working on their skills in Microsoft Office, as well as in programming and algorithms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Fostered analytical and problem-solving skills among students.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium">IT Teacher</h4>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">2011 - 2014</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Sirnak Vocational and Technology Anadolu High School</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Taught high school students in the computer technician stream basic web development and programming skills, working in C#, Visual Basics, HTML, CSS, PHP, and JavaScript.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                      <span className="text-sm">Instructed students on repairing computers, as well as building and customizing their own desktop computers.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Volunteer Experience</h3>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-medium">Technology Reuse and Recycling Volunteer</h4>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Nov 2024 - Present</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Free Geek Toronto</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">Inspect donated computer and parts to ensure functionality for reuse.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">Restore non-functional computers by performing necessary repairs and maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">Install operating system, such as Windows, Linux and any required software.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-background rounded-lg p-6 shadow-md glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">Relevant Coursework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Web Development Fundamentals',
                  'Mobile Application Development',
                  'Advanced Web Programming',
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming',
                  'DevOps Practices',
                  'Applied Data Science',
                  'Agile Software Development',
                  'Capstone Project: Full Stack Development using ASP.NET Core'
                ].map((course, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span className="text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 h-11 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-lift"
            onClick={(e) => {
              e.preventDefault();
              // This is where you'd add the download functionality for the resume
              // For now it's just a placeholder
              alert("Resume download functionality would be implemented here");
            }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
