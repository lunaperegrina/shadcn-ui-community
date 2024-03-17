'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@radix-ui/react-dropdown-menu";

import { useRouter, usePathname } from 'next/navigation';

import Link from "next/link";

export default function Docs({ params }: { params: { slug: string } }) {

  const router = useRouter()
  const pathname = usePathname()

  const components = [
    { name: "Button", description: "A button component" },
    { name: "Input", description: "An input component" },
    { name: "Modal", description: "A modal component" },
    { name: "NavigationMenu", description: "A navigation menu component" },
    { name: "ScrollArea", description: "A scroll area component" },
    { name: "Select", description: "A select component" },
    { name: "Switch", description: "A switch component" },
    { name: "Tabs", description: "A tabs component" },
    { name: "Tooltip", description: "A tooltip component" },
  ]

  const docs = [
    { name: "Getting Started", description: "Getting started with the library" },
    { name: "Components", description: "All components" },
    { name: "Utilities", description: "All utilities" },
    { name: "Guides", description: "Guides for the library" },
  ]

  const paths = components.map(component => component.name.toLocaleLowerCase())

  console.log('pathname', pathname.split('/').pop())

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
                }/${component.name.toLowerCase()}`
              }
              key={index}
              className="flex gap-2 justify-between w-full destructive text-gray-400 ml-4 py-1 mt-1"
            >
              {component.name}
            </Link>
          ))}
        </ScrollArea>
      </div>
      <section className="my-4 mx-auto">
        My Post: {params.slug}
      </section>
    </div>
  );
}