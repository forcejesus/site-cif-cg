
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { X, User, Mail, Phone, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries } from '@/lib/countries';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom doit contenir au moins 2 caractères.' }),
  lastName: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse email valide.' }),
  phone: z.string().min(8, { message: 'Veuillez saisir un numéro de téléphone valide.' }),
  country: z.string().min(1, { message: 'Veuillez sélectionner un pays.' }),
});

type MembershipFormValues = z.infer<typeof formSchema>;

interface MembershipFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MembershipForm = ({ open, onOpenChange }: MembershipFormProps) => {
  const { toast } = useToast();
  
  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
    },
  });

  const onSubmit = (values: MembershipFormValues) => {
    console.log(values);
    toast({
      title: "Formulaire soumis avec succès",
      description: "Nous vous contacterons bientôt pour finaliser votre adhésion.",
      duration: 5000,
    });
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md md:max-w-xl glass-morphism">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-cifcg-900">Devenir membre</DialogTitle>
          <DialogDescription className="text-cifcg-600">
            Remplissez le formulaire ci-dessous pour rejoindre la Communauté Ivoirienne de France en Côte-d'Or
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-cifcg-800">Prénom</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-cifcg-500" />
                        <Input placeholder="Votre prénom" className="pl-10" {...field} />
                      </div>
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
                    <FormLabel className="text-cifcg-800">Nom</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-cifcg-500" />
                        <Input placeholder="Votre nom" className="pl-10" {...field} />
                      </div>
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
                  <FormLabel className="text-cifcg-800">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-cifcg-500" />
                      <Input placeholder="votre@email.com" className="pl-10" {...field} />
                    </div>
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
                  <FormLabel className="text-cifcg-800">Téléphone</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-cifcg-500" />
                      <Input placeholder="+33 6 XX XX XX XX" className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cifcg-800">Pays</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div className="relative">
                        <Flag className="absolute left-3 top-3 h-4 w-4 text-cifcg-500 pointer-events-none" />
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Sélectionnez votre pays" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent className="max-h-[300px]">
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full py-6 text-base bg-cifcg-600 hover:bg-cifcg-700 transition-colors"
            >
              Soumettre ma demande d'adhésion
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default MembershipForm;
