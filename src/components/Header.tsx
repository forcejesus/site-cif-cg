
import React, { useState, useEffect } from 'react';
import { Menu, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import MembershipDialog from './MembershipDialog';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMembershipDialogOpen, setIsMembershipDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (item: string) => {
    if (item === 'Devenir membre') {
      setIsMembershipDialogOpen(true);
    } else {
      toast({
        title: "📋 Page en cours de développement",
        description: `La page "${item}" est actuellement en développement et sera disponible prochainement.`,
        variant: "default",
        duration: 3000,
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12',
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className={cn(
              'font-display text-2xl font-bold transition-colors duration-300',
              isScrolled ? 'text-cifcg-900' : 'text-white'
            )}
          >
            <span className="text-cifcg-600">CIF</span>-CG
          </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {['À propos', 'Actualités', 'Événements', 'Adhésion', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => handleMenuItemClick(item)}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300 flex items-center gap-1',
                    isScrolled ? 'text-cifcg-800 hover:text-cifcg-600' : 'text-white/90 hover:text-white'
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <button 
              onClick={() => setIsMembershipDialogOpen(true)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all duration-300',
                isScrolled 
                  ? 'bg-white text-cifcg-600 hover:bg-cifcg-50 border border-cifcg-200' 
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              )}
            >
              Devenir membre
            </button>
            <button 
              onClick={() => handleMenuItemClick('Faire un don')}
              className="px-4 py-2 bg-cifcg-600 text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-cifcg-700"
            >
              Faire un don
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn('h-6 w-6', isScrolled ? 'text-cifcg-900' : 'text-white')} />
          ) : (
            <Menu className={cn('h-6 w-6', isScrolled ? 'text-cifcg-900' : 'text-white')} />
          )}
        </button>
      </div>

        {/* Mobile Navigation */}
        <nav 
          className={cn(
            'md:hidden fixed top-[72px] right-0 left-0 bg-white shadow-lg pt-4 pb-6 px-6 transition-all duration-300 ease-in-out', 
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          )}
        >
          <ul className="space-y-4 mb-6">
            {['À propos', 'Actualités', 'Événements', 'Adhésion', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  className="block py-2 text-cifcg-800 hover:text-cifcg-600 transition-colors font-medium w-full text-left flex items-center gap-2"
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-3">
            <button 
              className="w-full py-3 text-cifcg-600 border border-cifcg-200 rounded-md font-medium hover:bg-cifcg-50 transition-colors"
              onClick={() => {
                setIsMembershipDialogOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Devenir membre
            </button>
            <button 
              className="w-full py-3 bg-cifcg-600 text-white rounded-md font-medium hover:bg-cifcg-700 transition-colors"
              onClick={() => handleMenuItemClick('Faire un don')}
            >
              Faire un don
            </button>
          </div>
        </nav>
      </header>

      {/* Membership Dialog */}
      <MembershipDialog 
        isOpen={isMembershipDialogOpen} 
        onClose={() => setIsMembershipDialogOpen(false)} 
      />
    </>
  );
};

export default Header;
