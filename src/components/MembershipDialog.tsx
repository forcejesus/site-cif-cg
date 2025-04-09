
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import MembershipForm from './MembershipForm';

interface MembershipDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const MembershipDialog = ({ isOpen, onClose }: MembershipDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-cifcg-800">
            Demande d'adhésion à CIF-CG
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-cifcg-600 mb-6">
            Rejoignez notre communauté francophone au Congo et participez à nos initiatives culturelles, 
            éducatives et sociales. Veuillez remplir ce formulaire pour soumettre votre demande d'adhésion.
          </p>
          <MembershipForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipDialog;
