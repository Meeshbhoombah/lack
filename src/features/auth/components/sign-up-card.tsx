import { 
  Card, 
  CardHeader,
  CardDescription,
  CardContent
} from "@/components/ui/card"


export const SignUpCard = () => {
  return (
    <Card>
      <CardHeader className="px-0 pt-0">
        Login to continue.
      </CardHeader>
      <CardDescrption>
        Use your email or another service to continue.
      </CardDescrption>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
        </form>
      </CardContent>
    </Card>
  )
}


