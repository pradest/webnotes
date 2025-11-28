"use client"; // Wajib: Client Component

import { useState, useEffect } from 'react';

interface BannerWrapperProps {
  children: React.ReactNode;
  storageKey: string; // Kita butuh key yang sama dengan Banner
}

export function BannerWrapper({ children, storageKey }: BannerWrapperProps) {
  // Default false (hidden) supaya tidak ada flash saat loading
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cek apakah key ini ada di localStorage
    const isDismissed = localStorage.getItem(storageKey);

    // Hanya tampilkan jika BELUM ada di localStorage (belum di-dismiss)
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, [storageKey]);

  // Jika tidak visible, jangan render apapun (return null)
  if (!isVisible) return null; 

  return <>{children}</>;
}