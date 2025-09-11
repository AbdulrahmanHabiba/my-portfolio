import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { useState, type Dispatch, type SetStateAction } from 'react'
import type { Project } from './projectmodal';
import { iconNamesFromTechIcons } from '@/lib/icons';

const technologies = iconNamesFromTechIcons
export default function Technologis({ formData, setFormData ,isLoading } : {formData :Project , setFormData :Dispatch<SetStateAction<{ title: string; description: string; image: string; tech: string[]; link: string; code: string; featured: boolean; order : number }>>,isLoading :boolean }) {
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [searchedTechs, setSearchedTechs] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const searchTech = (query: string) => {
    if (!query.trim()) {
      setSearchedTechs(technologies);
      return;
    }

    const filteredTechs = technologies.filter((tech) =>
      tech.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedTechs(filteredTechs);
  };

  const handleAddTech = (tech: string | undefined) => {
    if (!tech || !tech.trim()) return;
    setFormData((prev) => ({
      ...prev,
      tech: [...prev.tech, ...(!prev.tech.includes(tech) ? [tech] : [])],
    }));
    setTechInput("");
    setSearchedTechs([]);
  };


const handleRemoveTech = (techToRemove: string) => {
  setFormData((prev) => ({
    ...prev,
    tech: prev.tech.filter((t) => t !== techToRemove),
  }));
};
return (
  <div>
    <Label className="mb-2">Technologies</Label>
    <div className="gap-2 mb-3 relative">
      <Input
        value={techInput}
        onChange={(e) => {
          const val = e.target.value;
          setTechInput(val);
          searchTech(val);
        }}
        onFocus={() => {
          setShowTechDropdown(true);
          if (!techInput.trim()) {
            searchTech("");
          }
        }}
        onBlur={() => {
          setTimeout(() => setShowTechDropdown(false), 200);
        }}

        placeholder="Add technology (React, TypeScript...)"
        disabled={isLoading}
        className="bg-background border-input"
      />

      {showTechDropdown &&
        (techInput.trim() || searchedTechs.length > 0) && (
          <div  className=" mt-1">
            <Command className="rounded-lg border shadow-md bg-background">
              <CommandList className="max-h-60">
                {searchedTechs.length === 0 && techInput.trim() ? (
                  <CommandEmpty>
                    No results found. Press Enter to add "{techInput}"
                  </CommandEmpty>
                ) : (
                  <CommandGroup>
                    {searchedTechs
                      .filter((tech) => !formData.tech.includes(tech))
                      .map((tech) => (
                        <CommandItem
                          key={tech}
                          onSelect={() => {
                            handleAddTech(tech);
                            setShowTechDropdown(false);
                          }}
                          className="cursor-pointer"
                        >
                          {tech}
                        </CommandItem>
                      ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </div>
        )}
    </div>

    <div className="flex flex-wrap gap-2 min-h-[2.5rem] p-2 border border-input rounded-md bg-background">
      {formData.tech.length === 0 ? (
        <span className="text-muted-foreground text-sm">
          No technologies added yet
        </span>
      ) : (
        formData.tech.map((tech: string) => (
          <Badge
            key={tech}
            variant="secondary"
            className="flex items-center gap-1 px-2 py-1"
          >
            {tech}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 ml-1"
              onClick={() => handleRemoveTech(tech)}
              disabled={isLoading}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {tech}</span>
            </Button>
          </Badge>
        ))
      )}
    </div>
  </div>
)
}