import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const basePath = __BASE_PATH__.split("/").filter(Boolean).join("/");
const pathPrefix = basePath ? `/${basePath}` : "";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col items-start gap-6">
      <h1>We can&apos;t find that page</h1>

      <p className="text-[17px] text-ink-2">
        The link may be out of date, or the page may have moved somewhere else.
      </p>

      <Button
        variant="primary"
        href={`${pathPrefix}/`}
        onClick={(event) => {
          event.preventDefault();
          navigate("/");
        }}
      >
        Back to home
      </Button>
    </div>
  );
}