import Link from "next/link";

const Footer = () => {
   return (
      <footer className="w-full theme-container bg-gray-800 text-gray-100 !py-6">
         <div className="grid grid-cols-1 mx-auto gap-x-3 gap-y-8  md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col space-y-4">
               <div className="text-xl font-medium font-lato tracking-wide">More Info</div>
               <div className="flex flex-col space-y-2 text-sm font-lato tracking-wide">
                  <Link href="#">Installation</Link>
                  <Link href="#">Release Notes</Link>
                  <Link href="#">Upgrade Guide</Link>
                  <Link href="#">Using with Preprocessors</Link>
                  <Link href="#">Optimizing for Production</Link>
                  <Link href="#">Browser Support</Link>
                  <Link href="#">IntelliSense</Link>
               </div>
            </div>
            <div className="flex flex-col space-y-4">
               <div className="text-xl font-medium font-lato tracking-wide">More Info</div>
               <div className="flex flex-col space-y-2 text-sm font-lato tracking-wide">
                  <Link href="#">Utility-First</Link>
                  <Link href="#">Responsive Design</Link>
                  <Link href="#">Hover, Focus, &amp; Other States</Link>
                  <Link href="#">Dark Mode</Link>
                  <Link href="#">Adding Base Styles</Link>
                  <Link href="#">Extracting Components</Link>
                  <Link href="#">Adding New Utilities</Link>
               </div>
            </div>
            <div className="flex flex-col space-y-4">
               <div className="text-xl font-medium font-lato tracking-wide">More Info</div>
               <div className="flex flex-col space-y-2 text-sm font-lato tracking-wide">
                  <Link href="#">Term and Conditions</Link>
                  <Link href="#">Privacy Policy</Link>
                  <Link href="#">Shipping Policy</Link>
                  <Link href="#">Sitemap</Link>
               </div>
            </div>
            <div className="flex flex-col space-y-4">
               <div className="text-xl font-medium font-lato tracking-wide">Location</div>
               <div className="flex flex-col space-y-2 text-sm font-lato tracking-wide">
                  <p>support@euphoria.in</p>
                  <p>Eklingpura Chouraha, Howrah Road</p>
                  <p>Kolkata, West Bengal India - 700012</p>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center px-6 pt-12 text-sm">
            <span className="dark:text-gray-400 font-lato tracking-wide">© Copyright 1986. All Rights Reserved.</span>
         </div>
      </footer>
   );
};

export default Footer;
