'use client';

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            duration: 5000,
            position: "top-right",
            description: `Sunday, December 03, ${new Date().getFullYear()} at 9:00 AM`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            duration: 5000,
            position: "top-right",
            description: `Sunday, December 03, ${new Date().getFullYear()} at 9:00 AM`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show custom colors
      </Button>
    </div>
  );
}