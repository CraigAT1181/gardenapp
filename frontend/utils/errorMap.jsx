const errorMap = (err) => {
  console.log("Error:", err);

  const raw = typeof err === "string" ? err : err?.message || "";
  const message = raw.toLowerCase();

  if (message.includes("invalid login"))
    return "Please check your e-mail and password are correct.";
  if (
    message.includes("anonymous") ||
    message.includes("missing email or phone")
  )
    return "Please complete all login details.";
  if (message.includes("requires a valid password"))
    return "Please enter a valid password.";
  if (message.includes("at least 6"))
    return "Password should include at least 6 characters.";
  if (message.includes("invalid format"))
    return "Please check you've typed your e-mail correctly.";
  if (message.includes("already registered"))
    return "Looks like this e-mail is already registered.";

  return "Something went wrong. Please try again.";
};

export default errorMap;
