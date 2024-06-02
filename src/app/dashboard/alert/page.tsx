import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="grid gap-3">
     <Alert>
      <RocketIcon className="w-4 h-4" />
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>Alert Description</AlertDescription>
     </Alert>

     <Alert variant="destructive">
      <RocketIcon className="w-4 h-4" />
      <AlertTitle>Alert Destructive</AlertTitle>
      <AlertDescription>Alert Description</AlertDescription>
     </Alert>

     <Alert variant="success">
      <RocketIcon className="w-4 h-4" />
      <AlertTitle>Alert Success</AlertTitle>
      <AlertDescription>Alert Description</AlertDescription>
     </Alert>
    </div>
  );
}