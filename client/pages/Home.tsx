import Layout from "@/components/Layout";
import DownloadCard from "@/components/DownloadCard";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex w-full px-16 py-10 justify-center items-center bg-primary-container">
        <div className="w-full max-w-[1072px] flex flex-col gap-2">
          <h1 className="w-full text-on-secondary-container text-center text-5xl md:text-6xl font-bold leading-[120%] tracking-[-1.92px]">
            Protein Inverse Folding
          </h1>
          <p className="w-full text-text-secondary text-center text-xl md:text-2xl font-normal leading-[120%]">
            Assessing Structure to Sequence Prediction Accuracy
          </p>
        </div>
      </div>

      {/* Latest Version Section */}
      <div className="flex w-full px-8 md:px-16 py-10 md:py-12 flex-col items-start gap-12 bg-white">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-primary text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
            Latest Version
          </h2>
          <p className="text-text-secondary text-xl font-normal leading-[120%]">
            V0.0.1
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch">
          <DownloadCard
            title="What's new"
            description="New PDB structures added."
            buttonText="Download dataset"
          />
        </div>
      </div>
    </Layout>
  );
}
