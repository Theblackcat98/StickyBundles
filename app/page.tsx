"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input"; // Import Textarea
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Listbox, ListboxItem } from "@heroui/listbox";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal"; // Import Modal components and hook
import solar, {
  HamburgerMenu,
  Pulse2,
  Folder,
  Document,
  Magnifer
} from "@solar-icons/react";

type Note = {
  id: string;
  title: string;
  content: string;
  folder: string;
  createdAt: Date;
};

export default function StickyNotes() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null); // Track selected folder
  // const [zoomedNoteId, setZoomedNoteId] = useState<string | null>(null); // Remove old state
  const { isOpen: isModalOpen, onOpen: openModal, onOpenChange: onModalOpenChange, onClose: closeModal } = useDisclosure(); // Modal state hook, get onClose
  const [selectedNoteData, setSelectedNoteData] = useState<Note | null>(null); // State for modal data
  const [editingTitle, setEditingTitle] = useState(""); // State for editing title in modal
  const [editingContent, setEditingContent] = useState(""); // State for editing content in modal
  const [notes, setNotes] = useState<Note[]>([]); // Initialize notes as empty, load from localStorage
  const [folders, setFolders] = useState<string[]>([]); // Initialize folders as empty, load from localStorage
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false); // Flag to prevent saving initial empty state

  // Load notes and folders from localStorage on initial mount
  useEffect(() => {
    try {
      const storedNotes = localStorage.getItem("stickyNotes");
      if (storedNotes) {
        // Parse and convert createdAt back to Date objects
        const parsedNotes = JSON.parse(storedNotes).map((note: any) => ({
          ...note,
          createdAt: new Date(note.createdAt),
        }));
        setNotes(parsedNotes);
      } else {
        // Set default notes if nothing is stored
        setNotes([
          {
            id: "1",
            title: "Welcome Note",
            content: "This is your first sticky note! Click me to edit.",
            folder: "General",
            createdAt: new Date(),
          },
        ]);
      }

      const storedFolders = localStorage.getItem("stickyFolders");
      if (storedFolders) {
        setFolders(JSON.parse(storedFolders));
      } else {
        // Set default folders if nothing is stored
        setFolders(["General", "Work", "Personal"]);
      }
    } catch (error) {
      console.error("Failed to load data from localStorage:", error);
      // Set defaults in case of error
       setNotes([
          {
            id: "1",
            title: "Welcome Note",
            content: "This is your first sticky note! Click me to edit.",
            folder: "General",
            createdAt: new Date(),
          },
        ]);
       setFolders(["General", "Work", "Personal"]);
    } finally {
       setIsInitialLoadComplete(true); // Mark initial load as complete
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Save notes to localStorage whenever they change (after initial load)
  useEffect(() => {
    if (isInitialLoadComplete) {
       try {
         localStorage.setItem("stickyNotes", JSON.stringify(notes));
       } catch (error) {
         console.error("Failed to save notes to localStorage:", error);
       }
    }
  }, [notes, isInitialLoadComplete]);

  // Save folders to localStorage whenever they change (after initial load)
   useEffect(() => {
    if (isInitialLoadComplete) {
       try {
         localStorage.setItem("stickyFolders", JSON.stringify(folders));
       } catch (error) {
         console.error("Failed to save folders to localStorage:", error);
       }
    }
  }, [folders, isInitialLoadComplete]);


  // Removed duplicated notes state declaration (lines 117-125 from previous file state)

  // const [folders, setFolders] = useState(["General", "Work", "Personal"]); // Managed by useEffect now

  const filteredNotes = notes.filter(note => { // This will now correctly use the 'notes' state declared earlier (line 41)
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          note.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFolder = selectedFolder ? note.folder === selectedFolder : true; // Filter by folder if selected
    return matchesSearch && matchesFolder;
  });

  // Combine "All Notes" and existing folders for the Listbox
  const folderItems = [
    { key: "all", name: "All Notes", icon: <Document size={20} /> },
    ...folders.map(folder => ({ key: folder, name: folder, icon: <Folder size={20} /> }))
  ];

  // No need for derived zoomedNote variable anymore

  return (
    <div className="flex h-screen bg-default-50"> {/* Relative positioning no longer needed here */}
      {/* Drawer */}
      <div className={`${isDrawerOpen ? "w-64" : "w-0"} transition-all duration-300 overflow-hidden`}>
        <div className="p-4 h-full border-r border-divider">
          <Listbox
            aria-label="Folders"
            items={folderItems} // Use the combined items array
            selectedKeys={selectedFolder ? [selectedFolder] : ["all"]} // Control selection state
            onSelectionChange={(keys) => {
              const selectedKey = Array.from(keys)[0];
              setSelectedFolder(selectedKey === "all" ? null : String(selectedKey));
            }}
          >
            {(item) => (
              <ListboxItem
                key={item.key}
                startContent={item.icon}
                // No need for individual onClick or className here, handled by Listbox props
              >
                {item.name}
              </ListboxItem>
            )}
          </Listbox>
          <Button className="mt-4" startContent={<Pulse2 size={20} />}>
            New Folder
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="p-4 border-b border-divider flex items-center gap-4">
          <Button isIconOnly onPress={() => setIsDrawerOpen(!isDrawerOpen)}>
            <HamburgerMenu size={20} />
          </Button>
          <Input
            placeholder="Search notes..."
            startContent={<Magnifer size={20} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </header>

        {/* Notes Grid */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotes.map(note => (
              <Card
                key={note.id}
                isPressable
                className="h-48 cursor-pointer hover:shadow-lg transition-shadow flex flex-col" // Added flex flex-col
                onPress={() => {
                  setSelectedNoteData(note);
                  setEditingTitle(note.title); // Set editing state when opening
                  setEditingContent(note.content); // Set editing state when opening
                  openModal();
                }}
              >
                <CardHeader className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap"> {/* Prevent title overflow */}
                  {note.title}
                </CardHeader>
                <CardBody className="text-sm text-default-500 overflow-hidden flex-grow"> {/* Allow body to grow and hide overflow */}
                  <p className="line-clamp-5">{note.content}</p> {/* Limit lines shown in card */}
                </CardBody>
                <CardFooter className="text-xs text-default-400 mt-auto"> {/* Push footer to bottom */}
                  {note.createdAt.toLocaleDateString()}
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>

        {/* New Note FAB */}
        <Button
          isIconOnly
          color="primary"
          className="fixed bottom-6 right-6"
          onPress={() => {
            setNotes(prev => [...prev, {
              id: Date.now().toString(),
              title: "New Note",
              content: "",
              folder: "General",
              createdAt: new Date()
            }])
          }}
        >
          <Pulse2 size={24} />
        </Button>
      </div>

      {/* Zoomed Note Modal using @heroui/react */}
      <Modal
        isOpen={isModalOpen}
        onOpenChange={onModalOpenChange}
        backdrop="blur"
        radius="lg"
        classNames={{ // Using styles from zoomedsticky.tsx example
          body: "py-6",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] max-w-2xl", // Added max-w-2xl
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => {
            // Handle saving the edited note
            const handleSaveNote = () => {
              if (!selectedNoteData) return;

              setNotes(prevNotes =>
                prevNotes.map(note =>
                  note.id === selectedNoteData.id
                    ? { ...note, title: editingTitle, content: editingContent }
                    : note
                )
              );
              onClose(); // Close the modal after saving
            };

            return (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <Input
                    aria-label="Note Title"
                    variant="underlined"
                    placeholder="Note Title"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    className="text-xl font-bold text-[#a8b0d3]" // Match modal text color
                    classNames={{ input: "text-xl font-bold" }} // Ensure input text matches header style
                  />
                </ModalHeader>
                <ModalBody>
                  <Textarea
                    aria-label="Note Content"
                    variant="faded" // Use a suitable variant
                    placeholder="Enter your note content..."
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    className="min-h-[200px] text-[#a8b0d3]" // Match modal text color
                    classNames={{ input: "resize-y" }} // Allow vertical resize
                  />
                </ModalBody>
                <ModalFooter className="text-sm text-default-400 justify-between">
                  <span>
                    Created: {selectedNoteData?.createdAt.toLocaleDateString()} | Folder: {selectedNoteData?.folder}
                  </span>
                  <div> {/* Group buttons */}
                    <Button color="default" variant="light" onPress={onClose}>
                      Cancel
                    </Button>
                    <Button color="primary" onPress={handleSaveNote} className="ml-2"> {/* Add Save button */}
                      Save
                    </Button>
                  </div>
                </ModalFooter>
              </>
            );
          }}
        </ModalContent>
        {/* Removed duplicated ModalContent and closing tags */}
      </Modal>
    </div>
  );
}
