"use client";
import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { useSubscrib } from "@/services/subscription";
import { Loader2 } from "lucide-react";

interface SubscriptionPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequireSubscription = ({ open, setOpen }: SubscriptionPropsTypes) => {
  const { mutateAsync: subscribe, isPending } = useSubscrib();

  const handleSubscribe: () => void = async () => {
    try {
      const response = await subscribe();
      window.location.href = response.checkout_url;
    } catch (error) {}
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="z-[100000000000] space-y-4">
        <h2 className="text-lg font-semibold">Subscription Required</h2>
        <p className="text-sm text-muted-foreground">
          You need to subscribe to use this feature.
          <br />
        </p>
        <h2 className="text-lg font-semibold">Price : ₦500</h2>
        <Button
          className="w-full"
          onClick={handleSubscribe}
          disabled={isPending}
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Subscribe"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RequireSubscription;
