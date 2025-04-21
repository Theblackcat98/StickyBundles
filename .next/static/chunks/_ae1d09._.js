(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_ae1d09._.js", {

"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StickyNotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // Import useEffect
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@heroui/use-disclosure/dist/index.mjs [app-client] (ecmascript)"); // Import Modal components and hook
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$notes$2f$Document$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/notes/Document.mjs [app-client] (ecmascript) <export default as Document>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$folders$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/folders/Folder.mjs [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$DLH4636X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_default__as__Listbox$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/listbox/dist/chunk-DLH4636X.mjs [app-client] (ecmascript) <export listbox_default as Listbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__ListboxItem$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/listbox/dist/chunk-BJFJ4DRR.mjs [app-client] (ecmascript) <export listbox_item_base_default as ListboxItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$KCYYJJH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/button/dist/chunk-KCYYJJH4.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$medicine$2f$Pulse2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pulse2$3e$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/medicine/Pulse2.mjs [app-client] (ecmascript) <export default as Pulse2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$ui$2f$HamburgerMenu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HamburgerMenu$3e$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/ui/HamburgerMenu.mjs [app-client] (ecmascript) <export default as HamburgerMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/input/dist/chunk-HJTJQZF3.mjs [app-client] (ecmascript) <export input_default as Input>"); // Import Textarea
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$search$2f$Magnifer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Magnifer$3e$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/search/Magnifer.mjs [app-client] (ecmascript) <export default as Magnifer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$MW56SEHC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/card/dist/chunk-MW56SEHC.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/card/dist/chunk-D5XJWRAV.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$TE6SZS6W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_footer_default__as__CardFooter$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/card/dist/chunk-TE6SZS6W.mjs [app-client] (ecmascript) <export card_footer_default as CardFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$3BLMMOBU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/modal/dist/chunk-3BLMMOBU.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/modal/dist/chunk-UKDXCIYN.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/modal/dist/chunk-IGSAU2ZA.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/modal/dist/chunk-FOPEYBSC.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/input/dist/chunk-ORPGD37S.mjs [app-client] (ecmascript) <export textarea_default as Textarea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@heroui/modal/dist/chunk-O5MCAK4F.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function StickyNotes() {
    _s();
    const [isDrawerOpen, setIsDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFolder, setSelectedFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Track selected folder
    // const [zoomedNoteId, setZoomedNoteId] = useState<string | null>(null); // Remove old state
    const { isOpen: isModalOpen, onOpen: openModal, onOpenChange: onModalOpenChange, onClose: closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])(); // Modal state hook, get onClose
    const [selectedNoteData, setSelectedNoteData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // State for modal data
    const [editingTitle, setEditingTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // State for editing title in modal
    const [editingContent, setEditingContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // State for editing content in modal
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Initialize notes as empty, load from localStorage
    const [folders, setFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Initialize folders as empty, load from localStorage
    const [isInitialLoadComplete, setIsInitialLoadComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Flag to prevent saving initial empty state
    // Load notes and folders from localStorage on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyNotes.useEffect": ()=>{
            try {
                const storedNotes = localStorage.getItem("stickyNotes");
                if (storedNotes) {
                    // Parse and convert createdAt back to Date objects
                    const parsedNotes = JSON.parse(storedNotes).map({
                        "StickyNotes.useEffect.parsedNotes": (note)=>({
                                ...note,
                                createdAt: new Date(note.createdAt)
                            })
                    }["StickyNotes.useEffect.parsedNotes"]);
                    setNotes(parsedNotes);
                } else {
                    // Set default notes if nothing is stored
                    setNotes([
                        {
                            id: "1",
                            title: "Welcome Note",
                            content: "This is your first sticky note! Click me to edit.",
                            folder: "General",
                            createdAt: new Date()
                        }
                    ]);
                }
                const storedFolders = localStorage.getItem("stickyFolders");
                if (storedFolders) {
                    setFolders(JSON.parse(storedFolders));
                } else {
                    // Set default folders if nothing is stored
                    setFolders([
                        "General",
                        "Work",
                        "Personal"
                    ]);
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
                        createdAt: new Date()
                    }
                ]);
                setFolders([
                    "General",
                    "Work",
                    "Personal"
                ]);
            } finally{
                setIsInitialLoadComplete(true); // Mark initial load as complete
            }
        }
    }["StickyNotes.useEffect"], []); // Empty dependency array ensures this runs only once on mount
    // Save notes to localStorage whenever they change (after initial load)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyNotes.useEffect": ()=>{
            if (isInitialLoadComplete) {
                try {
                    localStorage.setItem("stickyNotes", JSON.stringify(notes));
                } catch (error) {
                    console.error("Failed to save notes to localStorage:", error);
                }
            }
        }
    }["StickyNotes.useEffect"], [
        notes,
        isInitialLoadComplete
    ]);
    // Save folders to localStorage whenever they change (after initial load)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StickyNotes.useEffect": ()=>{
            if (isInitialLoadComplete) {
                try {
                    localStorage.setItem("stickyFolders", JSON.stringify(folders));
                } catch (error) {
                    console.error("Failed to save folders to localStorage:", error);
                }
            }
        }
    }["StickyNotes.useEffect"], [
        folders,
        isInitialLoadComplete
    ]);
    // Removed duplicated notes state declaration (lines 117-125 from previous file state)
    // const [folders, setFolders] = useState(["General", "Work", "Personal"]); // Managed by useEffect now
    const filteredNotes = notes.filter((note)=>{
        const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFolder = selectedFolder ? note.folder === selectedFolder : true; // Filter by folder if selected
        return matchesSearch && matchesFolder;
    });
    // Combine "All Notes" and existing folders for the Listbox
    const folderItems = [
        {
            key: "all",
            name: "All Notes",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$notes$2f$Document$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__["Document"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 130,
                columnNumber: 44
            }, this)
        },
        ...folders.map((folder)=>({
                key: folder,
                name: folder,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$folders$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 131,
                    columnNumber: 66
                }, this)
            }))
    ];
    // No need for derived zoomedNote variable anymore
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-default-50",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isDrawerOpen ? "w-64" : "w-0"} transition-all duration-300 overflow-hidden`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 h-full border-r border-divider",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$DLH4636X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_default__as__Listbox$3e$__["Listbox"], {
                            "aria-label": "Folders",
                            items: folderItems,
                            selectedKeys: selectedFolder ? [
                                selectedFolder
                            ] : [
                                "all"
                            ],
                            onSelectionChange: (keys)=>{
                                const selectedKey = Array.from(keys)[0];
                                setSelectedFolder(selectedKey === "all" ? null : String(selectedKey));
                            },
                            children: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$listbox$2f$dist$2f$chunk$2d$BJFJ4DRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__ListboxItem$3e$__["ListboxItem"], {
                                    startContent: item.icon,
                                    children: item.name
                                }, item.key, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$KCYYJJH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            className: "mt-4",
                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$medicine$2f$Pulse2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pulse2$3e$__["Pulse2"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 160,
                                columnNumber: 50
                            }, void 0),
                            children: "New Folder"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "p-4 border-b border-divider flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$KCYYJJH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                isIconOnly: true,
                                onPress: ()=>setIsDrawerOpen(!isDrawerOpen),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$ui$2f$HamburgerMenu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HamburgerMenu$3e$__["HamburgerMenu"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                placeholder: "Search notes...",
                                startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$search$2f$Magnifer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Magnifer$3e$__["Magnifer"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 27
                                }, void 0),
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "max-w-md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 p-6 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: filteredNotes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$MW56SEHC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                                    isPressable: true,
                                    className: "h-48 cursor-pointer hover:shadow-lg transition-shadow flex flex-col" // Added flex flex-col
                                    ,
                                    onPress: ()=>{
                                        setSelectedNoteData(note);
                                        setEditingTitle(note.title); // Set editing state when opening
                                        setEditingContent(note.content); // Set editing state when opening
                                        openModal();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$D5XJWRAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                            className: "font-semibold overflow-hidden text-ellipsis whitespace-nowrap",
                                            children: [
                                                " ",
                                                note.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$LGSBTEIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                            className: "text-sm text-default-500 overflow-hidden flex-grow",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "line-clamp-5",
                                                    children: note.content
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$TE6SZS6W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_footer_default__as__CardFooter$3e$__["CardFooter"], {
                                            className: "text-xs text-default-400 mt-auto",
                                            children: [
                                                " ",
                                                note.createdAt.toLocaleDateString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, note.id, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$KCYYJJH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        isIconOnly: true,
                        color: "primary",
                        className: "fixed bottom-6 right-6",
                        onPress: ()=>{
                            setNotes((prev)=>[
                                    ...prev,
                                    {
                                        id: Date.now().toString(),
                                        title: "New Note",
                                        content: "",
                                        folder: "General",
                                        createdAt: new Date()
                                    }
                                ]);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$medicine$2f$Pulse2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pulse2$3e$__["Pulse2"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$3BLMMOBU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                isOpen: isModalOpen,
                onOpenChange: onModalOpenChange,
                backdrop: "blur",
                radius: "lg",
                classNames: {
                    body: "py-6",
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] max-w-2xl",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                    closeButton: "hover:bg-white/5 active:bg-white/10"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$UKDXCIYN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                    children: (onClose)=>{
                        // Handle saving the edited note
                        const handleSaveNote = ()=>{
                            if (!selectedNoteData) return;
                            setNotes((prevNotes)=>prevNotes.map((note)=>note.id === selectedNoteData.id ? {
                                        ...note,
                                        title: editingTitle,
                                        content: editingContent
                                    } : note));
                            onClose(); // Close the modal after saving
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$IGSAU2ZA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                    className: "flex flex-col gap-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$HJTJQZF3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        "aria-label": "Note Title",
                                        variant: "underlined",
                                        placeholder: "Note Title",
                                        value: editingTitle,
                                        onChange: (e)=>setEditingTitle(e.target.value),
                                        className: "text-xl font-bold text-[#a8b0d3]" // Match modal text color
                                        ,
                                        classNames: {
                                            input: "text-xl font-bold"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$FOPEYBSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$ORPGD37S$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__["Textarea"], {
                                        "aria-label": "Note Content",
                                        variant: "faded" // Use a suitable variant
                                        ,
                                        placeholder: "Enter your note content...",
                                        value: editingContent,
                                        onChange: (e)=>setEditingContent(e.target.value),
                                        className: "min-h-[200px] text-[#a8b0d3]" // Match modal text color
                                        ,
                                        classNames: {
                                            input: "resize-y"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$modal$2f$dist$2f$chunk$2d$O5MCAK4F$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                                    className: "text-sm text-default-400 justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Created: ",
                                                selectedNoteData?.createdAt.toLocaleDateString(),
                                                " | Folder: ",
                                                selectedNoteData?.folder
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$KCYYJJH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                    color: "default",
                                                    variant: "light",
                                                    onPress: onClose,
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$KCYYJJH4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                    color: "primary",
                                                    onPress: handleSaveNote,
                                                    className: "ml-2",
                                                    children: [
                                                        " ",
                                                        "Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true);
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(StickyNotes, "x0tw8eooO1+WsXPVKvN6d1UaEp4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"]
    ];
});
_c = StickyNotes;
var _c;
__turbopack_refresh__.register(_c, "StickyNotes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/lib/context.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SolarProvider": (()=>E),
    "useSolar": (()=>L)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var V = Object.defineProperty;
var u = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var n = (o, e, t)=>e in o ? V(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, r = (o, e)=>{
    for(var t in e || (e = {}))m.call(e, t) && n(o, t, e[t]);
    if (u) for (var t of u(e))x.call(e, t) && n(o, t, e[t]);
    return o;
};
;
const l = {
    color: "currentColor",
    size: "1em",
    weight: "Linear",
    mirrored: !1
}, S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    value: l,
    setValue: ()=>{},
    setSvgProps: ()=>{}
}), E = ({ children: o, value: e = l, svgProps: t = {} })=>{
    const [p, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(r(r({}, l), e)), [P, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t), i = (s)=>{
        v((a)=>r(r({}, a), s));
    }, d = (s)=>{
        g((a)=>r(r({}, a), s));
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(S.Provider, {
        value: {
            value: p,
            svgProps: P,
            setValue: i,
            setSvgProps: d
        }
    }, o);
}, L = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(S);
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/lib/IconBase.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>S)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/lib/context.mjs [app-client] (ecmascript)");
var I = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var m = (e, t, r)=>t in e ? I(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, s = (e, t)=>{
    for(var r in t || (t = {}))d.call(t, r) && m(e, r, t[r]);
    if (l) for (var r of l(t))f.call(t, r) && m(e, r, t[r]);
    return e;
};
var g = (e, t)=>{
    var r = {};
    for(var o in e)d.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
    if (e != null && l) for (var o of l(e))t.indexOf(o) < 0 && f.call(e, o) && (r[o] = e[o]);
    return r;
};
;
;
const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((e, t)=>{
    const i = e, { alt: r, color: o, size: n, weight: a, mirrored: h, children: p, weights: x } = i, u = g(i, [
        "alt",
        "color",
        "size",
        "weight",
        "mirrored",
        "children",
        "weights"
    ]), { value: { color: v = "currentColor", size: c, weight: B = "Linear", mirrored: C = !1 }, svgProps: E } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSolar"])();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", s(s({
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: n != null ? n : c,
        height: n != null ? n : c,
        color: o != null ? o : v,
        fill: "none",
        viewBox: "0 0 24 24",
        transform: h || C ? "scale(-1, 1)" : void 0
    }, E), u), !!r && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, r), p, x.get(a != null ? a : B));
});
S.displayName = "IconBase";
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/defs/notes/Document.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>C)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const C = /* @__PURE__ */ new Map([
    [
        "Bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75H16C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25H8ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13C13.4142 14.75 13.75 14.4142 13.75 14C13.75 13.5858 13.4142 13.25 13 13.25H8Z",
            fill: "currentColor"
        }))
    ],
    [
        "BoldDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H13C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z",
            fill: "currentColor"
        }))
    ],
    [
        "Broken",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M8 14H13",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M8 10H9M16 10H12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Linear",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M8 10H16",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M8 14H13",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "LineDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M8 10H16",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M8 14H13",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Outline",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.9436 1.25H13.0564C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65019 21.75 8.10583 21.75 9.94359V14.0564C21.75 15.8942 21.75 17.3498 21.5969 18.489C21.4392 19.6614 21.1071 20.6104 20.3588 21.3588C19.6104 22.1071 18.6614 22.4392 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0564 22.75H10.9436C9.10583 22.75 7.65019 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V9.94358C2.24998 8.10582 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25ZM6.71085 2.88976C5.70476 3.02502 5.12511 3.27869 4.7019 3.7019C4.27869 4.12511 4.02502 4.70476 3.88976 5.71085C3.75159 6.73851 3.75 8.09318 3.75 10V14C3.75 15.9068 3.75159 17.2615 3.88976 18.2892C4.02502 19.2952 4.27869 19.8749 4.7019 20.2981C5.12511 20.7213 5.70476 20.975 6.71085 21.1102C7.73851 21.2484 9.09318 21.25 11 21.25H13C14.9068 21.25 16.2615 21.2484 17.2892 21.1102C18.2952 20.975 18.8749 20.7213 19.2981 20.2981C19.7213 19.8749 19.975 19.2952 20.1102 18.2892C20.2484 17.2615 20.25 15.9068 20.25 14V10C20.25 8.09318 20.2484 6.73851 20.1102 5.71085C19.975 4.70476 19.7213 4.12511 19.2981 3.7019C18.8749 3.27869 18.2952 3.02502 17.2892 2.88976C16.2615 2.75159 14.9068 2.75 13 2.75H11C9.09318 2.75 7.73851 2.75159 6.71085 2.88976ZM7.25 10C7.25 9.58579 7.58579 9.25 8 9.25H16C16.4142 9.25 16.75 9.58579 16.75 10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H13C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14Z",
            fill: "currentColor"
        }))
    ]
]);
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/notes/Document.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>D)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/lib/IconBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$notes$2f$Document$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/defs/notes/Document.mjs [app-client] (ecmascript)");
var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (o, e, t)=>e in o ? f(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : o[e] = t, a = (o, e)=>{
    for(var t in e || (e = {}))p.call(e, t) && r(o, t, e[t]);
    if (m) for (var t of m(e))s.call(e, t) && r(o, t, e[t]);
    return o;
}, c = (o, e)=>i(o, n(e));
;
;
;
const D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((o, e)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], c(a({
        ref: e
    }, o), {
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$notes$2f$Document$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    })));
D.displayName = "Document";
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/notes/Document.mjs [app-client] (ecmascript) <export default as Document>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Document": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$notes$2f$Document$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$notes$2f$Document$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/notes/Document.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/defs/folders/Folder.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const t = /* @__PURE__ */ new Map([
    [
        "Bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839ZM12.25 10C12.25 9.58579 12.5858 9.25 13 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z",
            fill: "currentColor"
        }))
    ],
    [
        "BoldDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M22 14V11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M12.25 10C12.25 9.58579 12.5858 9.25 13 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z",
            fill: "currentColor"
        }))
    ],
    [
        "Broken",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18 10L13 10",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M22 11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975M21.9913 16C21.9554 18.4796 21.7715 19.8853 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V11",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Linear",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18 10L13 10",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }))
    ],
    [
        "LineDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M18 10L13 10",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }))
    ],
    [
        "Outline",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.85929 1.25001C6.88904 1.25001 6.91919 1.25002 6.94976 1.25002L6.98675 1.25001C7.33818 1.24999 7.56433 1.24998 7.78542 1.27065C8.7367 1.35961 9.63905 1.73337 10.3746 2.34313C10.5456 2.48485 10.7055 2.64477 10.954 2.89329L11.5303 3.46969C12.3761 4.3154 12.7012 4.6311 13.0768 4.84005C13.2948 4.96134 13.526 5.05713 13.766 5.12552C14.1793 5.24333 14.6324 5.25002 15.8284 5.25002L16.253 5.25002C17.526 5.25 18.5521 5.24998 19.364 5.35206C20.2054 5.45784 20.9204 5.68358 21.5077 6.21185C21.6061 6.30032 21.6997 6.39394 21.7882 6.49231C22.3165 7.07965 22.5422 7.79459 22.648 8.63601C22.75 9.4479 22.75 10.4741 22.75 11.747V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4393 19.6615 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6615 22.4393 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94361C8.10584 22.75 6.65021 22.75 5.51099 22.5969C4.33857 22.4393 3.38962 22.1071 2.64126 21.3588C1.8929 20.6104 1.56078 19.6615 1.40315 18.489C1.24999 17.3498 1.25 15.8942 1.25002 14.0564L1.25002 6.94976C1.25002 6.91919 1.25001 6.88904 1.25001 6.85929C1.2499 6.06338 1.24982 5.55685 1.33237 5.11935C1.6949 3.19788 3.19788 1.6949 5.11935 1.33237C5.55685 1.24982 6.06338 1.2499 6.85929 1.25001ZM6.94976 2.75002C6.03312 2.75002 5.67873 2.75329 5.39746 2.80636C4.08277 3.05441 3.05441 4.08277 2.80636 5.39746C2.75329 5.67873 2.75002 6.03312 2.75002 6.94976V14C2.75002 15.9068 2.75161 17.2615 2.88978 18.2892C3.02504 19.2953 3.27871 19.8749 3.70192 20.2981C4.12513 20.7213 4.70478 20.975 5.71087 21.1103C6.73853 21.2484 8.0932 21.25 10 21.25H14C15.9068 21.25 17.2615 21.2484 18.2892 21.1103C19.2953 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2953 21.1103 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14V11.7979C21.25 10.4621 21.2486 9.5305 21.1597 8.82312C21.0731 8.13448 20.9141 7.76356 20.6729 7.49539C20.6198 7.43637 20.5637 7.3802 20.5046 7.32712C20.2365 7.08592 19.8656 6.92692 19.1769 6.84034C18.4695 6.75141 17.538 6.75002 16.2021 6.75002H15.8284C15.7912 6.75002 15.7545 6.75002 15.7182 6.75003C14.6702 6.75025 13.9944 6.75038 13.3548 6.56806C13.0041 6.46811 12.6661 6.32811 12.3475 6.15083C11.7663 5.82747 11.2885 5.3495 10.5476 4.60833C10.522 4.58265 10.496 4.55666 10.4697 4.53035L9.91943 3.98009C9.63616 3.69682 9.52778 3.58951 9.41731 3.49793C8.91403 3.08073 8.29664 2.825 7.64576 2.76413C7.50289 2.75077 7.35038 2.75002 6.94976 2.75002ZM12.25 10C12.25 9.5858 12.5858 9.25002 13 9.25002H18C18.4142 9.25002 18.75 9.5858 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10Z",
            fill: "currentColor"
        }))
    ]
]);
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/folders/Folder.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>R)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/lib/IconBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$folders$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/defs/folders/Folder.mjs [app-client] (ecmascript)");
var d = Object.defineProperty, i = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, r)=>e in o ? d(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : o[e] = r, m = (o, e)=>{
    for(var r in e || (e = {}))p.call(e, r) && a(o, r, e[r]);
    if (t) for (var r of t(e))s.call(e, r) && a(o, r, e[r]);
    return o;
}, f = (o, e)=>i(o, l(e));
;
;
;
const R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((o, e)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], f(m({
        ref: e
    }, o), {
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$folders$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    })));
R.displayName = "Folder";
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/folders/Folder.mjs [app-client] (ecmascript) <export default as Folder>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Folder": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$folders$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$folders$2f$Folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/folders/Folder.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/defs/medicine/Pulse2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const t = /* @__PURE__ */ new Map([
    [
        "Bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 12.8185 2 13.5659 2.00767 14.25H5L5.10773 14.2499C5.63376 14.2491 6.10075 14.2483 6.52918 14.4319C6.9576 14.6155 7.27913 14.9542 7.64131 15.3357L7.71552 15.4138L8.85712 16.6125C8.93865 16.6981 9.00536 16.7681 9.06418 16.8277C9.11449 16.7607 9.17125 16.6825 9.24061 16.5867L12.8944 11.5435C13.0432 11.3379 13.1985 11.1233 13.3518 10.9653C13.5272 10.7844 13.7992 10.5708 14.1937 10.5527C14.5882 10.5346 14.8787 10.7223 15.0699 10.8863C15.2371 11.0297 15.4114 11.229 15.5785 11.4201L17.3823 13.4816C17.868 14.0368 17.9718 14.1316 18.085 14.183C18.1982 14.2343 18.3379 14.25 19.0756 14.25H21.9923C22 13.5659 22 12.8185 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M21.9563 15.75H19.0756L18.9615 15.7501C18.4059 15.751 17.9125 15.7519 17.4652 15.5489C17.0179 15.346 16.6936 14.9741 16.3285 14.5553L16.2534 14.4694L14.4761 12.4382C14.395 12.3454 14.3284 12.2694 14.2697 12.2046C14.2171 12.2746 14.1578 12.3563 14.0855 12.4561L10.4324 17.4984C10.2894 17.696 10.1391 17.9035 9.99032 18.0574C9.8191 18.2345 9.55618 18.4416 9.17422 18.4672C8.79226 18.4929 8.50402 18.3227 8.31067 18.1701C8.1426 18.0375 7.96597 17.8519 7.79786 17.6753L6.62931 16.4483C6.14838 15.9433 6.04684 15.8572 5.9383 15.8106C5.82976 15.7641 5.69734 15.75 5 15.75H2.0437C2.1409 18.0904 2.45425 19.5253 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.5458 19.5253 21.8591 18.0904 21.9563 15.75Z",
            fill: "currentColor"
        }))
    ],
    [
        "BoldDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 12.8185 2 13.5659 2.00767 14.25H5L5.10773 14.2499C5.63376 14.2491 6.10075 14.2483 6.52918 14.4319C6.9576 14.6155 7.27913 14.9542 7.64131 15.3357L7.71552 15.4138L8.85712 16.6125C8.9656 16.7264 9.14832 16.7141 9.24061 16.5867L12.8944 11.5435C13.0432 11.3379 13.1985 11.1233 13.3518 10.9653C13.5272 10.7844 13.7992 10.5708 14.1937 10.5527C14.5882 10.5346 14.8787 10.7223 15.0699 10.8863C15.2371 11.0297 15.4114 11.229 15.5785 11.4201L17.3823 13.4816C17.868 14.0368 17.9718 14.1316 18.085 14.183C18.1982 14.2343 18.3379 14.25 19.0756 14.25H21.9923C22 13.5659 22 12.8185 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M2.00781 14.2498C2.0443 17.5054 2.25442 19.3251 3.46461 20.5353C4.92908 21.9998 7.2861 21.9998 12.0001 21.9998C16.7142 21.9998 19.0712 21.9998 20.5357 20.5353C21.7459 19.3251 21.956 17.5054 21.9925 14.2498H19.0757C18.3381 14.2498 18.1984 14.2341 18.0852 14.1828C17.972 14.1314 17.8682 14.0366 17.3824 13.4814L15.5786 11.4199C15.4115 11.2288 15.2372 11.0294 15.07 10.8861C14.8788 10.7221 14.5884 10.5344 14.1939 10.5525C13.7994 10.5706 13.5274 10.7842 13.352 10.965C13.1987 11.1231 13.0434 11.3376 12.8945 11.5433L9.24075 16.5865C9.14847 16.7139 8.96574 16.7262 8.85727 16.6123L7.71566 15.4136L7.64145 15.3355C7.27927 14.954 6.95775 14.6153 6.52932 14.4317C6.1009 14.2481 5.63391 14.2488 5.10787 14.2497L5.00015 14.2498H2.00781Z",
            fill: "currentColor"
        }))
    ],
    [
        "Broken",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M2 15.0002H5C5.63383 15.0002 5.95074 15.0002 6.23374 15.1215C6.51673 15.2428 6.73529 15.4723 7.17241 15.9313L8.31402 17.13C8.69807 17.5332 8.8901 17.7348 9.12399 17.7191C9.35788 17.7035 9.52124 17.478 9.84796 17.027L13.4781 12.0163C13.8177 11.5476 13.9875 11.3132 14.2282 11.3022C14.4688 11.2911 14.6594 11.5089 15.0405 11.9445L16.8179 13.9758C17.2591 14.48 17.4797 14.7321 17.7751 14.8662C18.0705 15.0002 18.4056 15.0002 19.0756 15.0002H22",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Linear",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M2 15.0002H5C5.63383 15.0002 5.95074 15.0002 6.23374 15.1215C6.51673 15.2428 6.73529 15.4723 7.17241 15.9313L8.31402 17.13C8.69807 17.5332 8.8901 17.7348 9.12399 17.7191C9.35788 17.7035 9.52124 17.478 9.84796 17.027L13.4781 12.0163C13.8177 11.5476 13.9875 11.3132 14.2282 11.3022C14.4688 11.2911 14.6594 11.5089 15.0405 11.9445L16.8179 13.9758C17.2591 14.48 17.4797 14.7321 17.7751 14.8662C18.0705 15.0002 18.4056 15.0002 19.0756 15.0002H22",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }))
    ],
    [
        "LineDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M2 15.0002H5C5.63383 15.0002 5.95074 15.0002 6.23374 15.1215C6.51673 15.2428 6.73529 15.4723 7.17241 15.9313L8.31402 17.13C8.69807 17.5332 8.8901 17.7348 9.12399 17.7191C9.35788 17.7035 9.52124 17.478 9.84796 17.027L13.4781 12.0163C13.8177 11.5476 13.9875 11.3132 14.2282 11.3022C14.4688 11.2911 14.6594 11.5089 15.0405 11.9445L16.8179 13.9758C17.2591 14.48 17.4797 14.7321 17.7751 14.8662C18.0705 15.0002 18.4056 15.0002 19.0756 15.0002H22",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }))
    ],
    [
        "Outline",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.4137 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 13.081 1.24999 14.0065 1.26653 14.8426C1.2557 14.8934 1.25 14.946 1.25 15C1.25 15.066 1.25854 15.1301 1.27457 15.1911C1.29857 16.0947 1.346 16.889 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.4137 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.654 16.889 22.7014 16.0947 22.7254 15.1911C22.7415 15.1301 22.75 15.066 22.75 15C22.75 14.946 22.7443 14.8934 22.7335 14.8427C22.75 14.0065 22.75 13.081 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM21.2422 14.25C21.2498 13.5738 21.25 12.8274 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 12.8274 2.75019 13.5738 2.75781 14.25H5L5.10773 14.2499C5.63376 14.2491 6.10075 14.2483 6.52918 14.4319C6.9576 14.6155 7.27913 14.9542 7.64131 15.3357L7.71552 15.4138L8.85712 16.6125C8.93865 16.6981 9.00536 16.7681 9.06418 16.8277C9.11449 16.7607 9.17125 16.6825 9.24061 16.5867L12.8944 11.5435C13.0432 11.3379 13.1985 11.1233 13.3518 10.9653C13.5272 10.7844 13.7992 10.5708 14.1937 10.5527C14.5882 10.5346 14.8787 10.7223 15.0699 10.8863C15.2371 11.0297 15.4114 11.229 15.5785 11.4201L17.3823 13.4816C17.868 14.0368 17.9718 14.1316 18.085 14.183C18.1982 14.2343 18.3379 14.25 19.0756 14.25H21.2422ZM2.79427 15.75C2.82018 16.3612 2.86126 16.9021 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.1387 16.9021 21.1798 16.3612 21.2057 15.75H19.0756L18.9615 15.7501C18.4059 15.751 17.9125 15.7519 17.4652 15.5489C17.0179 15.346 16.6936 14.9741 16.3285 14.5553L16.2534 14.4694L14.4761 12.4382C14.395 12.3454 14.3284 12.2694 14.2697 12.2046C14.2171 12.2746 14.1578 12.3563 14.0855 12.4561L10.4324 17.4984C10.2894 17.696 10.1391 17.9035 9.99032 18.0574C9.8191 18.2345 9.55618 18.4416 9.17422 18.4672C8.79226 18.4929 8.50402 18.3227 8.31067 18.1701C8.14262 18.0375 7.966 17.8519 7.7979 17.6753L6.62931 16.4483C6.14838 15.9433 6.04684 15.8572 5.9383 15.8106C5.82976 15.7641 5.69734 15.75 5 15.75H2.79427Z",
            fill: "currentColor"
        }))
    ]
]);
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/medicine/Pulse2.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>P)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/lib/IconBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$medicine$2f$Pulse2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/defs/medicine/Pulse2.mjs [app-client] (ecmascript)");
var f = Object.defineProperty, i = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (o, e, r)=>e in o ? f(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : o[e] = r, m = (o, e)=>{
    for(var r in e || (e = {}))p.call(e, r) && a(o, r, e[r]);
    if (t) for (var r of t(e))c.call(e, r) && a(o, r, e[r]);
    return o;
}, s = (o, e)=>i(o, l(e));
;
;
;
const P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((o, e)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], s(m({
        ref: e
    }, o), {
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$medicine$2f$Pulse2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    })));
P.displayName = "Pulse2";
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/medicine/Pulse2.mjs [app-client] (ecmascript) <export default as Pulse2>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Pulse2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$medicine$2f$Pulse2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$medicine$2f$Pulse2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/medicine/Pulse2.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/defs/ui/HamburgerMenu.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const r = /* @__PURE__ */ new Map([
    [
        "Bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z",
            fill: "currentColor"
        }))
    ],
    [
        "BoldDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16Z",
            fill: "currentColor"
        }))
    ],
    [
        "Broken",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M4 7L7 7M20 7L11 7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M20 17H17M4 17L13 17",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M4 12H7L20 12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Linear",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M20 7L4 7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M20 12L4 12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M20 17L4 17",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "LineDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M20 7L4 7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M20 12L4 12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M20 17L4 17",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Outline",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z",
            fill: "currentColor"
        }))
    ]
]);
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/ui/HamburgerMenu.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>b)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/lib/IconBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$ui$2f$HamburgerMenu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/defs/ui/HamburgerMenu.mjs [app-client] (ecmascript)");
var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var o = (r, e, a)=>e in r ? i(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : r[e] = a, t = (r, e)=>{
    for(var a in e || (e = {}))s.call(e, a) && o(r, a, e[a]);
    if (m) for (var a of m(e))u.call(e, a) && o(r, a, e[a]);
    return r;
}, f = (r, e)=>n(r, p(e));
;
;
;
const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((r, e)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], f(t({
        ref: e
    }, r), {
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$ui$2f$HamburgerMenu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    })));
b.displayName = "HamburgerMenu";
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/ui/HamburgerMenu.mjs [app-client] (ecmascript) <export default as HamburgerMenu>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HamburgerMenu": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$ui$2f$HamburgerMenu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$ui$2f$HamburgerMenu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/ui/HamburgerMenu.mjs [app-client] (ecmascript)");
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/defs/search/Magnifer.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const r = /* @__PURE__ */ new Map([
    [
        "Bold",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.7883 21.7883C22.0706 21.506 22.0706 21.0483 21.7883 20.7659L18.1224 17.1002C19.4884 15.5007 20.3133 13.425 20.3133 11.1566C20.3133 6.09956 16.2137 2 11.1566 2C6.09956 2 2 6.09956 2 11.1566C2 16.2137 6.09956 20.3133 11.1566 20.3133C13.4249 20.3133 15.5006 19.4885 17.1 18.1225L20.7659 21.7883C21.0483 22.0706 21.506 22.0706 21.7883 21.7883Z",
            fill: "currentColor"
        }))
    ],
    [
        "BoldDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            opacity: "0.5",
            d: "M20.3133 11.1566C20.3133 16.2137 16.2137 20.3133 11.1566 20.3133C6.09956 20.3133 2 16.2137 2 11.1566C2 6.09956 6.09956 2 11.1566 2C16.2137 2 20.3133 6.09956 20.3133 11.1566Z",
            fill: "currentColor"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M17.1001 18.1219L20.7664 21.7882C21.0487 22.0705 21.5064 22.0705 21.7887 21.7882C22.071 21.5059 22.071 21.0482 21.7887 20.7659L18.1224 17.0996C17.809 17.4666 17.4671 17.8085 17.1001 18.1219Z",
            fill: "currentColor"
        }))
    ],
    [
        "Broken",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18.5 18.5L22 22",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M6.75 3.27093C8.14732 2.46262 9.76964 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 9.76964 2.46262 8.14732 3.27093 6.75",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Linear",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
            cx: "11.5",
            cy: "11.5",
            r: "9.5",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18.5 18.5L22 22",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "LineDuotone",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("circle", {
            cx: "11.5",
            cy: "11.5",
            r: "9.5",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            d: "M18.5 18.5L22 22",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }))
    ],
    [
        "Outline",
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z",
            fill: "currentColor"
        }))
    ]
]);
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/search/Magnifer.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>M)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/lib/IconBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$search$2f$Magnifer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/defs/search/Magnifer.mjs [app-client] (ecmascript)");
var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, a)=>e in r ? i(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : r[e] = a, f = (r, e)=>{
    for(var a in e || (e = {}))s.call(e, a) && t(r, a, e[a]);
    if (o) for (var a of o(e))c.call(e, a) && t(r, a, e[a]);
    return r;
}, m = (r, e)=>n(r, p(e));
;
;
;
const M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((r, e)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$lib$2f$IconBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], m(f({
        ref: e
    }, r), {
        weights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$defs$2f$search$2f$Magnifer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    })));
M.displayName = "Magnifer";
;
}}),
"[project]/node_modules/@solar-icons/react/dist/esm/csr/search/Magnifer.mjs [app-client] (ecmascript) <export default as Magnifer>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Magnifer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$search$2f$Magnifer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solar$2d$icons$2f$react$2f$dist$2f$esm$2f$csr$2f$search$2f$Magnifer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@solar-icons/react/dist/esm/csr/search/Magnifer.mjs [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_ae1d09._.js.map