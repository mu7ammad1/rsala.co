import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReceivedMessages from "@/components/comps/profile/ReceivedMessages";
import SentMessages from "@/components/comps/profile/SentMessages";

export default function Tabs_Message({ username }: any) {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full flex flex-row">
        <TabsTrigger value="account" className="basis-1/2">Received</TabsTrigger>
        <TabsTrigger value="password" className="basis-1/2">Sent</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        {/* Received */}
        <ReceivedMessages slug={username} />
      </TabsContent>
      <TabsContent value="password">
        {/* Sent */}
        <SentMessages slug={username} />
      </TabsContent>
    </Tabs>
  );
}
