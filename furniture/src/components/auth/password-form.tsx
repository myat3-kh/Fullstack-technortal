import { BedDouble, Eye, EyeOff } from "lucide-react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
export function PasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className ?? "")} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <BedDouble className="size-6" />
              </div>
              <span className="sr-only">Furniture Shop</span>
            </a>
            <h1 className="text-xl font-bold">Confirm Password</h1>
            <FieldDescription>
              The password must be 8 digits long.
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="password2">Confirm Password</FieldLabel>
            <Input id="password2" type="password" required />
          </Field>
          <InputGroup>
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              required
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                aria-label="Copy"
                title="Copy"
                size="icon-xs"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <Field>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
