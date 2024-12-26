"use client";

import { Check, ChevronDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
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
import { useState } from "react";

interface Product {
  values: string;
  label: string;
}

interface ProductFilterProps {
  values: string[];
  // onReset: () => void;
  onChange: (values: string[] | []) => void;
  // onRemove: () => void;
  productList: Product[];
}

export function ProductFilter({
  onChange,
  values,
  productList,
}: ProductFilterProps) {
  const [open, setOpen] = useState(false);

  const updateValue = (newValue: string[] | []) => {
    onChange(newValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex flex-col gap-y-1 h-fit max-w-[159px]">
          <p className="text-xs md:text-sm text-muted-foreground">
            Select your products
          </p>
          <div
            className={`w-[159px] justify-between flex items-center bg-white rounded-md p-2 border border-input ${
              open && "ring-1 border-primary"
            }`}
          >
            {!values.length ? (
              <p className="text-sm text-muted-foreground">Select Products</p>
            ) : (
              <div className="flex gap-x-1 items-center overflow-x-hidden mr-2">
                {values.map((item) => (
                  <div
                    key={item}
                    className="px-1 flex items-center gap-x-1 bg-primary/80 rounded-sm"
                  >
                    <p className="text-xs text-white">{item}</p>
                    <X
                      className="w-[10px] aspect-square text-white cursor-pointer"
                      onClick={() => {
                        const newValues = [...values].filter(
                          (values) => values !== item
                        );
                        updateValue(newValues);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            {values.length ? (
              <X
                className="opacity-50 w-4 h-4"
                onClick={() => {
                  updateValue([]);
                }}
              />
            ) : (
              <ChevronDown
                className="opacity-50 w-4 h-4"
                onClick={() => setOpen(true)}
              />
            )}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[159px] p-0">
        <Command>
          <CommandInput placeholder="Search Product..." />
          <CommandList>
            <CommandEmpty>No product found.</CommandEmpty>
            <CommandGroup>
              {productList.map((product: { values: string; label: string }) => (
                <CommandItem
                  key={product.values}
                  value={product.values}
                  onSelect={(currentValues) => {
                    const updatedValues = [...values];
                    if (values.includes(currentValues)) {
                      const deletedValues = updatedValues.filter(
                        (item) => item !== currentValues
                      );
                      updateValue(deletedValues);
                    } else {
                      updateValue([...values, currentValues]);
                    }
                  }}
                >
                  {product.label}
                  <Check
                    className={cn(
                      "ml-auto text-primary",
                      values.includes(product.values)
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
  );
}
