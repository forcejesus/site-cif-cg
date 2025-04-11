
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DonationForm from './DonationForm';
import { HeartHandshake } from 'lucide-react';

interface DonationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationDialog = ({ isOpen, onClose }: DonationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[650px] border-cifcg-200 shadow-lg">
        <DialogHeader className="border-b pb-4 border-cifcg-100">
          <DialogTitle className="text-2xl font-display font-bold text-cifcg-800 flex items-center gap-2">
            <HeartHandshake className="h-7 w-7 text-cifcg-600" />
            <span>Faire un don à CIF-CG</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <div className="bg-gradient-to-r from-cifcg-50 to-white p-4 rounded-lg mb-6">
            <p className="text-cifcg-700 text-justify leading-relaxed">
              Votre générosité est essentielle pour soutenir nos actions au Congo ! Chaque don, quel que soit son montant, 
              contribue directement à nos projets culturels, éducatifs et sociaux pour promouvoir la francophonie. 
              Après votre soumission, nous vous enverrons un email détaillant les différentes méthodes de paiement 
              disponibles pour finaliser votre contribution.
            </p>
          </div>
          <DonationForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;
