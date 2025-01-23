import Link from "next/link";
import Image from "next/image";
import icon from "../../public/ic_notarium_light_white.png";

export default function SignIn() {
  return (
    <>
      <Image src={icon}  width="512" height="512" alt=""/>
      <p className="text-2xl">Sign In</p>
      <Link href="/SignUp">Go to Sign Up</Link>
    </>
  );
}