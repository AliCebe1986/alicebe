
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Calendar, Database, Lock, Mail, Shield, Server, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Capstone = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/#projects" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Capstone Project: Retreat Center Booking System
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Queen of Apostles Renewal Centre – Online Reservation Platform
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/9415a9d9-17eb-408e-8e23-d4335b1c46d8.png" 
                alt="Queen of Apostles Renewal Centre" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "./lovable-uploads/9415a9d9-17eb-408e-8e23-d4335b1c46d8.png";
                }}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Project Summary</h3>
                <p className="text-muted-foreground">
                  The Retreat Center Booking System is a full-stack ASP.NET Core MVC web application designed to streamline the reservation process for the Queen of Apostles Renewal Centre. The system allows users to view available rooms, check real-time availability through a calendar-based interface, and make reservations. Additionally, admins can manage rooms, users, and reservations. The project incorporates user authentication, role-based access control, email notifications, and an intuitive UI for a seamless booking experience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Project Vision</h3>
                <p className="text-muted-foreground mb-4">
                  The vision for this project is to modernize and simplify the retreat center's manual reservation system by creating a digital platform where:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>Users can browse rooms, check availability, and book stays efficiently.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>Admins can manage reservations, rooms, and users via a dashboard.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>The system ensures real-time updates and prevents double booking.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>Users receive email confirmations and notifications.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>The platform is secure, scalable, and easy to use.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-background rounded-lg p-6 shadow-md glass">
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Backend:</span>
                    <p className="text-sm text-muted-foreground">ASP.NET Core MVC, Entity Framework Core, SQL Server</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Frontend:</span>
                    <p className="text-sm text-muted-foreground">Bootstrap, JavaScript, jQuery, AJAX</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Authentication:</span>
                    <p className="text-sm text-muted-foreground">ASP.NET Core Identity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <span className="font-medium">Deployment:</span>
                    <p className="text-sm text-muted-foreground">Azure, GitHub Actions</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-md glass">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">User Authentication & Authorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Room Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Reservation System</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Calendar-Based Availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Admin Dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                  <span className="text-sm">Email Notifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-md glass">
              <h3 className="text-xl font-semibold mb-4">GitHub Repository</h3>
              <a 
                href="https://github.com/AliCebe1986/QueenOfApostlesRenewalCentreWebsite" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-primary hover:underline"
              >
                View Source Code <ArrowLeft className="ml-2 h-4 w-4 rotate-135" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Project/Business Requirements</h3>
            <p className="text-muted-foreground mb-4">
              The system meets the following business and functional requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">User Authentication:</span>
                  <p className="text-sm text-muted-foreground">Secure login and role-based access via ASP.NET Identity.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Room Management:</span>
                  <p className="text-sm text-muted-foreground">Admins can add, edit, and delete rooms.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Reservation Management:</span>
                  <p className="text-sm text-muted-foreground">Users can book rooms, cancel reservations, and view their history.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Calendar-Based Availability Check:</span>
                  <p className="text-sm text-muted-foreground">Users see red-marked reserved dates and green-marked available dates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Real-Time Updates:</span>
                  <p className="text-sm text-muted-foreground">No double bookings—rooms are reserved instantly after confirmation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Admin Dashboard:</span>
                  <p className="text-sm text-muted-foreground">View reservation statistics, reports, and system logs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Email Notifications:</span>
                  <p className="text-sm text-muted-foreground">Users receive a confirmation email upon successful booking.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Secure Payments (Future Scope):</span>
                  <p className="text-sm text-muted-foreground">The system will integrate a payment gateway for online transactions.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Project Plan</h3>
            <p className="text-muted-foreground mb-4">
              The development was structured into the following phases:
            </p>
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-5 shadow-sm border border-border">
                <h4 className="flex items-center text-lg font-medium mb-2">
                  <span className="inline-block px-2 py-1 mr-3 text-xs font-bold bg-primary/10 text-primary rounded">Phase 1</span>
                  Requirements Gathering & Planning
                </h4>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Conducted meetings with stakeholders to identify key functionalities.</li>
                  <li>Defined user roles (admin, registered users, guests).</li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-5 shadow-sm border border-border">
                <h4 className="flex items-center text-lg font-medium mb-2">
                  <span className="inline-block px-2 py-1 mr-3 text-xs font-bold bg-primary/10 text-primary rounded">Phase 2</span>
                  System Design & Architecture
                </h4>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Defined ERD (Entity Relationship Diagram) for the database schema.</li>
                  <li>Chose ASP.NET Core MVC, Entity Framework Core, and SQL Server for scalability.</li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-5 shadow-sm border border-border">
                <h4 className="flex items-center text-lg font-medium mb-2">
                  <span className="inline-block px-2 py-1 mr-3 text-xs font-bold bg-primary/10 text-primary rounded">Phase 3</span>
                  UI/UX Design
                </h4>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Created wireframes for the user dashboard, booking system, and admin panel.</li>
                  <li>Implemented Bootstrap for responsive design.</li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-5 shadow-sm border border-border">
                <h4 className="flex items-center text-lg font-medium mb-2">
                  <span className="inline-block px-2 py-1 mr-3 text-xs font-bold bg-primary/10 text-primary rounded">Phase 4</span>
                  Development & Implementation
                </h4>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Developed Models, Controllers, and Views for core functionalities.</li>
                  <li>Integrated Identity authentication and authorization.</li>
                  <li>Built the reservation calendar with JavaScript and AJAX.</li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-5 shadow-sm border border-border">
                <h4 className="flex items-center text-lg font-medium mb-2">
                  <span className="inline-block px-2 py-1 mr-3 text-xs font-bold bg-primary/10 text-primary rounded">Phase 5</span>
                  Testing & Debugging
                </h4>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Conducted unit testing, integration testing, and UAT (User Acceptance Testing).</li>
                </ul>
              </div>
              
              <div className="bg-background rounded-lg p-5 shadow-sm border border-border">
                <h4 className="flex items-center text-lg font-medium mb-2">
                  <span className="inline-block px-2 py-1 mr-3 text-xs font-bold bg-primary/10 text-primary rounded">Phase 6</span>
                  Deployment & Maintenance
                </h4>
                <ul className="ml-6 space-y-1 list-disc text-muted-foreground">
                  <li>Deployed on Azure and set up a CI/CD pipeline.</li>
                  <li>Performed bug fixes and performance optimizations.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">System Implementation</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium mb-3 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Room Reservation Process
                </h4>
                <ol className="ml-6 space-y-2 list-decimal">
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">User logs in</span> and selects a room from the available list.
                  </li>
                  <li className="text-muted-foreground">
                    The calendar displays <span className="font-medium text-foreground">reserved (red)</span> and <span className="font-medium text-foreground">available (green)</span> dates.
                  </li>
                  <li className="text-muted-foreground">
                    The user selects the reservation period and fills in details.
                  </li>
                  <li className="text-muted-foreground">
                    The system calculates the total price based on stay duration.
                  </li>
                  <li className="text-muted-foreground">
                    The user confirms the reservation, and the room status updates in real-time.
                  </li>
                  <li className="text-muted-foreground">
                    A confirmation email is sent, and the user can view reservations on the dashboard.
                  </li>
                </ol>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-3 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  Admin Panel Features
                </h4>
                <ul className="ml-6 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>View and manage all reservations.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>Add/edit/delete rooms.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>Generate reports on occupancy rates.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <p className="text-lg">
              This project showcases my full-stack development skills, including ASP.NET Core MVC, database management, user authentication, and frontend UI development. 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Capstone;
