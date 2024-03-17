'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@radix-ui/react-dropdown-menu";

import DynamicComponent from "./DynamicComponent";

import { useRouter, usePathname } from 'next/navigation';

import { TypographyH1, TypographyH2 } from "@/components/Typography";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Docs({ params }: { params: { slug: string } }) {

  const pathname = usePathname()

  const components = [
    { name: "Button", slug: 'button', description: "A button component" },
    { name: "Switch", slug: "switch", description: "A switch component" },
    { name: "Tabs", slug: 'tabs', description: "A tabs component" },
    { name: "Tooltip", slug: 'tooltip', description: "A tooltip component" },
    { name: "Naigation Menu", slug: 'navigation-menu', description: "A navigation menu component" }
  ]

  const docs = [
    { name: "Getting Started", slug: "getting-started", description: "Getting started with the library" },
    { name: "Components", slug: "components", description: "All components" },
    { name: "Guides", slug: "guides", description: "Guides for the library" },
  ]

  const paths = components.map(component => component.slug.toLocaleLowerCase())

  const actualPath = pathname.split('/').pop()

  console.log(paths.includes(actualPath as string))

  return (
    <div className="flex gap-4 mb-10">
      <div className="sticky top-0 h-[50vh]">
        <p>
        </p>
        <ScrollArea className="h-[95vh] my-4 flex-none w-auto rounded-md border overflow-y-auto lg:block border-none">
          <p className="text-gray-100 ml-4 font-bold">
            Docs
          </p>
          {docs.map((doc, index) => (
            <Link
              key={index}
              href={`/docs/${doc.name.toLowerCase()}`}
              className="flex gap-2 justify-between w-full destructive text-gray-400 ml-4 py-1 mt-1"
            >
              {doc.name}
            </Link>
          ))}
          <Separator className="my-4" />
          <p className="text-gray-100 ml-4 font-bold">
            Components
          </p>
          {components.map((component, index) => (
            <Link
              href={
                `/docs${paths.includes(actualPath as string) ? `/components` : `/`
                }/${component.slug.toLowerCase()}`
              }
              key={index}
              className="flex gap-2 justify-between w-full destructive text-gray-400 ml-4 py-1 mt-1"
            >
              {component.name}
            </Link>
          ))}
        </ScrollArea>
      </div>
      <section className="my-4 mx-40">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            {paths.includes(actualPath as string) && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{components.find(component => component.slug === params.slug)?.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <TypographyH2>
          {components.find(component => component.slug === params.slug)?.name}
        </TypographyH2>

        <br className="mb-20" />

        <DynamicComponent slug={params.slug} />

      </section>
    </div>
  );
}