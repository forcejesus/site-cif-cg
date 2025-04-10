
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
            Rejoignez notre communauté dynamique et devenez acteur du rayonnement de la francophonie au Congo ! 
            En tant que membre, vous bénéficierez d'un réseau professionnel enrichissant, d'événements exclusifs 
            et de l'opportunité de participer à des projets impactants. Suite à votre demande, un membre de notre 
            équipe vous contactera personnellement pour finaliser votre adhésion et vous présenter tous les avantages.
          </p>
          <MembershipForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipDialog;
