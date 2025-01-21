import Link from "next/link";

export default function SignUp() {
  return (
    <div>
      <p className="text-2xl">Sign Up</p>
      <Link href="/SignIn">Go to Sign In</Link>
    </div>
  );
}