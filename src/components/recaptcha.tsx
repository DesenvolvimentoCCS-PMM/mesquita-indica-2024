import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
  onVerify: (token: string | null) => void;
}

export function Recaptcha({ onVerify }: RecaptchaProps) {
  const handleRecaptchaChange = (value: string | null) => {
    onVerify(value);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6Ldg2XkpAAAAAKFyWKMe3Mn8CG5hck_YgKB0FRw2"
        onChange={handleRecaptchaChange}
        size="normal"
      />
    </div>
  );
}
