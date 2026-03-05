import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    const existingIgnored = Array.isArray(config.watchOptions?.ignored)
      ? config.watchOptions.ignored
      : config.watchOptions?.ignored
        ? [config.watchOptions.ignored]
        : [];
    const normalizedIgnored = existingIgnored.filter(
      (item: unknown): item is string =>
        typeof item === "string" && item.trim().length > 0,
    );

    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        ...normalizedIgnored,
        "**/.git/**",
        "**/.next/**",
        "**/node_modules/**",
        "**/.playwright-mcp/**",
        "**/.claude/**",
      ],
    };

    return config;
  },
};

export default nextConfig;
