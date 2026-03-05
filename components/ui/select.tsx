"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type SelectContextValue = {
  value?: string;
  setValue: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  registerOption: (value: string, label: string) => void;
  getLabel: (value?: string) => string | undefined;
};

const SelectContext = React.createContext<SelectContextValue | null>(null);

export function Select({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const optionsRef = React.useRef(new Map<string, string>());
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const value = controlledValue ?? uncontrolledValue;

  React.useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const setValue = (next: string) => {
    if (controlledValue === undefined) {
      setUncontrolledValue(next);
    }
    onValueChange?.(next);
  };

  const registerOption = (key: string, label: string) => {
    optionsRef.current.set(key, label);
  };

  const getLabel = (key?: string) => {
    if (!key) return undefined;
    return optionsRef.current.get(key);
  };

  return (
    <SelectContext.Provider value={{ value, setValue, open, setOpen, registerOption, getLabel }}>
      <div ref={wrapperRef} className="relative inline-flex">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) return null;

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70",
        className,
      )}
      onClick={() => ctx.setOpen(!ctx.open)}
      {...props}
    >
      {children}
      <span className="text-white/60">▾</span>
    </button>
  );
}

export function SelectValue({
  placeholder,
}: {
  placeholder?: string;
}) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) return null;
  const label = ctx.getLabel(ctx.value);
  return <span>{label ?? ctx.value ?? placeholder}</span>;
}

export function SelectContent({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  const ctx = React.useContext(SelectContext);
  if (!ctx || !ctx.open) return null;
  return (
    <div
      className={cn(
        "absolute right-0 top-full z-30 mt-2 w-44 rounded-xl border border-white/10 bg-black/90 p-2 shadow-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SelectItem({
  value,
  className,
  children,
}: React.HTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = React.useContext(SelectContext);
  React.useEffect(() => {
    if (ctx) {
      ctx.registerOption(value, typeof children === "string" ? children : String(value));
    }
  }, [ctx, value, children]);

  if (!ctx) return null;
  const active = ctx.value === value;

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs text-white/70 hover:bg-white/10",
        active ? "bg-white/10 text-white" : "",
        className,
      )}
      onClick={() => {
        ctx.setValue(value);
        ctx.setOpen(false);
      }}
    >
      {children}
    </button>
  );
}
