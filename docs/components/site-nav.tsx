import { Separator, Text } from "antlitz";
import { Link } from "antlitz/next";
import { ThemeToggle } from "@/components/theme-toggle";

const sections = [
  {
    title: "Overview",
    items: [{ name: "Introduction", href: "/" }],
  },
  {
    title: "Styles",
    items: [
      { name: "Theme", href: "/styles/theme" },
      { name: "Typeset", href: "/styles/typeset" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Alert", href: "/components/alert" },
      { name: "Badge", href: "/components/badge" },
      { name: "Breadcrumb", href: "/components/breadcrumb" },
      { name: "Button", href: "/components/button" },
      { name: "Card", href: "/components/card" },
      { name: "Checkbox", href: "/components/checkbox" },
      { name: "Disclosure", href: "/components/disclosure" },
      { name: "Field", href: "/components/field" },
      { name: "Fieldset", href: "/components/fieldset" },
      { name: "Heading", href: "/components/heading" },
      { name: "Icon", href: "/components/icon" },
      { name: "Image", href: "/components/image" },
      { name: "Input", href: "/components/input" },
      { name: "Label", href: "/components/label" },
      { name: "Link", href: "/components/link" },
      { name: "Progress", href: "/components/progress" },
      { name: "Radio", href: "/components/radio" },
      { name: "Select", href: "/components/select" },
      { name: "Separator", href: "/components/separator" },
      { name: "Skeleton", href: "/components/skeleton" },
      { name: "Spinner", href: "/components/spinner" },
      { name: "Switch", href: "/components/switch" },
      { name: "Text", href: "/components/text" },
      { name: "Textarea", href: "/components/textarea" },
    ],
  },
];

export function SiteNav() {
  return (
    <nav aria-label="Documentation" className="w-44 shrink-0">
      <Link
        href="/"
        variant="plain"
        className="inline-block text-lg font-semibold tracking-tight lg:text-xl"
      >
        antlitz
      </Link>

      <Separator decorative className="my-4" />

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <Text
              id={`${section.title}-nav`}
              size="xs"
              tone="subtle"
              className="font-mono tracking-wide uppercase"
            >
              {section.title}
            </Text>
            <ul
              aria-labelledby={`${section.title}-nav`}
              className="flex flex-col gap-1.5"
            >
              {section.items.map((item) => (
                <li key={item.href}>
                  <Text
                    as={Link}
                    href={item.href}
                    variant="plain"
                    size="sm"
                    tone="muted"
                    className="hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator decorative className="my-6" />

      <ThemeToggle />
    </nav>
  );
}
