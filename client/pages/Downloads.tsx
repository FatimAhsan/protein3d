import Layout from "@/components/Layout";
import DownloadCard from "@/components/DownloadCard";

export default function Downloads() {
  return (
    <Layout>
      <div className="flex w-full px-8 md:px-16 py-6 md:py-8 flex-col items-start gap-8 bg-white">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-primary text-2xl font-semibold leading-[120%] tracking-[-0.48px]">
            V0.0.1
          </h2>
          <p className="text-text-secondary text-xl font-normal leading-[120%]">
            DD-MM-YYYY
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 self-stretch">
          <DownloadCard
            title="Training Manifest"
            description="Download the V0.0.1 training manifest JSON file."
            buttonText="Download manifest"
          />

          <DownloadCard
            title="Test Manifest"
            description="Download the V0.0.1 test manifest JSON file."
            buttonText="Download manifest"
          />

          <DownloadCard
            title="Dataset Package"
            description="Download the curated dataset."
            buttonText="Download dataset"
          />

          <DownloadCard
            title="Evaluation Kit"
            description="Download the evaluation toolkit ZIP file with metrics and validation scripts."
            buttonText="Download toolkit"
          />
        </div>
      </div>
    </Layout>
  );
}
