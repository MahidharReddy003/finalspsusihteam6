import React, { createContext, useContext, useState } from 'react';
import { X, Menu } from 'lucide-react';

// Sidebar Context
const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

// Sidebar Components
export function Sidebar({ children, className = '' }) {
  const { isOpen } = useSidebar();

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static ${className}`}>
      {children}
    </aside>
  );
}

export function SidebarHeader({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function SidebarContent({ children, className = '' }) {
  return (
    <div className={`flex-1 overflow-y-auto ${className}`}>
      {children}
    </div>
  );
}

export function SidebarFooter({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function SidebarGroup({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function SidebarGroupLabel({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function SidebarGroupContent({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function SidebarMenu({ children, className = '' }) {
  return (
    <nav className={`${className}`}>
      {children}
    </nav>
  );
}

export function SidebarMenuItem({ children, className = '' }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

export function SidebarMenuButton({ children, asChild = false, className = '', ...props }) {
  const Component = asChild ? 'div' : 'button';
  
  return (
    <Component className={`w-full text-left ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function SidebarTrigger({ className = '' }) {
  const { setIsOpen } = useSidebar();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className={`md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 ${className}`}
    >
      <Menu className="w-5 h-5" />
    </button>
  );
}

// Overlay for mobile
export function SidebarOverlay() {
  const { isOpen, setIsOpen } = useSidebar();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      onClick={() => setIsOpen(false)}
    />
  );
}
