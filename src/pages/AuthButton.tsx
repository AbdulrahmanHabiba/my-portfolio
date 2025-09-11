
import { Button } from "@/components/ui/button";
import { loginWithGoogle, logout } from "@/lib/auth";
import { useAuth } from "@/lib/hooks/useAuth";


export default function AuthButton({className} : {className? :string}) {
  const { user } = useAuth();
  

  return user ? (
<div className="">
    <Button className={className} onClick={logout}>Logout</Button>
</div>
  ) : (
    <div className="">
    <Button className={className} onClick={loginWithGoogle}>Login with Google</Button>
    </div>
  );
}


