import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignUp
} from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
      <SignedIn>
        <UserButton />
        {children}
      </SignedIn>
    </ClerkProvider>
  )
}