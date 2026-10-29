import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
  id: {
    // Navigation
    appTitle: "📒 Aplikasi Catatan",
    addNote: "Tambah Catatan",
    archive: "Arsip",
    logout: "Keluar",
    
    // Pages
    activeNotes: "Catatan Aktif",
    archivedNotes: "Catatan Arsip",
    addNewNote: "Tambah Catatan Baru",
    
    // Form
    noteTitle: "Judul catatan...",
    noteBody: "Tuliskan catatan Anda di sini...",
    save: "Simpan",
    
    // Auth
    login: "Login",
    register: "Daftar",
    email: "Email",
    password: "Password",
    fullName: "Nama Lengkap",
    noAccount: "Belum punya akun?",
    haveAccount: "Sudah punya akun?",
    registerHere: "Daftar di sini",
    loginHere: "Login di sini",
    
    // Messages
    loading: "Memuat...",
    loadingNotes: "Memuat catatan...",
    loadingArchive: "Memuat arsip...",
    noNotes: "Tidak ada catatan",
    noSearchResults: "Tidak ada hasil pencarian",
    emptyArchive: "Arsip kosong",
    notFound: "Catatan tidak ditemukan",
    deleteConfirm: "Yakin ingin menghapus catatan ini?",
    
    // Empty State
    notFoundTitle: "Tidak Ditemukan",
    notFoundMessage: "Tidak ada catatan yang cocok dengan pencarian '{keyword}'",
    noNotesTitle: "Belum Ada Catatan",
    noNotesMessage: "Mulai buat catatan pertama Anda dengan klik tombol + di atas",
    emptyArchiveTitle: "Arsip Kosong",
    emptyArchiveMessage: "Belum ada catatan yang diarsipkan",
    clearSearch: "Hapus Pencarian",
    
    // Actions
    delete: "Hapus",
    archiveAction: "Arsipkan",
    unarchive: "Batal Arsip",
    createdAt: "Dibuat pada:",
    
    // Search
    searchPlaceholder: "Cari catatan berdasarkan judul...",

    //Edit
    editNote: "Edit Catatan",
    edit: "Edit",
    saving: "Menyimpan...",
    cancel: "Batal",
    
    // 404
    pageNotFoundMessage: "Maaf, halaman yang Anda cari tidak dapat ditemukan.",
    backToHome: "Kembali ke Beranda",
  },
  en: {
    // Navigation
    appTitle: "📒 Notes App",
    addNote: "Add Note",
    archive: "Archive",
    logout: "Logout",
    
    // Pages
    activeNotes: "Active Notes",
    archivedNotes: "Archived Notes",
    addNewNote: "Add New Note",
    
    // Form
    noteTitle: "Note title...",
    noteBody: "Write your note here...",
    save: "Save",
    
    // Auth
    login: "Login",
    register: "Register",
    email: "Email",
    password: "Password",
    fullName: "Full Name",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    registerHere: "Register here",
    loginHere: "Login here",
    
    // Messages
    loading: "Loading...",
    loadingNotes: "Loading notes...",
    loadingArchive: "Loading archive...",
    noNotes: "No notes",
    noSearchResults: "No search results found",
    emptyArchive: "Archive is empty",
    notFound: "Note not found",
    deleteConfirm: "Are you sure you want to delete this note?",
    
    // Empty State
    notFoundTitle: "Not Found",
    notFoundMessage: "No notes match your search for '{keyword}'",
    noNotesTitle: "No Notes Yet",
    noNotesMessage: "Start creating your first note by clicking the + button above",
    emptyArchiveTitle: "Empty Archive",
    emptyArchiveMessage: "No archived notes yet",
    clearSearch: "Clear Search",
    
    // Actions
    delete: "Delete",
    archiveAction: "Archive",
    unarchive: "Unarchive",
    createdAt: "Created at:",
    
    // Search
    searchPlaceholder: "Search notes by title...",

    // Edit
    editNote: "Edit Note",
    edit: "Edit",
    saving: "Saving...",
    cancel: "Cancel",
    
    // 404
    pageNotFoundMessage: "Sorry, the page you are looking for cannot be found.",
    backToHome: "Back to Home",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "id";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}