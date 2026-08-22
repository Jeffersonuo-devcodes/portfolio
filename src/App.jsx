import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'

import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Engineering from './pages/Engineering'
import EngineeringArticle from './pages/EngineeringArticle'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Curio from './pages/work/Curio'
import ShelfSafe from './pages/work/ShelfSafe'
import StreetReads from './pages/work/StreetReads'
import Iklothing from './pages/work/Iklothing'

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/curio" element={<Curio />} />
              <Route path="/work/shelfsafe" element={<ShelfSafe />} />
              <Route path="/work/street-reads" element={<StreetReads />} />
              <Route path="/work/iklothing" element={<Iklothing />} />
              <Route path="/about" element={<About />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/engineering/:slug" element={<EngineeringArticle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
