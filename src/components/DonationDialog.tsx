
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
            Votre soutien est précieux pour nous aider à réaliser nos projets et soutenir la francophonie au Congo. 
            Veuillez remplir ce formulaire pour nous faire part de votre intention de don.
          </p>
          <DonationForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationDialog;
