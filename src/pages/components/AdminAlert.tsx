import { useUser } from '@/lib/context/UserContext'
import  AuthButton  from '../AuthButton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
export default function AdminAlert({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}){
  const { user, isAdmin } = useUser();

  let title = "";
  let description = "";

  if (!user) {
    title = "Login Required";
    description = "🚫 You must be logged in to access this feature.";
  } else if (user && !isAdmin) {
    title = "Access Denied";
    description = `👤 You are logged in as "${user.displayName || "User"}", but you don’t have admin permissions.`;
  } else if (isAdmin) {
    title = "Welcome Admin";
    description = "✅ You have full access to manage the system.";
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader className='!text-2xl'>
          <AlertDialogTitle className='text-[1.2rem]'>{title}</AlertDialogTitle>
          <AlertDialogDescription className='text-[1.1rem]'>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogCancel>
                Close
            </AlertDialogCancel>
            <AlertDialogAction className='w-full sm:w-auto'>
              <AuthButton className={"w-full"}  />
            </AlertDialogAction>
            
   
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
