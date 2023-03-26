import React, {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    useCallback,
    useState,
  } from "react";
  import { Icon, IconNames } from "@/components/ui/Icon";

  type Props = {
    name?: string;
    label?: string;
    variant?: "bordered" | "underlined";
    icon?: IconNames;
    onEnter?: (value: string | number | readonly string[]) => void;
  } & InputHTMLAttributes<HTMLInputElement>;

  const variantMapper: Record<
    string,
    FC<Props & InputHTMLAttributes<HTMLInputElement>>
  > = {
    bordered: ({ label, type, icon, ...props }) => {
      return (
        <label>
          {label && <span>{label}</span>}
          <div className="relative mt-1">
            {icon && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-[22px]">
                <Icon name={icon} color="white" />
              </div>
            )}
            <input
              type={type}
              className={`textfield-bordered ${
                icon ? "pl-14" : "pl-5"
              }`}
              {...props}
            />
          </div>
        </label>
      );
    },
    underlined: ({
      label,
      type,
      placeholder = "Placeholder",
      value,
      onEnter,
      ...props
    }) => {
      return (
        <div>
          <div className="relative mt-1">
            <input
              type={type}
              className="textfield-underlined peer"
              placeholder=" "
              value={value}
              {...props}
            />
            <p className="absolute top-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white">
              {label || placeholder}
            </p>
          </div>
        </div>
      );
    },
  };

  const TextField = ({
    variant = "bordered",
    onChange,
    ...props
  }: Props) => {
    const [value, setValue] = useState("");
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (onChange) {
          onChange(event);
        }
      },
      [onChange]
    );
    return variantMapper[variant]({
      ...props,
      onChange: handleChange,
      value,
    });
  };

  export default TextField;
