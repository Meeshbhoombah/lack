import { SignInFlow } from '../types'

import { useAuthActions } from '@convex-dev/auth/react'
import { useState } from 'react'

import { 
  Card, 
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { TriangleAlert } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'


interface SignUpCardProps {
    setState: (state: SignInFlow) => void
}


export const SignUpCard = ({ setState }) => {
  // Convex uses the function name `signIn` for both Log in and Sign up
  // functionality, which is decided by passing a `flow` value to the
  // `signIn` function
  const { signIn } = useAuthActions()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [pending, setPending] = useState(false)
 
  const [error, setError] = useState('')

  
  const passwordSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(email)
    console.log(password)

    
    if (confirmPassword !== password) {
      setError('Passwords do not match.')
      return
    }


    setPending(true)
    signIn('password', { email, password, flow: 'signUp' })
      .catch((e) => {
        console.error(e)
        setError('Something went wrong.')
      })
      .finally(() => {
        setPending(false)
      })
  }

  const oAuthSignup = (value: 'github' | 'google') => {
    setPending(true)
    signIn(value)
      .finally(() => {
        setPending(false)
      })
  }


  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>
          Sign Up
        </CardTitle>
        <CardDescription>
          Use your email or another service to continue.
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div> 
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={passwordSignup} className="space-y-2.5">
          <Input 
            disabled={pending}
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder="Email"
            type="email"
            required
          />
          <Input 
            disabled={pending}
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder="Password"
            type="password"
            required
          />
          <Input 
            disabled={pending}
            value={confirmPassword}
            onChange={(e) => {setConfirmPassword(e.target.value)}}
            placeholder="Confirm Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
            onClick={() => {oAuthSignup('google')}}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-3 left-2.5"/>
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => {oAuthSignup('github')}}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-3 left-2.5"/>
            Continue with GitHub
          </Button>
          <p className="text-xs text-muted-foreground">
            Already have an account? <span onClick={() => setState('signIn')} className="text-sky-700 hover:underline cursor-pointer">Log In.</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

