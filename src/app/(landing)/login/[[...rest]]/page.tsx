import { SignIn } from '@clerk/nextjs';

import { Background } from "@/components/background";

const Login = () => {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        <div className="container">
          <div className="flex flex-col gap-4 justify-center items-center">
            <SignIn
              fallbackRedirectUrl="/dashboard"
              signUpUrl="/signup"
            />
          </div>
        </div>
      </section>
    </Background>
  )
}

export default Login
