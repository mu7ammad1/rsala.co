import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReceivedMessages from "@/components/comps/profile/ReceivedMessages";
import SentMessages from "@/components/comps/profile/SentMessages";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

const font = Rubik({
  subsets: ["arabic"],
  weight: ["500"],
});


export default function Tabs_Message({ username }: any) {
  return (
    <Tabs defaultValue="account"  className={cn(
      "w-full",
      font.className
    )}>
      <TabsList className="w-full flex flex-row">
        <TabsTrigger value="ReceivedMessages" className="basis-1/2">مستقبله</TabsTrigger>
        <TabsTrigger value="SentMessages" className="basis-1/2">مرسله</TabsTrigger>
      </TabsList>
      <TabsContent value="ReceivedMessages">
        {/* Received */}
        <ReceivedMessages slug={username} />
      </TabsContent>
      <TabsContent value="SentMessages">
        {/* Sent */}
        <SentMessages slug={username} />
      </TabsContent>
    </Tabs>
  );
}
