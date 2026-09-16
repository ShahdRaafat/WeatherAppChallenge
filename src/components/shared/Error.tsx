import { errorIcon, retryIcon } from "../../assets/images";
import Button from "./Button";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <img src={errorIcon} alt="Error" />
      <h2 className="text-2xl font-bold mt-4">Something went wrong</h2>
      <p className=" mt-2">
        We couldn't connect to the server(API error). Please try again in a few
        moments.
      </p>
      <Button>
        <img src={retryIcon} />
        Retry
      </Button>
    </div>
  );
}

export default Error;
