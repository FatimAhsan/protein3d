import Layout from "@/components/Layout";

const sections = [
  {
    title: "News and Updates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus vel tellus faucibus rutrum. Nunc ac sem sed libero volutpat condimentum ut sit amet velit. Curabitur justo nulla, suscipit in aliquam sed, gravida iaculis nisi. Proin bibendum ligula ac lacinia dapibus. Cras vulputate volutpat tristique. Ut ornare sollicitudin mauris, eget convallis eros posuere vel.",
  },
  {
    title: "Overview",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus vel tellus faucibus rutrum. Nunc ac sem sed libero volutpat condimentum ut sit amet velit. Curabitur justo nulla, suscipit in aliquam sed, gravida iaculis nisi. Proin bibendum ligula ac lacinia dapibus. Cras vulputate volutpat tristique. Ut ornare sollicitudin mauris, eget convallis eros posuere vel.",
  },
  {
    title: "Team",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus vel tellus faucibus rutrum. Nunc ac sem sed libero volutpat condimentum ut sit amet velit. Curabitur justo nulla, suscipit in aliquam sed, gravida iaculis nisi. Proin bibendum ligula ac lacinia dapibus. Cras vulputate volutpat tristique. Ut ornare sollicitudin mauris, eget convallis eros posuere vel.",
  },
  {
    title: "Citations and Publications",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus vel tellus faucibus rutrum. Nunc ac sem sed libero volutpat condimentum ut sit amet velit. Curabitur justo nulla, suscipit in aliquam sed, gravida iaculis nisi. Proin bibendum ligula ac lacinia dapibus. Cras vulputate volutpat tristique. Ut ornare sollicitudin mauris, eget convallis eros posuere vel.",
  },
  {
    title: "Sponsors",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus vel tellus faucibus rutrum. Nunc ac sem sed libero volutpat condimentum ut sit amet velit. Curabitur justo nulla, suscipit in aliquam sed, gravida iaculis nisi. Proin bibendum ligula ac lacinia dapibus. Cras vulputate volutpat tristique. Ut ornare sollicitudin mauris, eget convallis eros posuere vel.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="flex w-full px-8 md:px-16 py-8 flex-col items-start bg-white">
        <div className="flex flex-col items-start gap-2 mb-6">
          <h2 className="text-foreground text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
            About Protein3D
          </h2>
        </div>

        <div className="flex flex-col items-start self-stretch">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex min-w-[240px] p-6 items-start gap-6 self-stretch flex-wrap rounded-lg bg-white"
            >
              <div className="flex min-w-[160px] flex-col items-start gap-4 flex-1">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <h3 className="self-stretch text-foreground text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
                    {section.title}
                  </h3>
                  <p className="self-stretch text-text-secondary text-base font-normal leading-[140%]">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
