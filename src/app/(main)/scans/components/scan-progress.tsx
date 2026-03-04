type Props = { percent: number; status: string }

export default function ScanProgress({ percent, status }: Props) {
  return (
    <div className="flex size-26 flex-col items-center justify-center rounded-full bg-foreground dark:bg-background">
      <h5 className="text-3xl font-medium text-primary">{percent}%</h5>
      <p className="text-center text-[10px] leading-2 text-muted-foreground">
        {status}
      </p>
    </div>
  )
}
