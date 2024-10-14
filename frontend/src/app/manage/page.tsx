'use client'
import Navbar from '@/components/navbar';
import '../globals.css'
import ManageArticles from "@/components/ManageArticles"

export default function manage() {
    return (
       <main>
        <ManageArticles />
       </main>
    );
}