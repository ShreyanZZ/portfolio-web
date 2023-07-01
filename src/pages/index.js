import React from 'react';
   import Link from 'next/link';

   const HomePage = () => {
     return (
       <div>
         <h1>Welcome to My Portfolio Website</h1>
         <p>Hi! I am Shreyan Sharma. This is my portfolio website. This website contains about my professional information and about my projects and achievements.</p>
         <br></br>
         <nav>
         &nbsp;  &nbsp;  &nbsp; <Link href="/about">About</Link><br></br><br></br>
         &nbsp;  &nbsp;  &nbsp; <Link href="/portfolio">Portfolio</Link>
         </nav>
       </div>
     );
   };

   export default HomePage;
