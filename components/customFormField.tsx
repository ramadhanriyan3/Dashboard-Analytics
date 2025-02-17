/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Control,
  ControllerRenderProps,
  UseFormSetValue,
} from "react-hook-form";
import { ReactNode } from "react";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import { E164Number } from "libphonenumber-js/core";
import { Calendar } from "lucide-react";
import { Check, ChevronsUpDown } from "lucide-react";

import "react-phone-number-input/style.css";
import "react-datepicker/dist/react-datepicker.css";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldType, Option } from "@/lib/allType.types";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectGroup,
} from "./ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface CustomPropsField {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: ReactNode;
  optionList?: Option[];
  setValue?: UseFormSetValue<{
    dateStart: string;
    dateEnd: string;
    product: string[];
  }>;
  renderSkeleton?: (field: ControllerRenderProps) => ReactNode;
}

const RenderField = ({
  field,
  props,
}: {
  field: ControllerRenderProps;
  props: CustomPropsField;
}) => {
  const {
    fieldType,
    placeholder,
    dateFormat,
    showTimeSelect,
    // renderSkeleton,
    optionList,
    setValue,
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="pl-1 flex rounded-md focus-within:border-primary/80 border border-dark-500 bg-dark-400">
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="outline-none"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            placeholder={placeholder}
            defaultCountry="ID"
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone"
            wraper
          />
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md focus-within:border-primary/80 border border-dark-500 bg-dark-400 items-center px-2">
          <Calendar className="w-[18px] aspect-square text-primary" />
          <FormControl>
            <DatePicker
              selected={field.value}
              placeholderText="Selecet a date"
              onChange={(date) => field.onChange(date)}
              dateFormat={dateFormat ?? "dd/MM/yyyy"}
              showTimeSelect={showTimeSelect ?? false}
              className="p-2 outline-none"
            />
          </FormControl>
        </div>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="shad-select-trigger">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="shad-select-content">
              <SelectGroup>{props.children}</SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
      );

    case FormFieldType.COMBOBOX:
      console.log({ INI_VALUE: field.value });

      const comboboxValue = field.value;

      return (
        <div className="flex rounded-md focus-within:border-primary/80 border border-dark-500 bg-dark-400 items-center px-2 pointer-events-auto min-w-52 py-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                className="w-full max-w-60 justify-between flex hover:bg-white focus-within:border-none px-0 focus-visible:ring-0"
              >
                {comboboxValue!.length ? (
                  <div className="flex gap-x-[1px] items-center overflow-hidden">
                    {comboboxValue!.map((item: string) => (
                      <p
                        className="bg-primary/90 px-2 rounded-sm text-white text-[8px]"
                        key={item}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                ) : (
                  "Select option..."
                )}
                <ChevronsUpDown className="opacity-50 self-end" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 pointer-events-auto">
              <Command>
                <CommandInput placeholder="Search option..." className="h-9 " />
                <CommandList>
                  <CommandEmpty>No option found.</CommandEmpty>
                  <CommandGroup>
                    {optionList!.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={(currentValue) => {
                          const updatedValues = comboboxValue.includes(
                            currentValue
                          )
                            ? comboboxValue.filter(
                                (value: string) => value !== currentValue
                              )
                            : [...comboboxValue, currentValue];

                          setValue!("product", updatedValues);

                          console.log({ comboboxValue });
                        }}
                      >
                        {option.name}
                        <Check
                          className={cn(
                            "ml-auto text-primary/80",
                            comboboxValue!.includes(option.value)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      );

    // case FormFieldType.SKELETON:
    //   return renderSkeleton ? renderSkeleton(field) : null;

    default:
      break;
  }
};

const CustomFormField = (props: CustomPropsField) => {
  const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 w-full">
          {label && fieldType !== FormFieldType.CHECKBOX && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
