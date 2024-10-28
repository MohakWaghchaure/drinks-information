'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";


export default function Home() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <HeroSection></HeroSection>
      <SearchSection></SearchSection>
      <div className="footer">Designed and Built by <a href='https://mohakwaghchaure.github.io/portfolio/'>Mohak Sunil Waghchaure</a></div>
    </div>
  );
}
