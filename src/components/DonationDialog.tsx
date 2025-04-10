
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DonationForm from './DonationForm';

interface DonationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationDialog = ({ isOpen, onClose }: DonationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-cifcg-800">
            Faire un don à CIF-CG
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-cifcg-600 mb-6">
            Votre générosité est essentielle pour soutenir nos actions au Congo ! Chaque don, quel que soit son montant, 
            contribue directement à nos projets culturels, éducatifs et sociaux pour promouvoir la francophonie. 
            Après votre soumission, nous vous enverrons un email détaillant les différentes méthodes de paiement 
            disponibles pour finaliser votre contribution.
          </p>
          <DonationForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;
