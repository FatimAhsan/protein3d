export default function Footer() {
  return (
    <footer className="flex w-full px-8 py-8 items-start gap-4 flex-wrap border-t border-border bg-white">
      <div className="flex flex-col items-start gap-3 flex-1">
        <div className="flex pb-4 flex-col justify-center items-center gap-2.5 self-stretch">
          <div className="flex justify-center items-center self-stretch">
            <div className="text-on-secondary-container text-center text-base font-semibold leading-[140%]">
              NILAB, Queen's University Belfast
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 flex-1">
        <div className="flex pb-4 flex-col items-start gap-2.5 self-stretch">
          <div className="flex justify-center items-center self-stretch">
            <div className="text-on-secondary-container text-center text-base font-semibold leading-[140%]">
              nilab@qub.ac.uk
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 flex-1">
        <div className="flex pb-4 flex-col items-start gap-2.5 self-stretch">
          <div className="flex justify-center items-center self-stretch">
            <div className="text-on-secondary-container text-center text-base font-semibold leading-[140%]">
              Copyright Infringment
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
