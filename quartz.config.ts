import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Phronology",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "phronology.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      // cdnCaching: true,
      typography: {
        header: "Iosevka",
        body: "Iosevka",
        code: "Iosevka",
      },
      colors: {
        lightMode: {
          light: "#f8f9fa",
          lightgray: "#e9ecef",
          gray: "#6c757d",
          darkgray: "#343a40",
          dark: "#212529",
          secondary: "#1864ab",     // Wisdom Blue (Rational mind, clarity, depth)
          tertiary: "#e67700",      // Energy Orange (Reactive mind, action, vitality)
          highlight: "rgba(24, 100, 171, 0.06)",
          textHighlight: "#fff3cd",
        },
        darkMode: {
          light: "#0d1b2a",         // Deep navy - perfect for focused reading
          lightgray: "#1b263b",     // Rich surface contrast
          gray: "#778da9",          // Muted blue-gray for secondary text
          darkgray: "#e0e1dd",      // Warm off-white for body text
          dark: "#f8f9fa",          // Pure white for strong accents
          secondary: "#339af0",     // Softer, luminous blue
          tertiary: "#ff922b",      // Warmer, energetic orange
          highlight: "rgba(51, 154, 240, 0.1)",
          textHighlight: "#2b1900",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false, enableImageWidth: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.HardLineBreaks(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
