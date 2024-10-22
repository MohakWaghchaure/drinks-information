'use client';
import react, { useState } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import Modal from "@/components/Modal";


export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const closeModalHander = ()=>{
    setOpenModal(false);
  }
  const openModalHander = ()=>{
    setOpenModal(true);
  }
  return (
    <div className="page-wrapper">
      <Header></Header>
      <HeroSection></HeroSection>
      <SearchSection></SearchSection>
    </div>
  );
}
