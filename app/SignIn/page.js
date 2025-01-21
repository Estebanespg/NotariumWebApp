import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <p className="text-2xl">Sign In</p>
      <Link href="/SignUp">Go to Sign Up</Link>
    </>
  );
}