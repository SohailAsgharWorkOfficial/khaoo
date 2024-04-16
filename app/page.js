import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_utils/GlobalApi";
import BusinessList from "./_components/BusinessList";
import { useSearchParams } from "next/navigation";


export default function Home() {

  

  return (
    <div>
        <CategoryList/>

        <BusinessList/>
    </div>
  );
}
