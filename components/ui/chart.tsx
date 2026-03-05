"use client";

import * as React from "react";
import {
  Legend,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  type TooltipContentProps,
  type LegendProps,
} from "recharts";

import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  {
    label?: string;
    color?: string;
  }
>;

const ChartConfigContext = React.createContext<ChartConfig | null>(null);

export function ChartContainer({
  config,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { config: ChartConfig }) {
  const style = React.useMemo(() => {
    const entries = Object.entries(config ?? {});
    const vars: Record<string, string> = {};
    for (const [key, value] of entries) {
      if (value?.color) {
        vars[`--color-${key}`] = value.color;
      }
    }
    return vars;
  }, [config]);

  return (
    <ChartConfigContext.Provider value={config}>
      <div className={cn("w-full", className)} style={style} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartConfigContext.Provider>
  );
}

export function ChartTooltip(props: TooltipProps<number, string>) {
  return <Tooltip {...props} />;
}

export function ChartLegend(props: LegendProps) {
  return <Legend {...props} />;
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  indicator = "dot",
  labelFormatter,
}: TooltipContentProps<number, string> & {
  indicator?: "dot" | "line";
  labelFormatter?: (label: string | number) => string;
}) {
  const config = React.useContext(ChartConfigContext);
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-xs text-white/80 shadow-lg">
      {label && (
        <div className="mb-2 text-[11px] uppercase tracking-[0.25em] text-white/50">
          {labelFormatter ? labelFormatter(label) : label}
        </div>
      )}
      <div className="space-y-1">
        {payload.map((entry) => {
          const key = entry.dataKey?.toString() ?? "value";
          const meta = config?.[key];
          return (
            <div key={key} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-2 w-2 rounded-full",
                    indicator === "line" ? "rounded-sm" : ""
                  )}
                  style={{ background: meta?.color ?? entry.color ?? "#94a3b8" }}
                />
                <span className="text-white/70">{meta?.label ?? key}</span>
              </div>
              <span className="text-white">{entry.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ChartLegendContent({
  payload,
}: LegendProps & { payload?: Array<{ dataKey?: string; color?: string }> }) {
  const config = React.useContext(ChartConfigContext);
  if (!payload?.length) return null;

  return (
    <div className="flex flex-wrap gap-4 text-xs text-white/60">
      {payload.map((entry) => {
        const key = entry.dataKey ?? "value";
        const meta = config?.[key];
        return (
          <div key={key} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: meta?.color ?? entry.color ?? "#94a3b8" }}
            />
            <span>{meta?.label ?? key}</span>
          </div>
        );
      })}
    </div>
  );
}
