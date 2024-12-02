// Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard } from 'react-icons/md';
import { SiHotelsdotcom } from 'react-icons/si';

interface SidebarProps {
  onSelect: (title: string) => void;
}

const Sidebar = ({ onSelect }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div>
      <nav>
        <ul>
          <li className={pathname === '/dashboard' ? 'active' : ''}>
            <Link href="/dashboard" onClick={() => onSelect('Dashboard')}>
              <MdDashboard />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className={pathname === '/dashboard/liste' ? 'active' : ''}>
            <Link href="/dashboard/liste" onClick={() => onSelect('Liste des hôtels')}>
              <SiHotelsdotcom />
              <span>Liste des hôtels</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
