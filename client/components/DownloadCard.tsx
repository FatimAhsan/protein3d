interface DownloadCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor?: "neutral" | "secondary";
}

export default function DownloadCard({
  title,
  description,
  buttonText,
  buttonColor = "neutral",
}: DownloadCardProps) {
  return (
    <div className="flex min-w-[240px] p-6 items-start gap-6 self-stretch flex-wrap rounded-lg border border-border bg-white">
      <div className="flex min-w-[160px] flex-col items-start gap-4 flex-1">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <h3 className="self-stretch text-foreground text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
            {title}
          </h3>
          <p className="self-stretch text-text-secondary text-base font-normal leading-[140%]">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-4 self-stretch">
          <button
            className={`flex px-3 py-3 justify-center items-center gap-2 rounded-lg border border-border-neutral-secondary text-foreground text-base font-normal leading-none ${
              buttonColor === "secondary"
                ? "bg-secondary-container"
                : "bg-background-neutral"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
