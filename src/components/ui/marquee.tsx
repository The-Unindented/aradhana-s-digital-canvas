
import { cn } from "@/lib/utils";

export default function Marquee({ items, className }: { items: string[], className?: string }) {
    return (
        <div className={cn("relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary text-foreground font-body", className)}>
            <div className="animate-marquee whitespace-nowrap py-12">
                {items.map((item, index) => {
                    return (
                        <span key={`mq1-${index}`} className="mx-4 text-4xl font-display font-bold">
                            {item}
                        </span>
                    )
                })}
            </div>

            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
                {items.map((item, index) => {
                    return (
                        <span key={`mq2-${index}`} className="mx-4 text-4xl font-display font-bold">
                            {item}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
