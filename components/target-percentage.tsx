import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TargetPercentageProps {
  current: number
  target: number
  onTargetChange: (target : number) => void
}

export function TargetPercentage({ current, target, onTargetChange }: TargetPercentageProps) {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{current}%</span>
            <span className="text-muted-foreground">/</span>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={target}
                onChange={(e) => onTargetChange(Number(e.target.value))}
                className="w-20"
                min={0}
                max={100}
              />
              <Label>%</Label>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">TARGET </span>
        </div>
      </CardContent>
    </Card>
  )
}

