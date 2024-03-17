'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { useRouter, usePathname } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {

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

  return (
    <div className="flex gap-4 mb-10">
      <div className="sticky top-0 h-[50vh]">
        <ScrollArea className="h-[95vh] my-4 flex-none w-auto rounded-md border overflow-y-auto hidden sm:hidden lg:block border-none">
          {components.map((component, index) => (
            <Button
              key={index}
              value={component.name}
              variant="link"
              onClick={() => router.push(`/docs/components/${component.name.toLowerCase()}`)}
              className="flex gap-2 justify-between w-full destructive"
            >
              {component.name}
            </Button>
          ))}
        </ScrollArea>
      </div>
      <section className="my-4 mx-auto">
        My Post: {params.slug}
      </section>
    </div>
  );
}