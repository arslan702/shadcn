import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export function ButtonDemo() {
  return <Button>Button</Button>
}

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}

export function ButtonDestructive() {
    return <Button variant="destructive">Destructive</Button>
}

export function ButtonOutline() {
    return <Button variant="outline">Outline</Button>
}

export function ButtonGhost() {
    return <Button variant="ghost">Ghost</Button>
}

export function ButtonLink() {
    return <Button variant="link">Link</Button>
}
 
export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}

export function ButtonWithIcon() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  )
}

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}
 
export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}