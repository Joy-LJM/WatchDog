import { Metadata } from 'next';
import React from 'react'
import ManageSites from './ManageSites';

export const metadata: Metadata = {
  title: "TimeLock - Manage Sites",
  description: "Add a site to your TimeLock list",
};
export default function Page() {

  return      <ManageSites/>

}
