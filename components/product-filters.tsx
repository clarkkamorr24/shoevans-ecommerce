"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "oldskool", label: "OLD SKOOL" },
      { value: "slipon", label: "SLIP ON" },
      { value: "sk8hi", label: "SK8-HI" },
      { value: "authentic", label: "AUTHENTIC" },
      { value: "ultrarange", label: "ULTRARANGE" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "us5", label: "US 5" },
      { value: "us5_5", label: "US 5.5" },
      { value: "us6", label: "US 6" },
      { value: "us6_5", label: "US 6.5" },
      { value: "us7", label: "US 7" },
      { value: "us7_5", label: "US 7.5" },
      { value: "us8", label: "US 8" },
      { value: "us8_5", label: "US 8.5" },
      { value: "us9", label: "US 9" },
      { value: "us9_5", label: "US 9.5" },
      { value: "us10", label: "US 10" },
      { value: "us10_5", label: "US 10.5" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black" },
      { value: "white", label: "White" },
      { value: "red", label: "Red" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue" },
      { value: "orange", label: "Orange" },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())
  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox 
                      id={`filter-${section.id}-${optionIdx}`} 
                      checked={searchValues.some(([key, value]) => key === section.id && value === option.value)}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams)
                        const checked = event?.currentTarget.dataset.state == "checked"
                        checked ? params.delete(section.id) : params.set(section.id, option.value)
                        router.replace(`/?${params.toString()}`)
                      }}
                    />
                    <label 
                     htmlFor={`filter-${section.id}-${optionIdx}`}
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                     {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
