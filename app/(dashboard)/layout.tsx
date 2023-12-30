import Header from "@/components/header/header";


const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
       <Header/>
      
      <main className="">
        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;