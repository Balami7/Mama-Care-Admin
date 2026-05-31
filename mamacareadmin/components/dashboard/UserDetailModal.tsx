import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RecentUser } from "@/lib/mockData";

type Props = {
  user: RecentUser | null;
  open: boolean;
  onClose: () => void;
};

export default function UserDetailModal({ user, open, onClose }: Props) {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex justify-center">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-4xl bg-pink-100 text-pink-700">
                {user.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold">{user.name}</h3>
            <p className="text-gray-500">{user.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <p><strong>Gestational Age:</strong> {user.gestationalAge}</p>
            <p><strong>Joined On:</strong> {user.joinedOn}</p>
            <p><strong>Status:</strong> {user.status}</p>
            <p><strong>User ID:</strong> #{user.id}</p>
          </div>

          <Button className="w-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}