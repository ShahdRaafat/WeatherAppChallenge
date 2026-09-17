import { errorIcon, retryIcon } from "../../assets/images";
import Button from "./Button";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center text-white max-w-[50%] mx-auto">
      <img src={errorIcon} alt="Error" className="w-10 h-10" />
      <h2 className="text-4xl font-bold mt-4">Something went wrong</h2>
      <p className=" mt-4 text-center">
        We couldn't connect to the server(API error). Please try again in a few
        moments.
      </p>
      <Button
        className="mt-4 flex items-center gap-2 bg-neutral-600/50  "
        onClick={() => window.location.reload()}
      >
        <img src={retryIcon} />
        Retry
      </Button>
    </div>
  );
}

export default Error;
