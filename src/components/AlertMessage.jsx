import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertMessage = ({ variant }) => {
  if (!variant) return;

  return (
    <Alert variant={variant}>
      <AlertDescription>
        {variant === "success"
          ? "Email was sent successfully"
          : "Error sending message"}
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
