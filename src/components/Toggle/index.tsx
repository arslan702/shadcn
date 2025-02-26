import { Bold, Italic, Underline } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}

export function ToggleOutline() {
    return (
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    )
}

export function ToggleWithText() {
    return (
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </Toggle>
    )
}

export function ToggleSm() {
    return (
      <Toggle size="sm" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    )
}

export function ToggleLg() {
    return (
      <Toggle size="lg" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    )
}

export function ToggleDisabled() {
    return (
      <Toggle aria-label="Toggle underline" disabled>
        <Underline className="h-4 w-4" />
      </Toggle>
    )
}