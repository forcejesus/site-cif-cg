
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitMembership } from '@/services/formService';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom doit contenir au moins 2 caractères' }),
  lastName: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),
  email: z.string().email({ message: 'Adresse email invalide' }),
  phone: z.string().min(6, { message: 'Numéro de téléphone invalide' }),
});

type FormValues = z.infer<typeof formSchema>;

const MembershipForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Convertir les données du formulaire au format attendu par l'API
      const membershipData = {
        prenom: data.firstName,
        nom: data.lastName,
        adresse_email: data.email,
        telephone: data.phone,
      };

      // Envoyer les données à l'API
      await submitMembership(membershipData);

      toast({
        title: "Demande d'adhésion reçue",
        description: "Merci ! Nous avons bien reçu votre demande d'adhésion et nous vous contacterons prochainement pour finaliser votre inscription.",
        duration: 5000,
      });

      // Fermer le dialogue
      onClose();
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande d'adhésion:", error);
      
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer plus tard.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User size={16} className="text-cifcg-600" /> Prénom
                </FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre prénom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User size={16} className="text-cifcg-600" /> Nom
                </FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Mail size={16} className="text-cifcg-600" /> Adresse Email
              </FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="votre.email@exemple.com" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Phone size={16} className="text-cifcg-600" /> Téléphone
              </FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="+243 XXXXXXXXX" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4 pt-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button 
            type="submit" 
            className="bg-cifcg-600 hover:bg-cifcg-700"
          >
            Envoyer ma demande
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default MembershipForm;
