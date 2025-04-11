
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import MembershipForm from './MembershipForm';
import { Users } from 'lucide-react';

interface MembershipDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const MembershipDialog = ({ isOpen, onClose }: MembershipDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[650px] border-cifcg-200 shadow-lg">
        <DialogHeader className="border-b pb-4 border-cifcg-100">
          <DialogTitle className="text-2xl font-display font-bold text-cifcg-800 flex items-center gap-2">
            <Users className="h-7 w-7 text-cifcg-600" />
            <span>Demande d'adhésion à CIF-CG</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <div className="bg-gradient-to-r from-cifcg-50 to-white p-4 rounded-lg mb-6">
            <p className="text-cifcg-700 text-justify leading-relaxed">
              Rejoignez notre communauté dynamique et devenez acteur du rayonnement de la francophonie au Congo ! 
              En tant que membre, vous bénéficierez d'un réseau professionnel enrichissant, d'événements exclusifs 
              et de l'opportunité de participer à des projets impactants. Suite à votre demande, un membre de notre 
              équipe vous contactera personnellement pour finaliser votre adhésion et vous présenter tous les avantages.
            </p>
          </div>
          <MembershipForm onClose={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipDialog;
