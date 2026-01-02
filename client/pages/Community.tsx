import Layout from "@/components/Layout";

export default function Community() {
  return (
    <Layout>
      {/* Submissions Section */}
      <div className="flex w-full px-8 md:px-16 py-8 flex-col items-start gap-4 bg-white border-b border-border">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-primary text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
            Submissions
          </h2>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex min-w-[240px] p-6 items-start gap-6 self-stretch flex-wrap rounded-lg border border-border bg-white">
            <div className="flex min-w-[160px] flex-col items-start gap-4 flex-1">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="self-stretch text-foreground text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
                  Add a submission to the leaderboard
                </h3>
              </div>
              <div className="flex items-center gap-4 self-stretch">
                <button className="flex px-3 py-3 justify-center items-center gap-2 rounded-lg border border-border-neutral-secondary bg-secondary-container text-foreground text-base font-normal leading-none">
                  Submission Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="flex w-full px-8 md:px-16 py-6 md:py-8 flex-col items-start gap-8 bg-white">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-primary text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
            Leaderboard
          </h2>
          <p className="text-text-secondary text-xl font-normal leading-[120%]">
            Top performing submissions
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch overflow-x-auto">
          <div className="flex flex-col items-start self-stretch rounded border border-[#B9B9B9] bg-white min-w-[600px]">
            {/* Table Header */}
            <div className="flex items-start flex-1 self-stretch bg-transparent">
              <div className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-black/[0.06]">
                <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                  <div className="flex-1 text-black text-sm font-semibold leading-[130%]">
                    Submission ID
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-black/[0.06]">
                <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                  <div className="flex-1 text-black text-sm font-semibold leading-[130%]">
                    Submission Name
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-black/[0.06]">
                <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                  <div className="flex-1 text-black text-sm font-semibold leading-[130%]">
                    Recovery Rate
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-black/[0.06]">
                <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                  <div className="flex-1 text-black text-sm font-semibold leading-[130%]">
                    Confidence
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-black/[0.06]">
                <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                  <div className="flex-1 text-black text-sm font-semibold leading-[130%]">
                    Structural Similarity Score
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-black/[0.06]">
                <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                  <div className="flex-1 text-black text-sm font-semibold leading-[130%]">
                    Top-k-recovery
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-black/[0.06]">
                <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                  <div className="flex-1 text-black text-sm font-semibold leading-[130%]">
                    Efficency
                  </div>
                </div>
              </div>
            </div>

            {/* Table Rows (Empty) */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex items-start flex-1 self-stretch bg-transparent"
              >
                {[...Array(7)].map((_, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-start flex-1 self-stretch border-t border-l border-[#B9B9B9] bg-transparent"
                  >
                    <div className="flex px-3 py-2.5 justify-center items-center self-stretch">
                      <div className="flex-1"></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button className="flex px-3 py-3 items-center gap-2.5 rounded-lg border border-border-neutral-secondary bg-background-neutral mx-auto">
            <div className="text-foreground text-center text-base font-normal leading-none">
              View more
            </div>
          </button>
        </div>
      </div>
    </Layout>
  );
}
