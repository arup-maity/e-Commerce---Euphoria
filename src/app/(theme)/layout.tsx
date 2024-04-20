import { Footer, Header } from "@/components/layout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Header />
         <section>{children}</section>
         <Footer />
      </>
   )
}